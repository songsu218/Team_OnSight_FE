import React from 'react';
import { useSelector } from 'react-redux';
import style from '../css/RankList.module.css';

const RankList = ({ hoveredCard }) => {
  const records = useSelector((state) => state.record.recordInfo);
  const users = useSelector((state) => state.userAll.userAllInfo);

  const userLevelSumMap = {};

  records.forEach((record) => {
    const { userId, levelsum } = record;
    if (userLevelSumMap[userId]) {
      userLevelSumMap[userId] += levelsum;
    } else {
      userLevelSumMap[userId] = levelsum;
    }
  });

  const userList = Object.keys(userLevelSumMap).map((userId) => {
    const user = users.find((user) => user.id === userId) || {};
    return {
      ...user,
      levelsum: userLevelSumMap[userId],
    };
  });

  const top5Users = userList
    .sort((a, b) => b.levelsum - a.levelsum)
    .slice(0, 5);

  return (
    <ul className={style.rankListCon}>
      <div className={style.btnBox}>
        <button>전체</button>
      </div>
      {top5Users.map((user, index) => (
        <li
          key={user.id}
          className={`${style.rankListCard} ${
            hoveredCard === index + 1 ? style.hover : ''
          }`}
        >
          <strong>{index + 1}</strong>
          <span>
            <img
              src={`http://localhost:8000${user.thumbnail}` || '/img/test.jpg'}
              alt=""
            />
            <strong>{user.nick || '클라이머'}</strong>
          </span>
          <span>{user.levelsum.toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default RankList;
