import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import style from '../css/Search.module.css';
const Search = () => {
  const [climbingGyms, setClimbingGyms] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('서울특별시');
  const [selectedDistrict, setSelectedDistrict] = useState('강남구');
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.978 });

  useEffect(() => {
    axios
      .get('/api/climbing-gyms')
      .then((response) => setClimbingGyms(response.data))
      .catch((error) => console.error(error));
  }, []);

  // const toggleFavorite = (gym) => {
  //   if (favorites.includes(gym)) {
  //     setFavorites(favorites.filter((fav) => fav !== gym));
  //   } else {
  //     setFavorites([...favorites, gym]);
  //   }
  // };

  useEffect(() => {
    const selectedGym = climbingGyms.find((gym) =>
      gym.name.includes(searchTerm)
    );
    if (selectedGym) {
      setMapCenter({ lat: selectedGym.lat, lng: selectedGym.lng });
    }
  }, [searchTerm, climbingGyms]);

  // const filteredGyms = climbingGyms.filter(
  //   (gym) => gym.name.includes(searchTerm) || gym.location.includes(searchTerm)
  // );

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    const coordinates = districtCoordinates[event.target.value];
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

  const selectedCoordinates = districtCoordinates[selectedCity]?.[
    selectedDistrict
  ] || { lat: 37.5665, lng: 126.978 };

  return (
    <main className={style.search}>
      <div className={style.sidebar}>
        <h2>암장 찾기</h2>

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
          <i class={`fa-solid fa-rotate-left ${style.rotate}`}></i>
        </div>

        <h3>즐겨찾기 목록</h3>
        {/* <ul className={style.list}>
          {favorites.map((gym) => (
            <li key={gym.id} className={style.listItem}>
              {gym.name}
            </li>
          ))}
        </ul> */}
        <div>
          목록 리스트
          {/* <ul className={style.list}>
            {filteredGyms.map((gym) => (
              <li key={gym.id} className={style.listItem}>
                <img src={gym.image} alt={gym.name} />
                <div>{gym.name}</div>
                <div>{gym.location}</div>
                <button
                  className={style.starButton}
                  onClick={() => toggleFavorite(gym)}
                >
                  {favorites.includes(gym) ? (
                    <i class="fa-solid fa-star"></i>
                  ) : (
                    <i class="fa-regular fa-star"></i>
                  )}
                </button>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      <div className={style.mapContainer}>
        <Map
          center={selectedCoordinates}
          style={{ width: '100%', height: '100%' }}
          level={3}
        >
          {/* {climbingGyms.map((gym) => (
            <MapMarker
              key={gym.id}
              position={{ lat: gym.lat, lng: gym.lng }}
              image={{
                src: favorites.includes(gym)
                  ? 'yellow-marker.png'
                  : 'blue-marker.png',
                size: { width: 24, height: 35 },
              }}
              title={gym.name}
            />
          ))} */}
        </Map>
      </div>
    </main>
  );
};
export default Search;
