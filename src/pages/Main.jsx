import axios from 'axios';
import RecordList from '../components/RecordList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUsers } from '../store/userAllStore';

const Main = () => {
  const dispatch = useDispatch();
  const userAll = useSelector((state) => state.userAll.userAllInfo);

  console.log(userAll);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/userall');
        dispatch(setUsers(response.data));
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <main className="viewCon">
      <div>
        <RecordList />
      </div>
    </main>
  );
};

export default Main;
