import RecordModal from "../components/RecordModal";
import style from "../css/MyPageList1.module.css";
import List from "./list/List";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyPageList2 = () => {
  const [recodes, setRecodes] = useState([]);
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchRecodes = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/recodes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }),
        });

        if (response.ok) {
          const data = await response.json();
          setRecodes(data);
        } else {
          console.error("Failed to fetch recodes");
        }
      } catch (err) {
        console.error("Error fetching recodes", err);
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
          <span>내</span>
          <span>기록</span>
        </h3>
        <button className={style.btn}>
          <RecordModal />
        </button>
      </div>
      <List items={recodes} itemType="recode" />
    </section>
  );
};

export default MyPageList2;
