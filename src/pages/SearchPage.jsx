import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import style from '../css/Search.module.css';

const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

const Search = () => {
  const [climbingCenters, setClimbingCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('서울특별시');
  const [selectedDistrict, setSelectedDistrict] = useState('구로구');
  const [mapCenter, setMapCenter] = useState({ lat: 37.4955, lng: 126.8875 });
  const [selectedCenterInfo, setSelectedCenterInfo] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/center')
      .then((response) => setClimbingCenters(response.data))
      .catch((error) => console.error('API 요청 에러:', error));
  }, []);

  useEffect(() => {
    const selectedCenter = climbingCenters.find((center) =>
      center.center.includes(searchTerm)
    );
    if (selectedCenter) {
      setMapCenter({
        lat: selectedCenter.latlng.lat,
        lng: selectedCenter.latlng.lng,
      });
    }
  }, [searchTerm, climbingCenters]);

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    const coordinates = districtCoordinates[selectedCity]?.[event.target.value];
    if (coordinates) {
      setMapCenter(coordinates);
    }
  };

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
  ] || { lat: 37.5665, lng: 126.978 };

  return (
    <main className={style.search}>
      <div className={style.sidebar}>
        <h3>암장 찾기</h3>

        <div className={style.selectCity}>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="서울특별시">서울특별시</option>
          </select>
          <select value={selectedDistrict} onChange={handleDistrictChange}>
            {Object.keys(districtCoordinates[selectedCity] || {}).map(
              (district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <input
            type="text"
            className={style.searchInput}
            placeholder="검색창"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i
            className={`fa-solid fa-magnifying-glass ${style.readingGlasses}`}
          ></i>
          <i className={`fa-solid fa-rotate-left ${style.rotate}`}></i>
        </div>

        {selectedCenterInfo && (
          <div className={style.centerList}>
            <img
              src={selectedCenterInfo.thumbnail}
              alt={selectedCenterInfo.center}
            />
            <div className={style.centerInfo}>
              <h4>{selectedCenterInfo.center}</h4>
              <p>{selectedCenterInfo.gu}</p>
              {/* 즐겨찾기 */}
            </div>
            <p className={style.centerDetail}>{selectedCenterInfo.detail}</p>

            <p className={style.centerRecord}>기록 3000</p>
          </div>
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
                center.si === selectedCity && center.gu === selectedDistrict
            )
            .map((center) => (
              <MapMarker
                key={center._id}
                position={{ lat: center.latlng.lat, lng: center.latlng.lng }}
                onClick={() => setSelectedCenterInfo(center)}
              >
                <div className={style.centerName}>{center.center}</div>
              </MapMarker>
            ))}
        </Map>
      </div>
    </main>
  );
};

export default Search;
