import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import style from "../css/Search.module.css";
import { useSelector } from "react-redux";
import { filterCenters } from "../utils/searchUtils";

const Search = () => {
  const user = useSelector((state) => state.user.userInfo); // 리덕스의 유저정보
  const [centerList, setCenterList] = useState([]); // 센터 리스트
  const [guList, setGuList] = useState([]); // 구 리스트
  const [gu, setGu] = useState("전체"); // 선택된 구 상태 추가
  const [city, setCity] = useState("서울특별시"); // 선택된 시 상태 추가
  const [searchTerm, setSearchTerm] = useState(""); // 검색 상태 추가
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [filteredCenters, setFilteredCenters] = useState([]); // 필터링된 센터 리스트
  const [mapMarkers, setMapMarkers] = useState([]); // 구에 따른 맵마커 리스트

  useEffect(() => {
    const fetchCenterData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/center/centerList",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCenterList(data);
          setFilteredCenters(filterCenters(data, searchTerm, gu)); // 초기 필터링 수행
          setMapMarkers(filterCenters(data, "", gu)); // 초기 구 필터링 수행
        } else {
          console.error("Failed to fetch center");
        }
      } catch (err) {
        console.error("Error fetching center", err);
      }
    };

    const fetchGuData = async () => {
      try {
        const response = await fetch("http://localhost:8000/center/guList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setGuList([
            { gu: "전체", latlng: { lat: 37.5665, lng: 126.978 } },
            ...data,
          ]);
        } else {
          console.error("Failed to fetch gu");
        }
      } catch (err) {
        console.error("Error fetching gu", err);
      }
    };

    fetchCenterData();
    fetchGuData();
  }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때만 실행

  // 콤보박스 부분
  const handleDistrictChange = (e) => {
    const selectedGu = e.target.value;
    setGu(selectedGu);
    const guData = guList.find((g) => g.gu === selectedGu);
    if (guData) {
      setMapCenter({ lat: guData.latlng.lat, lng: guData.latlng.lng });
    } else {
      setMapCenter({ lat: 37.5665, lng: 126.978 }); // 기본 좌표 설정
    }
    const newFilteredCenters = filterCenters(centerList, "", selectedGu);
    setFilteredCenters(newFilteredCenters); // 구 변경 시 필터링 수행
    setMapMarkers(newFilteredCenters); // 구 변경 시 맵마커 업데이트
  };

  // 클릭한 센터로 이동
  const handleCenterClick = (center) => {
    setMapCenter({ lat: center.latlng.lat, lng: center.latlng.lng });
  };

  // 검색 동작을 수행
  const performSearch = () => {
    setFilteredCenters(filterCenters(centerList, searchTerm, gu));
  };

  // 초기 조건으로 되돌리는 함수
  const resetFilters = () => {
    setCity("서울특별시");
    setGu("전체");
    setSearchTerm("");
    setMapCenter({ lat: 37.5665, lng: 126.978 });
    const initialFilteredCenters = filterCenters(centerList, "", "전체");
    setFilteredCenters(initialFilteredCenters);
    setMapMarkers(initialFilteredCenters);
  };

  // 엔터키 이벤트
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const selectedCoordinates = mapCenter;

  return (
    <main className={`viewCon ${style.search}`}>
      <div className={style.sidebar}>
        <h3>암장 찾기</h3>

        <div className={style.selectCity}>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="서울특별시">서울특별시</option>
          </select>
          <select value={gu} onChange={handleDistrictChange}>
            {guList.map((district) => (
              <option key={district.gu} value={district.gu}>
                {district.gu}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            className={style.searchInput}
            placeholder="검색창"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <i
            className={`fa-solid fa-magnifying-glass ${style.readingGlasses}`}
            onClick={performSearch}
          ></i>
          <i
            className={`fa-solid fa-rotate-left ${style.rotate}`}
            onClick={resetFilters}
          ></i>
        </div>
        <div>
          {filteredCenters.map((center) => (
            <div
              key={center._id}
              className={style.centerList}
              onClick={() => handleCenterClick(center)}
            >
              <img src={center.thumbnail} alt={center.center} />
              <div className={style.centerInfo}>
                <div>
                  <h4>{center.center}</h4>
                  <p>{center.gu}</p>
                </div>
                <i></i>
              </div>
              <p className={style.centerDetail}>{center.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.mapContainer}>
        <Map
          center={selectedCoordinates}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          {mapMarkers.map((center) => (
            <MapMarker
              key={center._id}
              position={{ lat: center.latlng.lat, lng: center.latlng.lng }}
              title={center.center}
              onClick={() => handleCenterClick(center)} // 마커 클릭 시에도 지도 이동
            />
          ))}
        </Map>
      </div>
    </main>
  );
};

export default Search;
