import { useState, useEffect } from "react";
import style from "../../css/List.module.css";
import ListPagnation from "./ListPagnation";
import ListCard from "../ListCard";

const List = ({ items, itemType }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentItems(items.slice(0, itemsPerPage)); // 첫 페이지 아이템 설정
  }, [items]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(items.slice(startIndex, endIndex));
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div>
      <div className={`${style.listData1} ${style.ssw1}`}>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>
              <ListCard
                title={
                  itemType === "challenge" ? item.challengename : item.title
                }
                center={item.center}
                date={item.date}
                thumbnail={item.thumbnail}
                itemType={itemType}
              />
            </li>
          ))}
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

export default List;
