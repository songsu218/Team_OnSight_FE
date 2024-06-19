// import style from "../css/challengeDetail.module.css";
// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import ChallengeJoinUser from "../components/challenge/ChallengeJoinUser";

// const ChallengeDetail = () => {
//   const { challenge_id, challenge_name } = useParams(); // 챌린지 제목
//   const location = useLocation();
//   const { detailData } = location.state || {}; // 파라미터

//   const [ongoing, setOngoing] = useState(false);
//   const [challenge_img, setChallenge_img] = useState(detailData.images); // 챌린지 이미지
//   const [challenge_period, setChallenge_period] = useState(detailData.date); // 챌린지 기간
//   const [challenge_center, setChallenge_center] = useState(detailData.center); // 챌린지 장소

//   const handleJoinClick = () => {
//     alert("참가하기 버튼 클릭");
//   }
//   const today = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();
//     if (month < 10) {
//       month = "0" + month;
//     }
//     if (day < 10) {
//       day = "0" + day;
//     }
//     return `${year}${month}${day}`;
//   };

//   useEffect(() => {
//     const checkDate = () => {
//       if (today() > detailData.date) {
//         setOngoing(false);
//       } else if (today() <= detailData.date) {
//         setOngoing(true);
//       } else {
//         console.log("몰?루");
//       }
//     };
//     checkDate();
//   }, [detailData]);

//   // 참여자 테스트용
//   const [names, setNames] = useState(['Alice','Bob','Charlie','David','Emma','Frank','Grace','Henry','Ivy','Jac']);

//   return (
//     <>
//     <main id={style.container}>
//       <div className={style.content}>
//         {/* h1은 로고(사이트명)이라 가정하고 */}
//         {/* 아래 타이틀 및 페이지 네비 영역은 들어가야 챌린지 일정과 헤딩 태그 레벨이 맞음. */}
//         <div className={style.page_tit_area}>
//           <h2 className={style.page_tit}>챌린지 상세</h2>
//           <nav className={style.page_nav}>
//             <ul>
//               <li className={style.active}>
//                 <a
//                   href="#"
//                   className={style.page_link}
//                   title="나의 챌린지 만들기 페이지 이동 링크"
//                 >
//                   나의 챌린지 만들기
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className={style.page_link}
//                   title="나의 챌린지 보기 페이지 이동 링크"
//                 >
//                   나의 챌린지 보기
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div className={style.challenge_detail_wrap}>
//           <div className={style.challenge_info}>
//             <div className={style.challenge_img}>
//               <img
//                 srcSet={`${challenge_img}?h=120&fit=crop&auto=format&dpr=2 2x`}
//                 src={`${challenge_img}?h=120&fit=crop&auto=format`}
//                 alt={challenge_name}
//               />
//             </div>
//             <div className={style.challenge_detail}>
//               <div className={style.sub_tit_area}>
//                 <h3 className={style.sub_tit}>
//                   {challenge_name}
//                 </h3>
//                 <ul className={style.detail_list}>
//                   <li>
//                     <span className={style.bold}>기간</span>
//                     <span>{challenge_period}</span>
//                     {ongoing
//                     ? <span className={style.status}>진행중</span>
//                     :<span className={style.status_end}>기간 끝</span>
//                     }
//                   </li>
//                   <li>
//                     <span className={style.bold}>장소</span>
//                     <span>{challenge_center}</span>
//                   </li>
//                 </ul>
//                 <div className={style.apply_btn_wrap}>
//                   <button type="button" id="applyBtn" className={style.apply_btn} onClick={() => handleJoinClick()}>
//                     참가하기
//                   </button>
//                 </div>
//                 <div className={style.entry_list_wrap}>
//                   <button type="button" className={style.entry_list_btn}>
//                     챌린지 참여자
//                   </button>
//                   <ul className={style.entry_list}>
//                   {names.map((name, index) => (
//                       <ChallengeJoinUser key={index} user_name={name}/>
//                   ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={style.detail_contents}>
//             <p className={style.noti_txt}>
//               * 집계는 <em>챌린지가 끝난 후</em> 결정돼요.
//             </p>
//             <div className={style.rank_table_wrap}>
//               <table className={style.rank_table}>
//                 <thead>
//                   <tr>
//                     <th>프로필</th>
//                     <th>등수</th>
//                     <th>닉네임</th>
//                     <th>점수</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className={style.rank_profile}>
//                         <img src="https://mblogthumb-phinf.pstatic.net/MjAyMjEwMjhfMTcw/MDAxNjY2OTI1MDg3NDc4.AqT5btEHT3IVVM7qSccX1tZVYYhvaLqKqTHfo1Ec0pgg.OYgm3LMWb8gLiVxA66TKB98AIN8zH_yb7URx43L7Cfkg.JPEG.fotovista/%EA%B4%91%EC%A3%BC%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_FOTO7095.jpg?type=w800" />
//                         <span className={style.trophy} />
//                       </div>
//                     </td>
//                     <td>1등</td>
//                     <td>류규환</td>
//                     <td>1000</td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <div className={style.rank_profile}>
//                         <img src="https://water.eng.chula.ac.th/wp-content/uploads/2019/03/person-placeholder-1-300x300.png" />
//                         <span className={style.trophy} />
//                       </div>
//                     </td>
//                     <td>2등</td>
//                     <td>류규환</td>
//                     <td>1000</td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <div className={style.rank_profile}>
//                         <img src="https://www.canr.msu.edu/contentAsset/image/bfd398cd-cf4d-4e14-9813-3d699536fdce/fileAsset/filter/Jpeg,Resize/jpeg_q/80/resize_w/400" />
//                         <span className={style.trophy} />
//                       </div>
//                     </td>
//                     <td>3등</td>
//                     <td>류규환</td>
//                     <td>1000</td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <div className={style.rank_profile}>
//                         <img src="https://www.canr.msu.edu/contentAsset/image/bfd398cd-cf4d-4e14-9813-3d699536fdce/fileAsset/filter/Jpeg,Resize/jpeg_q/80/resize_w/400" />
//                       </div>
//                     </td>
//                     <td>4등</td>
//                     <td>류규환</td>
//                     <td>1000</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   </>

//   );
// };

// export default ChallengeDetail;
