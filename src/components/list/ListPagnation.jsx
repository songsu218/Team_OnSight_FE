import style from "../../css/ListPagnation.module.css";

const ListPagnation = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page, event) => {
    event.preventDefault();
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // 안전한 페이지 버튼 생성
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="페이지 네비게이션" className={style.navPn}>
      <a
        href="#none"
        data-btn="first"
        className={style.btn}
        onClick={(e) => handleClick(1, e)}
        aria-disabled={currentPage === 1 ? "true" : "false"}
      >
        처음페이지
      </a>
      <a
        href="#none"
        data-btn="before"
        className={style.btn}
        onClick={(e) => handleClick(currentPage - 1, e)}
        aria-disabled={currentPage === 1 ? "true" : "false"}
      >
        이전페이지
      </a>
      {/* <a href="#none">1</a> */}
      {/* 잠시 추가 */}
      {pages.map((page) => (
        <a
          key={page}
          href="#"
          onClick={(e) => handleClick(page, e)}
          aria-current={currentPage === page ? "page" : undefined}
          className={currentPage === page ? style.active : ""}
        >
          {page}
        </a>
      ))}
      {/*  */}
      <a
        href="#none"
        data-btn="next"
        className={style.btn}
        onClick={(e) => handleClick(currentPage + 1, e)}
        aria-disabled={currentPage === totalPages ? "true" : "false"}
      >
        다음페이지
      </a>
      <a
        href="#none"
        data-btn="last"
        className={style.btn}
        onClick={(e) => handleClick(totalPages, e)}
        aria-disabled={currentPage === totalPages ? "true" : "false"}
      >
        마지막페이지
      </a>
    </nav>
  );
};

export default ListPagnation;
