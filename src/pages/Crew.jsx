import axios from 'axios';
import style from '../css/Crew.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCrewAllInfo } from '../store/crewStore';

const Crew = () => {
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
  };

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchCrew, setSearchCrew] = useState('');

  const dispatch = useDispatch();

  const crew = useSelector((state) => state.crew.crewInfo);
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchCrews = async () => {
      try {
        const response = await axios.get('http://localhost:8000/crew');
        dispatch(setCrewAllInfo(response.data));
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchCrews();
  }, [dispatch]);

  console.log(crew);
  console.log(user);

  const userId = user ? user.id : null;

  const myCrew = crew.filter((crew) => crew.members.includes(userId));

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

  return (
    <main className={`${style.mainCrew} viewCon`}>
      <article>
        <div className={style.myCrewCon}>
          <h3>나의크루 리스트</h3>
          <ul className={style.myCrewListCon}>
            {myCrew.length > 0 ? (
              myCrew.map((crew) => (
                <li key={crew._id} className={style.crewListCard}>
                  <Link to={`/crewdetail/${crew._id}`}>
                    <div className={style.crewImgBox}>
                      <img
                        src={`http://localhost:8000${crew.crewImg}`}
                        alt="crew"
                      />
                    </div>
                    <div className={style.crewTextBox}>
                      <div className={style.crewNameBox}>
                        <strong>{crew.name}</strong>
                        <span> {crew.gu} </span>
                      </div>
                      <p>{crew.content}</p>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <li>나의 크루가 없습니다.</li>
            )}
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
          {crew
            .filter((crew) => !myCrew.map((c) => c._id).includes(crew._id))
            .map((crew) => (
              <Link to={`/crewdetail/${crew._id}`}>
                <li key={crew._id} className={style.crewListCard}>
                  <div className={style.recCrewImgBox}>
                    <img
                      src={`http://localhost:8000${crew.crewImg}`}
                      alt="crew"
                    />
                  </div>
                  <div className={style.crewListTextBox}>
                    <strong>{crew.name}</strong>
                    <p> {crew.gu} </p>
                    <p>{crew.content}</p>
                    <span>크루원 : {crew.membercount}명</span>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Crew;
