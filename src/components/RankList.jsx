import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../css/RankList.module.css';
import axios from 'axios';

const RankList = ({ hoveredCard }) => {
  const records = useSelector((state) => state.record.recordInfo);
  const [users, setUsers] = useState([]);

  console.log(records);
  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/userall');
        setUsers(response.data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchUsers();
  }, []);

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
    const user = users.find((user) => user.id == userId) || {};
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
            <img src={user.thumbnail || '/img/test.jpg'} alt="" />
            <strong>{user.nick || '클라이머'}</strong>
          </span>
          <span>{user.levelsum.toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default RankList;

// const userArray = users && Array.isArray(users) ? users : [];
// // userStore에는 initailState가 null로 돼있어서 이걸 배열로 변경함
// // userStore에서 initialState를 null에서 []로 바꿔도 되는지? 왜 강사님 코드에선 null인지
