import React, { useEffect } from 'react';
import useSearchData from '../hooks/useSearchData';
import MapView from '../components/MapView';
import CenterDetails from '../components/CenterDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchTerm,
  setSelectedCity,
  setSelectedDistrict,
  setMapCenter,
  setSelectedCenterInfo,
  setSearchResults,
  setShowDetails,
  setCurrentCenter,
  setActiveTab,
} from '../store/searchStore';
import { filterCenters } from '../utils/searchUtils';
import style from '../css/Search.module.css';

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
  } = useSelector((state) => state.searchPage);

  const { districtCoordinates } = useSearchData(currentCenter);

  const handleSearch = () => {
    const results = filterCenters(
      climbingCenters,
      searchTerm,
      selectedDistrict
    );
    dispatch(setSearchResults(results));
    if (results.length === 1) {
      dispatch(setSelectedCenterInfo(results[0]));
    } else {
      dispatch(setSelectedCenterInfo(null));
    }
  };

  const handleDistrictChange = (event) => {
    dispatch(setSelectedDistrict(event.target.value));
    if (event.target.value === '전체') {
      dispatch(setMapCenter({ lat: 37.573, lng: 126.9794 }));
      dispatch(setSearchResults([]));
    } else {
      const coordinates = districtCoordinates[event.target.value];
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

  return (
    <main className={`${style.search} ${style.viewCon}`}>
      <div className={style.sidebar}>
        {showDetails && currentCenter ? (
          <CenterDetails
            currentCenter={currentCenter}
            showDetails={showDetails}
            activeTab={activeTab}
            records={records}
            handleCloseDetails={handleCloseDetails}
            setActiveTab={(tab) => dispatch(setActiveTab(tab))}
          />
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
                {Object.keys(districtCoordinates).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
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
                      {/* 즐찾 */}
                    </div>
                    <p className={style.centerDetail}>{center.detail}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={style.searchResults}>
                {climbingCenters.map((center) => (
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
                      {/* 즐찾 */}
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
        <MapView
          mapCenter={mapCenter}
          climbingCenters={climbingCenters}
          selectedCity={selectedCity}
          selectedDistrict={selectedDistrict}
          handleMarkerClick={handleMarkerClick}
        />
      </div>
    </main>
  );
};

export default SearchPage;
