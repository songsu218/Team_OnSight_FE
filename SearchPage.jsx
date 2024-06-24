import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import style from '../css/Search.module.css';

const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

const SearchPage = () => {
  const [climbingCenters, setClimbingCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('서울특별시');
  const [selectedDistrict, setSelectedDistrict] = useState('전체');
  const [mapCenter, setMapCenter] = useState({ lat: 37.573, lng: 126.9794 });
  const [selectedCenterInfo, setSelectedCenterInfo] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentCenter, setCurrentCenter] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/center')
      .then((response) => {
        setClimbingCenters(response.data);
      })
      .catch((error) => console.error('API 요청 에러:', error));
  }, []);

  // 초성 검색을 위해
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
    setSearchResults(results);
    if (results.length === 1) {
      setSelectedCenterInfo(results[0]);
    } else {
      setSelectedCenterInfo(null);
    }
  };

  useEffect(() => {
    if (selectedCenterInfo) {
      setMapCenter({
        lat: selectedCenterInfo.latlng.lat,
        lng: selectedCenterInfo.latlng.lng,
      });
    }
  }, [selectedCenterInfo]);

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    if (event.target.value === '전체') {
      setMapCenter({ lat: 37.573, lng: 126.9794 });
      setSearchResults([]);
    } else {
      const coordinates =
        districtCoordinates[selectedCity]?.[event.target.value];
      if (coordinates) {
        setMapCenter(coordinates);
      }
      // 선택한 구에 해당하는 클라이밍장 목록 필터링
      const results = climbingCenters.filter(
        (center) => center.gu === event.target.value
      );
      setSearchResults(results);
    }
  };
  // 새로고침
  const handleRefresh = () => {
    setSearchTerm('');
    setSelectedCity('서울특별시');
    setSelectedDistrict('전체');
    setMapCenter({ lat: 37.573, lng: 126.9794 });
    setSelectedCenterInfo(null);
    setSearchResults([]);
  };
  // 추후 몽고db에 저장 예정
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
  // 맵마커 클릭시 디테일 보여주기
  const handleMarkerClick = (center) => {
    setCurrentCenter(center);
    setShowDetails(true);
  };
  // 리스트 클릭시 지도 이동, 디테일 보여주기
  const handleListClick = (center) => {
    setCurrentCenter(center);
    setMapCenter({ lat: center.latlng.lat, lng: center.latlng.lng });
    setShowDetails(true);
  };

  // X눌렀을 때
  const handleCloseDetails = () => {
    setShowDetails(false);
    setCurrentCenter(null);
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

  useEffect(() => {
    if (currentCenter) {
    }
  }, [currentCenter]);

  const selectedCoordinates = districtCoordinates[selectedCity]?.[
    selectedDistrict
  ] || { lat: 37.573, lng: 126.9794 };

  return (
    <main className={`${style.search} viewCon`}>
      <div
        className={`${style.sidebar} ${
          showDetails ? style.sidebarDetails : ''
        }`}
      >
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
              <h4>{currentCenter.center}</h4>
              <p>{currentCenter.gu}</p>
              {/* 즐겨찾기 */}
            </div>

            <div className={style.centerHome}>
              <div className={style.centerAddress}>
                <i className="fa-solid fa-location-pin"></i>
                {currentCenter.si} {currentCenter.gu} {currentCenter.address}
              </div>
              <div>
                <i className="fa-solid fa-phone"></i>
                {currentCenter.contact}
              </div>
              <div>
                <i className="fa-solid fa-globe"></i>
                <a
                  href={currentCenter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentCenter.website}
                </a>
              </div>
              <p>난이도</p>
              <div className={style.levelContainer}>
                {Object.entries(currentCenter.level).map(([key, value]) => (
                  <div
                    key={key}
                    className={style.levelBox}
                    style={{ backgroundColor: value }}
                  ></div>
                ))}
              </div>

              <div>
                <p>소개글</p>
                {currentCenter.detail}
              </div>
            </div>
          </div>
        ) : (
          <>
            <h3>암장 찾기</h3>
            <div className={style.selectCity}>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
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
                onChange={(e) => setSearchTerm(e.target.value)}
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

            {searchResults.length > 0 && (
              <div className={style.searchResults}>
                {searchResults.map((center) => (
                  <div
                    key={center._id}
                    className={style.centerList}
                    onClick={() => handleListClick(center)}
                  >
                    <img src={center.thumbnail} alt={center.center} />
                    <div className={style.centerInfo}>
                      <h4>{center.center}</h4>
                      <p>{center.gu}</p>
                    </div>
                    <p className={style.centerDetail}>{center.detail}</p>
                    <p className={style.centerRecord}>기록 3000</p>
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
              <MapMarker
                key={center._id}
                position={{ lat: center.latlng.lat, lng: center.latlng.lng }}
                onClick={() => handleMarkerClick(center)}
              >
                <div className={style.centerName}>{center.center}</div>
              </MapMarker>
            ))}
        </Map>
      </div>
    </main>
  );
};

export default SearchPage;
