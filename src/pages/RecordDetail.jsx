import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from '../css/RecordDetail.module.css';

const RecordDetail = () => {
  const { id } = useParams();
  const records = useSelector((state) => state.record.recordInfo);
  const record = records.find((record) => record._id === id);

  const userRecords = records
    .filter((rec) => rec.userId === record.userId && rec._id !== record._id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const centerRecords = records.filter((rec) => rec.center === record.center);
  const totalLevelSum = centerRecords.reduce(
    (sum, rec) => sum + rec.levelsum,
    0
  );
  const averageLevelSum =
    centerRecords.length > 0
      ? Math.floor(totalLevelSum / centerRecords.length)
      : 0;

  return (
    <div className={`${style.allCon} con1`}>
      <div className={`${style.allBox} mw`}>
        <h2>'{record.nick}' 님의 기록입니다</h2>
        <p>{record.title}</p>
        <p>{record.content}</p>
        <img src={`http://localhost:8000${record.thumbnail}`} alt="thumbnail" />
        <div className={style.relatedRecords}>
          <h3>최근 5번의 기록들입니다</h3>
          {userRecords.map((rec) => (
            <div key={rec._id} className={style.recordItem}>
              <p>{rec.levelsum}</p>
            </div>
          ))}
          <div>
            <p>이 센터를 이용한 분들의 평균기록입니다 {averageLevelSum}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
