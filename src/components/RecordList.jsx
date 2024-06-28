import style from '../css/RecordList.module.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import RecordModal from './RecordModal';
import { useDispatch, useSelector } from 'react-redux';
import { setRecordAllInfo } from '../store/recordStore';
import { useNavigate } from 'react-router-dom';

const RecordList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState('클라이밍장');
  const [currentNick, setCurrentNick] = useState('클라이머');
  const [typingCenter, setTypingCenter] = useState('');
  const [typingNick, setTypingNick] = useState('');
  const swiperConRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const records = useSelector((state) => state.record.recordInfo);

  const centerCountRef = useRef(0);
  const nickCountRef = useRef(0);

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
    setCurrentCenter(center || '');
    setCurrentNick(nick || '');
  };

  useEffect(() => {
    centerCountRef.current = 0;
    nickCountRef.current = 0;

    const typeText = (text, setText, countRef) => {
      const interval = setInterval(() => {
        setText((prev) => {
          if (countRef.current < text.length) {
            countRef.current++;
            return text.substring(0, countRef.current);
          } else {
            clearInterval(interval);
            return text;
          }
        });
      }, 50);
      return interval;
    };

    const intervalCenter = typeText(
      currentCenter,
      setTypingCenter,
      centerCountRef
    );
    const intervalNick = typeText(currentNick, setTypingNick, nickCountRef);

    return () => {
      clearInterval(intervalCenter);
      clearInterval(intervalNick);
    };
  }, [currentCenter, currentNick]);

  useEffect(() => {
    setTypingCenter('');
    setTypingNick('');
  }, [currentCenter, currentNick]);

  return (
    <div>
      <div className={style.listCon}>
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
                onClick={() => {
                  navigate(`/recorddetail/${record._id}`);
                }}
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
            <span>'{typingCenter}'</span> 에서의
            <br />
            <span>'{typingNick}'</span> 님의 기록이에요
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
