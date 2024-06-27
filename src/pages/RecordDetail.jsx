import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GaugeChart from "react-gauge-chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import style from "../css/RecordDetail.module.css";

const RecordDetail = () => {
  const { id } = useParams();
  const records = useSelector((state) => state.record.recordInfo);
  const record = records.find((record) => record._id === id);

  const userRecords = records
    .filter((rec) => rec.userId === record.userId && rec._id !== record._id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const centerRecords = records.filter((rec) => rec.center === record.center);
  // const totalLevelSum = centerRecords.reduce(
  //   (sum, rec) => sum + rec.levelsum,
  //   0
  // );
  // const averageLevelSum =
  //   centerRecords.length > 0
  //     ? Math.floor(totalLevelSum / centerRecords.length)
  //     : 0;
  // 평균값 구한거임, 언젠가 다시 쓸지도 모르니까

  const levelSums = centerRecords
    .map((rec) => rec.levelsum)
    .sort((a, b) => a - b);

  const recordIndex = levelSums.indexOf(record.levelsum);
  const percentileRank = Math.floor(
    ((levelSums.length - recordIndex - 1) / levelSums.length) * 100
  );

  const transformDate = (records) => {
    return records
      .map((record) => ({
        ...record,
        date: new Date(record.date).toLocaleDateString(),
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const transformedUserRecords = transformDate(userRecords);

  return (
    <div className={`${style.allCon} con1`}>
      <div className={`${style.allBox} mw`}>
        <h2>{record.title}</h2>
        <div className={style.recordWrap}>
          <div className={style.leftBox}>
            <div className={style.imgBox}>
              <img
                src={`http://localhost:8000${record.thumbnail}`}
                alt="thumbnail"
              />
            </div>
            <span>{new Date(record.date).toLocaleDateString()}</span>
            <p>{record.content}</p>
          </div>
          <div className={style.rightBox}>
            <div className={style.gaugeBox}>
              <GaugeChart
                className={style.opacity0}
                id="gauge-chart1"
                hideText={true}
                arcPadding={0}
                percent={1 - percentileRank / 100}
                arcWidth={0.3}
                arcsLength={[100 - percentileRank, percentileRank]}
                colors={["#0295CF", "#F1F1F1"]}
                cornerRadius={0}
                needleColor={"#000000"}
                needleBaseColor={"#000000"}
              />
              <p>
                <span>'{record.nick}'</span> 님의 이 기록은
                <br />
                <span> '{record.center}'</span> 에서 <br />
                상위 <span>'{percentileRank}%'</span> 에 위치하고 있어요
              </p>
            </div>
            <div className={style.relatedRecords}>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart
                  data={transformedUserRecords}
                  margin={{ top: 0, right: 100, bottom: 20, left: 100 }}
                >
                  <XAxis dataKey="date" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="levelsum"
                    stroke="#A2D262"
                    strokeWidth={8}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p>최근 기록 변동</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
