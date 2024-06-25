import CrewGroupfeed from './CrewGroupfeed';
import style from '../css/CrewHome.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CrewHome = () => {
  const { crewId } = useParams();
  const crew = useSelector((state) => state.crew.crewInfo);

  console.log(crew);
  console.log(crewId);

  const selectedCrew = crew.find((c) => c._id === crewId);

  if (!selectedCrew) {
    return <div>삭제 되았거나 존재하지 않는 크루입니다.</div>;
  }

  return (
    <div>
      <div key={selectedCrew._id} className={style.introCrew}>
        <div className={style.crewImgCon}>
          <img
            src={`http://localhost:8000${selectedCrew.crewImg}`}
            alt="crew"
          />
        </div>
        <p>{selectedCrew.content}</p>
        <span>피드</span>
      </div>
      <CrewGroupfeed />
    </div>
  );
};

export default CrewHome;
