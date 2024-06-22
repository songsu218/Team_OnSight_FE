import { useNavigate } from 'react-router-dom';
import style from '../css/CrewGroupfeed.module.css';

const CrewGroupfeed = () => {
  const navigate = useNavigate();

  return (
    <div className={style.listData2}>
      <p className={style.label}>
        <span className={style.lbListNo}>번호</span>
        <span className={style.lbListTitle}>제목</span>

        <span className={style.lbListDate}>등록일</span>
        <span className={style.lbListCnt}>조회수</span>
      </p>
      <ul>
        <li
          onClick={() => {
            navigate(`/crewdetail/feeddetail`);
          }}
        >
          <div id="listNo"></div>
          <span className={style.listNo}>1</span>
          <div id="listTitle"></div>
          <span className={style.listTitle}>
            dfsdfsdfsdfsdfsdfsfsdfsf{' '}
            dsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfipsumsdfsdfsdfsdfsdfsdfsfsdfsf{' '}
            dsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsf{' '}
          </span>
          <div id="listDate"></div>
          <span className={style.listDate}>2024.06.19</span>
          <div id="listCnt"></div>
          <span className={style.listCnt}>105</span>
        </li>
      </ul>
    </div>
  );
};

export default CrewGroupfeed;

{
  /* 시간이 된다면 좋아요 기능추가 */
}
