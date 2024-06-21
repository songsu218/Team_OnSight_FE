import style from '../css/RecordList.module.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const RecordList = () => {
  const [records, setRecords] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(`'어디어디클라이밍장' `);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/record');
        const sortedRecords = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setRecords(sortedRecords);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchRecords();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const boxes = container.querySelectorAll(`.${style.swiperBox}`);
      const mainHeight = container.clientHeight;
      const sectionHeight = mainHeight / 7;
      const translateXValues = [0, 40, 80, 120, 80, 40, 0];

      boxes.forEach((box, index) => {
        const scrollTop = container.scrollTop;
        const currentSection = Math.floor(scrollTop / sectionHeight);
        const relativeIndex = (index - currentSection + 7) % 7;
        let transformValue = translateXValues[relativeIndex];

        if (index === hoveredIndex) {
          transformValue += 100;
          box.style.transform = `translateX(${transformValue}px) scale(1.2)`;
        } else {
          box.style.transform = `translateX(${transformValue}px) scale(1)`;
        }
      });
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [records, hoveredIndex]);

  const handleMouseEnter = (index, center) => {
    setHoveredIndex(index);
    setCurrentCenter(center);
  };

  return (
    <div>
      <div className={style.swiperCon} ref={containerRef}>
        {records.map((record, index) => (
          <div
            key={record._id}
            className={style.swiperBox}
            onMouseEnter={() => handleMouseEnter(index, record.center)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={`http://localhost:8000/uploads/${record.thumbnail}`}
              alt="thumbnail"
            />
          </div>
        ))}
        <div className={style.textBox}>
          <p>
            <span>{currentCenter}</span>
            에서의
            <br />
            <span>'닉네임'</span> 님의 기록입니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
