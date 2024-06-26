import React, { useEffect } from 'react';
import axios from 'axios';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import style from '../css/Search.module.css';
import RecordModal from '../components/RecordModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setClimbingCenters,
  setSearchTerm,
  setSelectedCity,
  setSelectedDistrict,
  setMapCenter,
  setSelectedCenterInfo,
  setSearchResults,
  setShowDetails,
  setCurrentCenter,
  setActiveTab,
  setRecords,
  setUserLikes,
  toggleFavorite,
} from '../store/searchStore';

const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

const SearchPage = () => {
  const dispatch = useDispatch();
  const {
    climbingCenters,
    searchTerm,
    selectedCity,
    selectedDistrict,
    mapCenter,
    selectedCenterInfo,
    searchResults,
    showDetails,
    currentCenter,
    activeTab,
    records,
    userLikes,
  } = useSelector((state) => state.searchPage);

  const districtCoordinates = {
    서울특별시: {
      강남구: { lat: 37.5172, lng: 127.0473 },
      강동구: { lat: 37.5301, lng: 127.1238 },
      강서구: { lat: 37.5657, lng: 126.8228 },
      강북구: { lat: 37.6396, lng: 127.0255 },
      관악구: { lat: 37.4784, lng: 126.9516 },
      광진구: { lat: 37.5384, lng: 127.0822 },
      구로구: { lat: 37.4955, lng: 126.8875 },
      금천구: { lat: 37.4569, lng: 126.8955 },
      노원구: { lat: 37.6543, lng: 127.0568 },
      동대문구: { lat: 37.5743, lng: 127.0397 },
      도봉구: { lat: 37.6688, lng: 127.047 },
      동작구: { lat: 37.5124, lng: 126.9395 },
      마포구: { lat: 37.5638, lng: 126.9084 },
      서대문구: { lat: 37.5823, lng: 126.9355 },
      성동구: { lat: 37.5635, lng: 127.0369 },
      성북구: { lat: 37.5894, lng: 127.0164 },
      서초구: { lat: 37.4836, lng: 127.0327 },
      송파구: { lat: 37.5145, lng: 127.1066 },
      영등포구: { lat: 37.5264, lng: 126.8962 },
      용산구: { lat: 37.5311, lng: 126.981 },
      양천구: { lat: 37.5166, lng: 126.8668 },
      은평구: { lat: 37.6027, lng: 126.9292 },
      종로구: { lat: 37.573, lng: 126.9794 },
      중구: { lat: 37.5636, lng: 126.997 },
      중랑구: { lat: 37.6063, lng: 127.0924 },
    },
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/center')
      .then((response) => {
        dispatch(setClimbingCenters(response.data));
      })
      .catch((error) => console.error('API 요청 에러:', error));
  }, [dispatch]);

  useEffect(() => {
    if (currentCenter) {
      axios
        .get(
          `http://localhost:8000/record/center?center=${currentCenter.center}`
        )
        .then((response) => {
          dispatch(setRecords(response.data));
        })
        .catch((error) => console.error('기록 데이터 요청 에러:', error));
    }
  }, [currentCenter, dispatch]);

  const getInitials = (str) => {
    const INITIALS = [
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ];
    return str
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0) - 44032;
        if (code >= 0 && code <= 11171) {
          return INITIALS[Math.floor(code / 588)];
        }
        return char;
      })
      .join('');
  };

  const handleSearch = () => {
    const termInitials = getInitials(searchTerm);
    const results = climbingCenters.filter((center) => {
      const centerInitials = getInitials(center.center);
      return (
        (center.center.includes(searchTerm) ||
          centerInitials.includes(termInitials)) &&
        (selectedDistrict === '전체' || center.gu === selectedDistrict)
      );
    });
    dispatch(setSearchResults(results));
    if (results.length === 1) {
      dispatch(setSelectedCenterInfo(results[0]));
    } else {
      dispatch(setSelectedCenterInfo(null));
    }
  };

  useEffect(() => {
    if (selectedCenterInfo) {
      dispatch(
        setMapCenter({
          lat: selectedCenterInfo.latlng.lat,
          lng: selectedCenterInfo.latlng.lng,
        })
      );
    }
  }, [selectedCenterInfo, dispatch]);

  const handleDistrictChange = (event) => {
    dispatch(setSelectedDistrict(event.target.value));
    if (event.target.value === '전체') {
      dispatch(setMapCenter({ lat: 37.573, lng: 126.9794 }));
      dispatch(setSearchResults([]));
    } else {
      const coordinates =
        districtCoordinates[selectedCity]?.[event.target.value];
      if (coordinates) {
        dispatch(setMapCenter(coordinates));
      }
      const results = climbingCenters.filter(
        (center) => center.gu === event.target.value
      );
      dispatch(setSearchResults(results));
    }
  };

  const handleRefresh = () => {
    dispatch(setSearchTerm(''));
    dispatch(setSelectedCity('서울특별시'));
    dispatch(setSelectedDistrict('전체'));
    dispatch(setMapCenter({ lat: 37.573, lng: 126.9794 }));
    dispatch(setSelectedCenterInfo(null));
    dispatch(setSearchResults([]));
  };

  const handleMarkerClick = (center) => {
    dispatch(setCurrentCenter(center));
    dispatch(setShowDetails(true));
    dispatch(setActiveTab('home'));
  };

  const handleListClick = (center) => {
    dispatch(setCurrentCenter(center));
    dispatch(setMapCenter({ lat: center.latlng.lat, lng: center.latlng.lng }));
    dispatch(setShowDetails(true));
    dispatch(setActiveTab('home'));
  };

  const handleCloseDetails = () => {
    dispatch(setShowDetails(false));
    dispatch(setCurrentCenter(null));
  };

  const toggleFavoriteHandler = (centerId) => {
    dispatch(toggleFavorite(centerId));
    console.log('Updated userLikes:', userLikes);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        console.log('Kakao maps loaded');
      });
    };

    return () => {
      script.remove();
    };
  }, []);

  const selectedCoordinates = districtCoordinates[selectedCity]?.[
    selectedDistrict
  ] || { lat: 37.573, lng: 126.9794 };

  return (
    <main className={`${style.search} ${style.viewCon}`}>
      <div className={style.sidebar}>
        {showDetails && currentCenter ? (
          <div className={style.centerDetails}>
            <i
              className={`fa-solid fa-xmark ${style.iconX}`}
              onClick={handleCloseDetails}
            ></i>
            <img
              src={currentCenter.thumbnail.trim()}
              alt={currentCenter.center}
            />
            <div className={style.centerDetailInfo}>
              <div>
                <h4>{currentCenter.center}</h4>
                <p>{currentCenter.gu}</p>
              </div>
              <i
                className={
                  userLikes.includes(currentCenter._id)
                    ? `fa-solid fa-star ${style.likeStar}`
                    : 'fa-regular fa-star'
                }
                onClick={() => toggleFavoriteHandler(currentCenter._id)}
              ></i>
            </div>
            <div className={style.tabContainer}>
              <button
                className={`${style.tabButtonHome} ${
                  activeTab === 'home' ? style.activeTab : ''
                }`}
                onClick={() => dispatch(setActiveTab('home'))}
              >
                홈
              </button>
              <button
                className={`${style.tabButtonRecode} ${
                  activeTab === 'records' ? style.activeTab : ''
                }`}
                onClick={() => dispatch(setActiveTab('records'))}
              >
                기록
              </button>
            </div>
            <div className={style.tabContent}>
              {activeTab === 'home' && (
                <div className={style.centerHome}>
                  <div className={style.centerAddress}>
                    <i className="fa-solid fa-location-pin"></i>
                    {currentCenter.si} {currentCenter.gu}{' '}
                    {currentCenter.address}
                  </div>
                  <div>
                    <i className="fa-solid fa-phone"></i>
                    {currentCenter.contact}
                  </div>
                  <div className={style.websiteContainer}>
                    <i className="fa-solid fa-globe"></i>
                    <a
                      href={currentCenter.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {currentCenter.website}
                    </a>
                  </div>
                  <div>
                    <p>난이도</p>
                    <div className={style.levelContainer}>
                      {Object.entries(currentCenter.level).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className={style.levelBox}
                            style={{ backgroundColor: value }}
                          ></div>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <p className={style.centerDesc}>소개글</p>
                    <p className={style.centerDetail}>{currentCenter.detail}</p>
                  </div>
                </div>
              )}
              {activeTab === 'records' && (
                <div className={style.centerRecords}>
                  <div className={style.centerRecordNav}>
                    <div className={style.btnBox}>
                      <RecordModal
                        currentCenter={currentCenter}
                        buttonText="기록 추가"
                        buttonClass={style.customButton}
                      />
                    </div>
                  </div>

                  <div>
                    {records.length > 0 ? (
                      records.map((record) => (
                        <div key={record._id} className={style.recordItem}>
                          <div className={style.recordHeader}>
                            {console.log(`${record.userRecordCount}`)}
                            <img
                              src={`http://localhost:8000${record.userThumbnail}`}
                              alt="프로필"
                              className={style.profileImage}
                            />
                            <div className={style.recordUserInfo}>
                              <div className={style.recordNickname}>
                                {record.nick}
                              </div>
                              <div className={style.recordCount}>
                                기록수 {record.userRecordCount || 0}
                              </div>
                            </div>
                          </div>
                          <div className={style.recordContent}>
                            <img
                              src={`http://localhost:8000${record.thumbnail}`}
                              alt="기록 이미지"
                              className={style.recordImage}
                            />
                            <div className={style.recordText}>
                              <h5>{record.title}</h5>
                              <p>{record.content}</p>
                              <div className={style.recordDate}>
                                {new Date(record.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>기록이 없습니다. 기록을 추가해보세요.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <h3>암장 찾기</h3>
            <div className={style.selectCity}>
              <select
                value={selectedCity}
                onChange={(e) => dispatch(setSelectedCity(e.target.value))}
              >
                <option value="서울특별시">서울특별시</option>
              </select>
              <select value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="전체">전체</option>
                {Object.keys(districtCoordinates[selectedCity] || {}).map(
                  (district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className={style.searchCon}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="검색창"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <i
                className={`fa-solid fa-magnifying-glass ${style.readingGlasses}`}
                onClick={handleSearch}
              ></i>
              <i
                className={`fa-solid fa-rotate-left ${style.rotate}`}
                onClick={handleRefresh}
              ></i>
            </div>

            {searchResults.length > 0 ? (
              <div className={style.searchResults}>
                {searchResults.map((center) => (
                  <div
                    key={center._id}
                    className={style.centerList}
                    onClick={() => handleListClick(center)}
                  >
                    <img src={center.thumbnail} alt={center.center} />
                    <div className={style.centerInfo}>
                      <div>
                        <h4>{center.center}</h4>
                        <p>{center.gu}</p>
                      </div>
                      <i
                        className={
                          userLikes.includes(center._id)
                            ? `fa-solid fa-star ${style.likeStar}`
                            : 'fa-regular fa-star'
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavoriteHandler(center._id);
                        }}
                      ></i>
                    </div>
                    <p className={style.centerDetail}>{center.detail}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={style.searchResults}>
                {climbingCenters
                  .filter((center) => userLikes.includes(center._id))
                  .map((center) => (
                    <div
                      key={center._id}
                      className={style.centerList}
                      onClick={() => handleListClick(center)}
                    >
                      <img src={center.thumbnail} alt={center.center} />
                      <div className={style.centerInfo}>
                        <div>
                          <h4>{center.center}</h4>
                          <p>{center.gu}</p>
                        </div>
                        <i
                          className={
                            userLikes.includes(center._id)
                              ? `fa-solid fa-star ${style.likeStar}`
                              : 'fa-regular fa-star'
                          }
                          onClick={(e) => {
                            e.stopPropagation(); // 아이콘 클릭 시 페이지 이동 방지
                            toggleFavoriteHandler(center._id); // toggleFavoriteHandler 사용
                          }}
                        ></i>
                      </div>
                      <p className={style.centerDetail}>{center.detail}</p>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className={style.mapContainer}>
        <Map
          center={mapCenter}
          style={{ width: '100%', height: '100%' }}
          level={3}
        >
          {climbingCenters
            .filter(
              (center) =>
                selectedDistrict === '전체' ||
                (center.si === selectedCity && center.gu === selectedDistrict)
            )
            .map((center) => (
              <React.Fragment key={center._id}>
                <MapMarker
                  position={{ lat: center.latlng.lat, lng: center.latlng.lng }}
                  onClick={() => handleMarkerClick(center)}
                />
                <CustomOverlayMap
                  position={{ lat: center.latlng.lat, lng: center.latlng.lng }}
                  yAnchor={1.5}
                >
                  <div className={style.customOverlay}>
                    <span>{center.center}</span>
                  </div>
                </CustomOverlayMap>
              </React.Fragment>
            ))}
        </Map>
      </div>
    </main>
  );
};

export default SearchPage;
