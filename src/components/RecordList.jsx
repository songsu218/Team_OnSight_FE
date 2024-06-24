import style from '../css/RecordList.module.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import RecordModal from './RecordModal';
import { useDispatch, useSelector } from 'react-redux';
import { setRecordAllInfo } from '../store/recordStore';

const RecordList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(`'클라이밍장' `);
  const [currentNick, setCurrentNick] = useState(`'클라이머' `);
  const containerRef = useRef(null);
  const swiperConRef = useRef(null);

  const dispatch = useDispatch();
  const records = useSelector((state) => state.record.recordInfo);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/record');
        dispatch(setRecordAllInfo(response.data));
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchRecords();
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    const swiperCon = swiperConRef.current;
    const boxes = swiperCon.querySelectorAll(`.${style.swiperBox}`);
    const mainHeight = swiperCon.clientHeight;
    const sectionHeight = mainHeight / 7;
    const translateXValues = [0, 40, 80, 120, 80, 40, 0];

    const scrollTop = swiperCon.scrollTop;
    const currentSection = Math.floor(scrollTop / sectionHeight);

    boxes.forEach((box, index) => {
      const relativeIndex = (index - currentSection + 7) % 7;
      let transformValue = translateXValues[relativeIndex];

      if (index === hoveredIndex) {
        transformValue += 50;
      }

      box.style.transform = `translateX(${transformValue}px)`;
    });
  }, [hoveredIndex]);

  useEffect(() => {
    const swiperCon = swiperConRef.current;
    swiperCon.addEventListener('scroll', handleScroll);
    return () => {
      swiperCon.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [records, handleScroll]);

  const handleMouseEnter = (index, center, nick) => {
    setHoveredIndex(index);
    setCurrentCenter(`'${center}' `);
    setCurrentNick(`'${nick}' `);
  };

  return (
    <div>
      <div className={style.listCon} ref={containerRef}>
        <div className={style.swiperCon} ref={swiperConRef}>
          {records &&
            records.map((record, index) => (
              <div
                key={record._id}
                className={style.swiperBox}
                onMouseEnter={() =>
                  handleMouseEnter(index, record.center, record.nick)
                }
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={`http://localhost:8000${record.thumbnail}`}
                  alt="thumbnail"
                />
              </div>
            ))}
        </div>
        <div className={style.textBox}>
          <p>
            <span>{currentCenter}</span>
            에서의
            <br />
            <span>{currentNick}</span> 님의 기록입니다
          </p>
          <div className={style.btnBox}>
            <RecordModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
