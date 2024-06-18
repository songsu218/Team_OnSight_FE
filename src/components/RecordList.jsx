import style from '../css/RecordList.module.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const RecordList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/record');
        setRecords(response.data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchRecords();
  }, []);

  const restrictText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      spaceBetween={80}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        980: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1350: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {records.map((record) => (
        <SwiperSlide key={record._id}>
          <div className={style.mw}>
            <div className={style.swiperBox}>
              <div className={style.swiperCon}>
                <div className={style.imgCon}>
                  <img
                    src={`http://localhost:8000/uploads/${record.thumbnail}`}
                    alt="thumbnail"
                  />
                </div>
                <span>
                  <img src="/img/test.jpg" alt="profile" />
                  <strong>닉네임</strong>
                </span>
                <span>{record.center}</span>
                <div className={style.textBox}>
                  <h3>{restrictText(record.title, 15)}</h3>
                  <p>{record.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecordList;
