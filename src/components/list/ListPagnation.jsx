import style from '../../css/ListPagnation.module.css';

const ListPagnation = () => {
  return (
    <nav aria-label="페이지 네비게이션" className={style.navPn}>
      <a href="#none" data-btn="first" className={style.btn}>
        처음페이지
      </a>
      <a href="#none" data-btn="before" className={style.btn}>
        이전페이지
      </a>
      <a href="#none">1</a>
      <a href="#none" data-btn="next" className={style.btn}>
        다음페이지
      </a>
      <a href="#none" data-btn="last" className={style.btn}>
        마지막페이지
      </a>
    </nav>
  );
};

export default ListPagnation;
