import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import style from '../css/CrewGroupfeed.module.css';

const CrewGroupfeed = () => {
  const { crewId } = useParams();
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/feed/crew/${crewId}`
        );
        setFeeds(response.data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchFeeds();
  }, [crewId]);

  return (
    <div className={style.listData2}>
      <p className={style.label}>
        <span className={style.lbListNo}>번호</span>
        <span className={style.lbListTitle}>제목</span>
        <span className={style.lbListDate}>등록일</span>
        <span className={style.lbListCnt}>조회수</span>
      </p>
      <ul>
        {feeds.map((feed, index) => (
          <li
            key={feed._id}
            onClick={() => {
              navigate(`/crewdetail/feeddetail/${feed._id}`);
            }}
          >
            <div id="listNo"></div>
            <span className={style.listNo}>{index + 1}</span>
            <div id="listTitle"></div>
            <span className={style.listTitle}>{feed.title}</span>
            <div id="listDate"></div>
            <span className={style.listDate}>
              {new Date(feed.createdTime).toLocaleDateString()}
            </span>
            <div id="listCnt"></div>
            <span className={style.listCnt}>150</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewGroupfeed;
