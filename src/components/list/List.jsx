import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../css/List.module.css';
import ListPagnation from './ListPagnation';
import ListCard from '../ListCard';

const List = ({ items, itemType }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (items.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentItems(items.slice(startIndex, endIndex));
    }
  }, [currentPage, items]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (items.length > 0) {
      setCurrentPage(1); // items가 변경될 때 첫 페이지로 리셋
    }
  }, [items]);

  console.log(currentItems);
  return (
    <div>
      <div className={`${style.listData1} ${style.ssw1}`}>
        <ul>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <li
                key={item._id}
                onClick={() => {
                  if (itemType === 'challenge') {
                    navigate(`/challenge/${item._id}/${item.challengename}`, {
                      state: { detailData: item },
                    });
                  } else if (itemType === 'record') {
                    navigate(`/crewdetail/feeddetail/${item._id}`);
                  } else if (itemType === 'center') {
                    navigate(`/center/${item._id}`, {
                      state: { detailData: item },
                    });
                  }
                }}
              >
                <ListCard
                  title={
                    itemType === 'challenge'
                      ? item.challengename
                      : itemType === 'record'
                      ? item.title
                      : item.center
                  }
                  center={item.center}
                  detail={itemType === 'center' ? item.detail : ''}
                  date={itemType === 'center' ? '' : item.date}
                  thumbnail={item.thumbnail}
                  itemType={itemType}
                />
              </li>
            ))
          ) : (
            <p className={style.p}>
              {' '}
              {itemType === 'challenge'
                ? '참여한 챌린저가 없습니다.'
                : itemType === 'record'
                ? '기록한 기록이 없습니다.'
                : '센터가 없습니다.'}
            </p>
          )}
        </ul>
      </div>
      <div>
        <ListPagnation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default List;
