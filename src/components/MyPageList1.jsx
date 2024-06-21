import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../css/MyPageList1.module.css";
import List from "./list/List";
import { useEffect, useState } from "react";

const MyPageList1 = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/challenges`, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setChallenges(data);
        } else {
          console.error("Failed to fetch challenges");
        }
      } catch (error) {
        console.error("Error fetching challenges", error);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <section className={style.sec}>
      <div>
        <h3 className={style.sub}>
          <span>참여한</span>
          <span>챌린지</span>
        </h3>
      </div>
      <List items={challenges} />
    </section>
  );
};

export default MyPageList1;
