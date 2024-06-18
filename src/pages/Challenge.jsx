import React, { useState, useEffect } from 'react';

import style from '../css/Challenge.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import RecordList from '../components/RecordList';
import ChallengeBox from '../components/challenge/ChallengeBox';

const Challenge = () => {
  return (
    <main className={`${style.mw} ${style.container}`}>
      <div className={style.top_section}>
        <div className={`${style.inner_container}`}>
          <div className={style.inner_top}>
            <div className={`${style.subject}`}>진행 중인 챌린지에요</div>
            <button className={`${style.myCh}`}>나의 챌린지 {'>'} </button>
          </div>
          <div className={style.inner_bottom}>
            <button className={style.leftButton} />
            <div className={style.inner_bottom_item}>
              <ChallengeBox></ChallengeBox>
            </div>
            <button className={style.rightButton} />
          </div>
          상단
        </div>
      </div>
      <div className={style.bottom_section}>
        <div className={`${style.inner_container}`}>
          하단
          <div className={style.inner_top}>
            <div className={`${style.subject}`}>지난 챌린지에요</div>
          </div>
          <div className={style.inner_bottom}>
            <button className={style.leftButton} />
            <div className={style.inner_bottom_item}>
              <ChallengeBox></ChallengeBox>
            </div>
            <button className={style.rightButton} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Challenge;
