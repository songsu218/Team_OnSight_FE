import style from "../css/CrewList.module.css";
// import { CrewDetail } from "./CrewDetail";

export const CrewList = () => {
  // 크루검색
  // const [searchValue, setSearchValue] = useState("");
  // const [filteredCrews, setFilteredCrews] = useState(crews);
  // const [crews, setCrews] = useState([
  //   { name: "크루명1", address: "서울", img: "/img/noimg.jpg" },
  //   { name: "크루명2", address: "부산", img: "/img/noimg.jpg" },
  //   { name: "크루명3", address: "대구", img: "/img/noimg.jpg" },
  //   { name: "크루명4", address: "인천", img: "/img/noimg.jpg" },
  // ]);

  // useEffect(() => {
  //   const results = crews.filter(
  //     (crew) =>
  //       crew.name.includes(searchValue) || crew.address.includes(searchValue)
  //   );
  //   setFilteredCrews(results);
  // }, [searchValue, crews]);

  return (
    <section className={style.rightCon}>
      <div className={style.search}>
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className={style.searchCrew}
            type="text"
            placeholder="크루검색"
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <button>크루생성</button>
      </div>
      <div className={style.listHeader}>
        <span>추천크루</span>
        <span>크루전체보기</span>
      </div>
      <div className={style.recoCrew}>
        <ul className={style.list}>
          <li>
            <img src="/img/noimg.jpg" alt="img" />
            <p>크루명</p>
          </li>
          <li>
            <img src="/img/noimg.jpg" alt="img" />
            <p>크루명</p>
          </li>
          <li>
            <img src="/img/noimg.jpg" alt="img" />
            <p>크루명</p>
          </li>
          <li>
            <img src="/img/noimg.jpg" alt="img" />
            <p>크루명</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
