import style from "../css/MyPageList1.module.css";
import { useOutletContext } from "react-router-dom";
import List from "./list/List";
import { useEffect, useState } from "react";

const MyPageList1 = () => {
  const { user, isOwnProfile } = useOutletContext();
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/challenges`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }),
        });

        if (response.ok) {
          const data = await response.json();
          setChallenges(data);
        } else {
          console.error("Failed to fetch challenges");
        }
      } catch (err) {
        console.error("Error fetching challenges", err);
      }
    };

    if (user) {
      fetchChallenges();
    }
  }, [user]);

  return (
    <section className={style.sec}>
      <div>
        <h3 className={style.sub}>
          <span>참여한</span>
          <span>챌린지</span>
        </h3>
      </div>
      <List items={challenges} itemType="challenge" />
    </section>
  );
};

export default MyPageList1;
