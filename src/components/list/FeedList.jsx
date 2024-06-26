import { useState, useEffect } from "react";
import ListPagnation from "./ListPagnation";
import { useNavigate } from "react-router-dom";
import style from "../../css/FeedList.module.css";
const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  let formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(
    new Date(date)
  );
  formattedDate = formattedDate.replace(/\./g, ".");
  if (formattedDate.endsWith(".")) {
    formattedDate = formattedDate.slice(0, -1);
  }
  return formattedDate;
};

const FeedList = ({ items }) => {
  const navigate = useNavigate();
  console.log("전달받음", items);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (items.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentItems(items.slice(startIndex, endIndex));
    }
  }, [currentPage, items]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (items.length > 0) {
      setCurrentPage(1); // items가 변경될 때 첫 페이지로 리셋
    }
  }, [items]);

  return (
    <div>
      <div className={style.listData2}>
        <p className={style.label}>
          <span className={style.lbListNo}>번호</span>
          <span className={style.lbListCrew}>크루</span>
          <span className={style.lbListTitle}>제목</span>
          <span className={style.lbListDate}>등록일</span>
          <span className={style.lbListCnt}>조회수</span>
        </p>
        <ul>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <li
                key={item._id}
                onClick={() => {
                  navigate(`/crewdetail/feeddetail/${item._id}`);
                }}
              >
                <span className={style.listNo}>
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </span>
                <span className={style.listCrew}>{item.crewName}</span>
                <span className={style.listTitle}>{item.title}</span>
                <span className={style.listDate}>
                  {formatDate(item.createdTime)}
                </span>
                <span className={style.listCnt}>{item.views}</span>
              </li>
            ))
          ) : (
            <p className={style.p}> 작성한 피드가 없습니다.</p>
          )}
        </ul>
      </div>
      <div>
        <ListPagnation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FeedList;
