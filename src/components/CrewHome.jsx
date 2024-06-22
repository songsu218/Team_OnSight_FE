import React from 'react';
import CrewGroupfeed from './CrewGroupfeed';
import style from '../css/CrewHome.module.css';

const CrewHome = () => {
  return (
    <div>
      <div className={style.introCrew}>
        <div className={style.crewImgCon}>
          <img src="img/on_sight.jpg" alt="크루이미지" />
        </div>
        <p>저희 크루는 이런이런 크루입니다 이런이런 크루 이런이런 크루</p>
        <span>피드</span>
      </div>
      <CrewGroupfeed />
    </div>
  );
};

export default CrewHome;
