import { useState, useEffect } from "react";
import style from "../../css/List.module.css";
import MyListCard from "../ListCard";
import ListPagnation from "./ListPagnation";

const List = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // MyListCard를 임시 데이터로 대체 (실제 데이터로 변경 필요)
  const myListCards = Array.from({ length: 20 }, (_, index) => (
    <MyListCard key={index} />
  ));

  const totalPages = Math.ceil(myListCards.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const currentItems = myListCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className={`${style.listData1} ${style.ssw1}`}>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
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
