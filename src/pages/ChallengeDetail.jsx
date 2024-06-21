import style from "../css/challengeDetail.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import ChallengeJoinUser from "../components/challenge/ChallengeJoinUser";
import { ch } from "../api.js";

const ChallengeDetail = () => {
  //#region 변수,Hook
  const location = useLocation();
  const { detailData } = location.state || {}; // 파라미터
  // const [ongoing, setOngoing] = useState(false); //detailData에서 state가 넘어와서 해당기능 주석.
  const [wrapClass, setWrapClass] = useState(style.challenge_detail_wrap);
  const [challenge_img, setChallenge_img] = useState(detailData.images); // 챌린지 이미지
  const [challenge_period, setChallenge_period] = useState(
    detailData.date_string
  ); // 챌린지 기간
  const [challenge_center, setChallenge_center] = useState(detailData.center); // 챌린지 장소
  const [joinList, setJoinList] = useState([]);
  const [rank, setRank] = useState([]);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState();

  //#endregion 변수,Hook

  //#region init
  useEffect(() => {
    console.log(detailData.state);
    ch.chJoinList(detailData.challengename)
      .then((result) => {
        console.log('참여자 목록');
        console.log(result.data);
        setJoinList(result.data);
      })
      .catch((error) => {
        console.log(`${error}`);
      });
      if (detailData.state === "PAST") {
        setWrapClass(`${style.challenge_detail_wrap} ${style.end}`);
        console.log(detailData.challengename);
        ch.chRank(detailData.challengename)
        .then((result) => {
          console.log('랭킹데이터');
          console.log(result.data);
          setRank(result.data);

          setCurrentItems(result.data.slice(indexOfFirstItem, indexOfLastItem));
          setTotalPages(Math.ceil(result.data.length / itemsPerPage));
        })
        .catch((error) => {
          console.log(`${error}`);
        });
    } else if (detailData.state === "NOW") {
      setWrapClass(style.challenge_detail_wrap);
    }

  }, []);
  //#endregion init

  // 참여자 테스트용
  // const [joinList, setJoinList] = useState([
  //   "Alice",
  //   "Bob",
  //   "Charlie",
  //   "David",
  //   "Emma",
  //   "Frank",
  //   "Grace",
  //   "Henry",
  //   "Ivy",
  //   "Jac",
  // ]);

  // const rank = [
  //   {
  //     rank: 1,
  //     nick: "Alice",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 1500,
  //   },
  //   {
  //     rank: 2,
  //     nick: "Bob",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 1400,
  //   },
  //   {
  //     rank: 3,
  //     nick: "Charlie",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 1300,
  //   },
  //   {
  //     rank: 4,
  //     nick: "David",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 1200,
  //   },
  //   {
  //     rank: 5,
  //     nick: "Emma",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 1100,
  //   },
  //   {
  //     rank: 6,
  //     nick: "Frank",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 1000,
  //   },
  //   {
  //     rank: 7,
  //     nick: "Grace",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 900,
  //   },
  //   {
  //     rank: 8,
  //     nick: "Henry",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 800,
  //   },
  //   {
  //     rank: 9,
  //     nick: "Ivy",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 700,
  //   },
  //   {
  //     rank: 10,
  //     nick: "Jac",
  //     thumbnail:
  //       "https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800",
  //     total: 600,
  //   },
  // ];
  const { challenge_id, challenge_name } = useParams(); // 챌린지 제목

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleJoinClick = () => {
    alert("참가하기 버튼 클릭");
  };
  const today = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}${month}${day}`;
  };

  // detailData에서 state가 넘어와서 해당기능 주석.
  // useEffect(() => {
  //   const checkDate = () => {
  //     if (today() > detailData.date) {
  //       setOngoing(false);
  //     } else if (today() <= detailData.date) {
  //       setOngoing(true);
  //     } else {
  //       console.log("몰?루");
  //     }
  //   };
  //   checkDate();
  // }, [detailData]);

  return (
    <>
      <div className="con1">
        <main id={style.container} className="mw">
          <div className={style.content}>
            {/* h1은 로고(사이트명)이라 가정하고 */}
            {/* 아래 타이틀 및 페이지 네비 영역은 들어가야 챌린지 일정과 헤딩 태그 레벨이 맞음. */}
            <div className={style.page_tit_area}>
              <h2 className={style.page_tit}>챌린지 상세</h2>
              <nav className={style.page_nav}>
                <ul>
                  <li className={style.active}>
                    <a
                      href="#"
                      className={style.page_link}
                      title="나의 챌린지 만들기 페이지 이동 링크"
                    >
                      나의 챌린지 만들기
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={style.page_link}
                      title="나의 챌린지 보기 페이지 이동 링크"
                    >
                      나의 챌린지 보기
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* 기본이 진행중 화면으로  기간이 지난 챌린지에는 아래 div.challenge_detail_wrap에 .end 추가하여 순위 콘텐츠 표시되도록 작업 */}
            <div className={wrapClass}>
              <div className={style.challenge_info}>
                <div className={style.challenge_left}>
                  <div className={style.challenge_img}>
                    <img
                      srcSet={`${challenge_img}`}
                      src={`${challenge_img}`}
                      alt="A챌린지 이미지"
                    />
                  </div>
                  <div className={style.apply_btn_wrap}>
                    <button
                      type="button"
                      id={style.applyBtn}
                      className={style.apply_btn}
                      onClick={() => {
                        handleJoinClick();
                      }}
                    >
                      참가하기
                    </button>
                  </div>
                </div>
                <div className={style.challenge_detail}>
                  <div className={style.sub_tit_area}>
                    <h3 className={style.sub_tit}>
                      {detailData.challengename}
                    </h3>
                    <ul className={style.detail_list}>
                      <li>
                        <span className={style.bold}>기간</span>
                        <span>{challenge_period}</span>
                        {detailData.STATE ? (
                          <span className={`${style.status} ${style.ing}`}>
                            진행중
                          </span>
                        ) : (
                          <span className={`${style.status} ${style.end}`}>
                            기간 끝
                          </span>
                        )}
                      </li>
                      <li>
                        <span className={style.bold}>장소</span>
                        <span>{challenge_center}</span>
                      </li>
                    </ul>
                    <div className={style.entry_list_wrap}>
                      <button type="button" className={style.entry_list_btn}>
                        챌린지 참여자
                      </button>
                      <ul className={style.entry_list}>
                        {joinList.map((data, index) => (
                          <ChallengeJoinUser
                            key={index}
                            user_name={data.nick}
                            thumbnail={data.thumbnail}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.detail_contents}>
                <div className={style.noti_txt}>
                  * 집계는 <em>챌린지가 끝난 후</em> 결정돼요.
                </div>
                <div className={style.rank_table_wrap}>
                  <table className={style.rank_table}>
                    <thead>
                      <tr>
                        <th>프로필</th>
                        <th>등수</th>
                        <th>닉네임</th>
                        <th>점수</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className={style.rank_profile}>
                              <img src={item.thumbnail} alt="Profile" />
                              <span className={style.trophy} />
                            </div>
                          </td>
                          <td>{item.rank}등</td>
                          <td>{item.nick}</td>
                          <td>{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className={style.pagination}>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={
                          index + 1 === currentPage ? style.active : ""
                        }
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChallengeDetail;
