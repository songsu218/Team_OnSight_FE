import style from "../css/Write.module.css";

const Write = () => {
  return (
    <div className="con1">
      <main id={style.container} className="mw">
        <div className={style.content}>
          <div className={style.page_tit_area}>
            <h2 className={style.page_tit}>챌린지 일정</h2>
            <nav className={style.page_nav}>
              <ul>
                <li className={activeIndex === 0 ? style.active : ""}>
                  <a
                    href="#"
                    className={style.page_link}
                    onClick={(event) => handleClick(0, event)}
                    title="챌린지 일정 페이지 이동 링크"
                  >
                    챌린지 일정
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Write;
