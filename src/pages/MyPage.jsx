import style from '../css/MyPage.module.css';
import styleHd from '../css/MyPageHd.module.css';
import styleInfo from '../css/MyPageInfo.module.css';
import MyPageList1 from '../components/MyPageList1';

const MyPage = () => {
  return (
    <main className={`mw ${style.div}`}>
      <section className={styleHd.hdSec}>
        <h2>마이페이지</h2>
        <nav className={styleHd.navSec}>
          <ul>
            <li>
              <a href="">마이홈</a>
            </li>
            <li>
              <a href="">피드</a>
            </li>
            <li>
              <a href="">기록</a>
            </li>
          </ul>
        </nav>
      </section>
      <div className={styleInfo.infoCon}>
        <div>
          <p className={styleInfo.tit}>
            <span>
              <i>류규환</i> 님,
            </span>{' '}
            반갑습니다! <a href="">나의 정보관리</a>
          </p>
        </div>
      </div>
      <MyPageList1 />
    </main>
  );
};

export default MyPage;
