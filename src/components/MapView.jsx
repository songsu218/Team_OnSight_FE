import React from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import style from '../css/Search.module.css';

const MapView = ({
  mapCenter,
  climbingCenters,
  selectedCity,
  selectedDistrict,
  handleMarkerClick,
}) => {
  return (
    <Map center={mapCenter} style={{ width: '100%', height: '100%' }} level={3}>
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
  );
};

export default MapView;
