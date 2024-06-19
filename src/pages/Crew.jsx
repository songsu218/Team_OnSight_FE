import style from "../css/Crew.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Crew = () => {
  // const nick = "춘식이";

  const districtsByRegion = {
    seoul: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
    busan: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
  };

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedDistrict(""); // Reset district selection when region changes
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <main className={`${style.mainCrew}`}>
      <article>
        <div className={style.leftCon}>
          <span>나의크루 리스트</span>
          {/* <p>{nick}님이 가입된 크루가 없습니다.</p> */}
          <ul className={style.mycrewCon}>
            <li>
              <img src="/img/imgsample.jpg" alt="img" />
              <div className={style.mycrew}>
                <div className={style.adress}>
                  <span>name</span>
                  <p> gu구 </p>
                </div>
                <p>content</p>
                <p>인원 : x명</p>
              </div>
            </li>
            <li>
              <img src="/img/noimg.jpg" alt="img" />
              <div className={style.mycrew}>
                <div className={style.adress}>
                  <span>크루명</span>
                  <p> 종로구 </p>
                </div>
                <p>다같이 돌자 동네한바퀴</p>
                <p>인원 : x명</p>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <section className={style.rightCon}>
        <div className={style.righttxt}>
          <h2>추천크루</h2>
          <Link to="/CreateCrew">
            <button>크루생성</button>
          </Link>
        </div>
        <div className={style.rightmenu}>
          <div>
            <label for="region-select">
              <span>지역</span>
            </label>
            <select
              id="region-select"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">선택</option>
              <option value="seoul">서울</option>
              <option value="busan">부산</option>
            </select>
            <label htmlFor="district-select" />
            <select
              id="district-select"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value="">선택</option>
              {selectedRegion &&
                districtsByRegion[selectedRegion].map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              className={style.search}
              placeholder="크루검색"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <ul className={style.crewList}>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>
              content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut nam facere officia doloribus eius, sit, dolorum delectus
              ratione, repudiandae ad suscipit voluptatum. Tenetur rerum sunt
              dicta voluptates temporibus officiis ducimus?
            </p>
            <span>인원수 : xx명</span>
          </li>
          <li>
            <img src="/img/bol.jpg" alt="크루" />
            <h5>크루명</h5>
            <p>content</p>
            <span>인원수 : xx명</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Crew;
