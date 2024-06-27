import style from '../css/MyPageList1.module.css';
import List from './list/List';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyPageList4 = () => {
  const [crews, setCrews] = useState([]);
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchRecodes = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/centerlist`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user }),
        });

        if (response.ok) {
          const data = await response.json();
          setCrews(data);
        } else {
          console.error('Failed to fetch crews');
        }
      } catch (err) {
        console.error('Error fetching crews', err);
      }
    };

    if (user) {
      fetchRecodes();
    }
  }, [user]);

  return (
    <section className={style.sec}>
      <div>
        <h3 className={style.sub}>
          <span>즐겨찾기한</span>
          <span>암장 목록</span>
        </h3>
      </div>
      <List items={crews} itemType="center" />
    </section>
  );
};

export default MyPageList4;
