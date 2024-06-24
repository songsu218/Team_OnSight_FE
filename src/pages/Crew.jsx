import style from '../css/Crew.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Crew = () => {
  // const nick = "춘식이";

  const districtsByRegion = {
    seoul: [
      '종로구',
      '중구',
      '용산구',
      '성동구',
      '광진구',
      '동대문구',
      '중랑구',
      '성북구',
      '강북구',
      '도봉구',
      '노원구',
      '은평구',
      '서대문구',
      '마포구',
      '양천구',
      '강서구',
      '구로구',
      '금천구',
      '영등포구',
      '동작구',
      '관악구',
      '서초구',
      '강남구',
      '송파구',
      '강동구',
    ],
    busan: [
      '중구',
      '서구',
      '동구',
      '영도구',
      '부산진구',
      '동래구',
      '남구',
      '북구',
      '해운대구',
      '사하구',
      '금정구',
      '강서구',
      '연제구',
      '수영구',
      '사상구',
      '기장군',
    ],
  };

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchCrew, setSearchCrew] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedDistrict(''); // Reset district selection when region changes
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchCrew(e.target.value);
  };

  const crewList = [
    {
      crewName: '영통 크루',
      members: '1',
      content: '크루 소개글12341234',
    },
    {
      crewName: '강남 크루',
      members: '2',
      content: '크루 소개글56785678',
    },
    {
      crewName: '북한 크루',
      members: '3',
      content: '크루 소개글12341234',
    },
    {
      crewName: '미국 크루',
      members: '4',
      content: '크루 소개글56785678',
    },
  ];

  const filteredCrewList = crewList.filter((crew) =>
    crew.crewName.includes(searchCrew)
  );

  return (
    <main className={`${style.mainCrew} viewCon`}>
      <article>
        <div className={style.myCrewCon}>
          <h3>나의크루 리스트</h3>
          <ul className={style.myCrewListCon}>
            <li className={style.crewListCard}>
              <Link to="/crewdetail">
                <div className={style.crewImgBox}>
                  <img src="/img/imgsample.png" alt="img" />
                </div>
                <div className={style.crewTextBox}>
                  <div className={style.crewNameBox}>
                    <strong>크루 이름</strong>
                    <span> 영통구 </span>
                  </div>
                  <p>크루 소개글12341234</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <section className={style.rightCon}>
        <div className={style.righttxt}>
          <h2>추천크루</h2>
          <Link to="/CreateCrew">
            <button className={style.crewCreateBtn}>크루생성</button>
          </Link>
        </div>
        <div className={style.rightmenu}>
          <div className={style.selectBox}>
            <span>지역</span>
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
          <div className={style.searchBox}>
            <input
              type="text"
              placeholder="크루검색"
              value={searchCrew}
              onChange={handleSearchChange}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <ul className={style.crewList}>
          {filteredCrewList.map((crew) => (
            <li key={crew} className={style.crewListCard}>
              <div className={style.recCrewImgBox}>
                <img src="/img/imgsample.png" alt="img" />
              </div>
              <div className={style.crewListTextBox}>
                <strong>{crew.crewName}</strong>
                <p>{crew.content}</p>
                <span>크루원 : {crew.members}명</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Crew;
