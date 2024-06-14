import style from '../css/MyPage.module.css';

const MyPage = () => {
  return (
    <main className={style.my}>
      <section>
        <div className={style.myCon}>
          <div>
            <h2>프로필페이지</h2>
          </div>
          <div className={style.info}>
            <section className={style.imgSec}>
              <div className={style.imgBox}>
                <img src="/img/test.jpg" alt="프로필 이미지" />
              </div>
            </section>
            <section className={style.nickSec}>
              <h3>고등어어어어어어어억</h3>
              <a href="">
                <i class="fa-solid fa-gear"></i>
              </a>
            </section>
            <section className={style.summmarySec}>
              <ul>
                <li>
                  <div>
                    기록 수<span></span>
                  </div>
                </li>
                <li>
                  <div>
                    피드 수<span></span>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div style={{ display: 'none' }}>
            <a href="#">
              <div>
                <i class="fa-regular fa-clipboard"></i>
                <span>기록</span>
              </div>
              <div>
                <i class="fa-solid fa-table-list"></i>
                <span>피드</span>
              </div>
            </a>
            <a href="#"></a>
          </div>
          <section></section>
        </div>
      </section>
    </main>
  );
};

export default MyPage;
