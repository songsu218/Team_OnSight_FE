import { Link } from 'react-router-dom';
import style from '../css/CrewDetail.module.css'


const CrewDetail = () => {
    return (
        <main className={`${style.mainCrew}`}>
        <article>
          <div className={style.leftCon}>
            <span>크루원 찾기</span>
            <div className={style.searchCon
            }>
            <input
              type="text"
              className={style.search}
              placeholder="크루원 검색"
            />

<form action="/submit" method="POST">
        <button type="submit" class={style.iconButton}>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
            
          </div>
            <ul className={style.mycrewCon}>
              <li>
             
              </li>
           
            </ul>
          </div>
        </article>
        <section className={style.rightCon}>
          <div className={style.righttxt}>
            <div className={style.crewName}>
            <h2>크루명</h2>
            <span>활동지역</span>
            </div>
            <div className={style.Menu}>
            <Link to="/Write">
              <button>글쓰기</button>
            </Link>
            <Link to="/ManageCrew">
              <button>크루관리</button>
            </Link>
            </div>
          </div>
          <img src="on_sight" alt="크루이미지" />
          <p>소개문구 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis, quia suscipit provident earum at, quam veniam temporibus fugiat, harum quis dignissimos nisi possimus nemo beatae laboriosam quasi totam cumque.</p>
        
        </section>
      </main>
    );
};

export default CrewDetail;
