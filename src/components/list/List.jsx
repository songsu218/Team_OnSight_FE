import style from '../../css/List.module.css';
import MyListCard from '../ListCard';
import ListPagnation from './ListPagnation';

const List = () => {
  return (
    <div>
      <div className={`${style.listData1} ${style.ssw1}`}>
        <ul>
          <li>
            <MyListCard />
          </li>
          <li>
            <MyListCard />
          </li>
          <li>
            <MyListCard />
          </li>
          <li>
            <MyListCard />
          </li>
          <li>
            <MyListCard />
          </li>
          <li>
            <MyListCard />
          </li>
        </ul>
      </div>
      <div>
        <ListPagnation />
      </div>
    </div>
  );
};

export default List;
