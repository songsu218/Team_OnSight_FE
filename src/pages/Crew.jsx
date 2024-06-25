import axios from 'axios';
import style from '../css/Crew.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCrewAllInfo } from '../store/crewStore';

const Crew = () => {
  const districtsByRegion = {
    seoul: [
      '강남구',
      '강동구',
      '강서구',
      '강북구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '동대문구',
      '도봉구',
      '동작구',
      '마포구',
      '서대문구',
      '성동구',
      '성북구',
      '서초구',
      '송파구',
      '영등포구',
      '용산구',
      '양천구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ],
  };

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchCrew, setSearchCrew] = useState('');
  const [toggle, setToggle] = useState(false);
  const [filteredCrew, setFilteredCrew] = useState([]);

  const dispatch = useDispatch();

  const crew = useSelector((state) => state.crew.crewInfo);
  const user = useSelector((state) => state.user.userInfo || null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // 새로고침부분 보류
      navigate('/signinpage');
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchCrews = async () => {
      try {
        const response = await axios.get('http://localhost:8000/crew');
        dispatch(setCrewAllInfo(response.data));
        setFilteredCrew(response.data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchCrews();
  }, [dispatch]);

  useEffect(() => {
    filterCrews();
  }, [selectedDistrict]);

  const userId = user ? user.id : null;

  const myCrew = crew.filter((crew) => crew.members.includes(userId));

  const filterCrews = () => {
    const result = crew.filter((crew) => {
      return (
        (!selectedDistrict || crew.gu === selectedDistrict) &&
        (!searchCrew || crew.name.includes(searchCrew))
      );
    });
    setFilteredCrew(result);
  };

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

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  const handleSearch = () => {
    filterCrews();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main
      className={`${style.mainCrew} ${toggle ? style.mainCrewToggled : ''}`}
    >
      <article>
        <div className={style.myCrewCon}>
          <h3>나의크루 리스트</h3>
          <i
            className={`fa-solid ${
              toggle ? 'fa-angle-right' : 'fa-angle-left'
            } ${toggle ? style.iconLeft : style.iconRight}`}
            onClick={toggleSidebar}
          ></i>
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
              onKeyDown={handleKeyDown}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleSearch}
            ></i>
          </div>
        </div>
        <ul className={style.crewList}>
          {filteredCrew
            .filter((crew) => !myCrew.map((c) => c._id).includes(crew._id))
            .map((crew) => (
              <Link to={`/crewdetail/${crew._id}`} key={crew._id}>
                <li className={style.crewListCard}>
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
