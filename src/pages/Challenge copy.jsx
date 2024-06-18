import style from "../css/challenge.module.css";
import React from "react";
import "swiper/css";

const Challengecopy = () => {

  const swiperslide = 'swiper-slide';
  const swiperwrapper = 'swiper-wrapper';
  const swiperbuttonprev = 'swiper-button-prev';
  const swiperpagination = 'swiper-pagination';
  const autoplayprogress = 'autoplay-progress';
  const controlbtn = 'control-btn';
  const btnstop = 'btn-stop';
  const btnplay = 'btn-play';
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <main id={style.content}>
        <div className={style.content}>
          {/* h1은 로고(사이트명)이라 가정하고 */}
          <div className={style.page_tit_area}>
            <h2 className={style.page_tit}>챌린지 일정</h2>
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
          <div className={style.sub_tit_area}>
            <h3 className={style.sub_tit}>2024</h3>
          </div>
          <div className={style.filter_option}>
            <label htmlFor="challengeOption1" className={style.option_label}>
              <span>상태</span>
            </label>
            <select id={style.challengeOption1} className={style.option_list}>
              <option>선택</option>
              <option value={1}>진행 중</option>
              <option value={2}>진행 끝</option>
            </select>
          </div>
          <div className={style.challenge_wrap}>
            <div className={`${style.swiper} ${style.mySwiper}`}>
              <div className={style[swiperwrapper]}>
                <div className={style[swiperslide]}>
                  <a
                    href="https://www.naver.com"
                    title="해당 챌린지 상세 페이지로 이동"
                    className={style.challenge_link}
                    target="_blank"
                  >
                    <div className={style.challenge_img}>
                      <img
                        src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                        alt="A챌린지"
                      />
                    </div>
                    <span className={style.challenge_cate}>클라이밍장 이름</span>
                    <em className={style.challenge_tit}>A챌린지</em>
                    <span className={style.challenge_txt}>
                      2024.06.20(목) ~ 2024.06.23(일)
                      <p />
                    </span>
                  </a>
                </div>
                <div className={style[swiperslide]}>
                  <a
                    href="#"
                    title="해당 챌린지 상세 페이지로 이동"
                    className={style.challenge_link}
                  >
                    <div className={style.challenge_img}>
                      <img
                        src="https://mblogthumb-phinf.pstatic.net/MjAxODExMDFfODMg/MDAxNTQxMDQ5NTQ4MDM1.HTE_ClokpSF4eWutgUkimC8L8qU4WdgCayAfSDfY1NQg.Vv6m5UgI_1kXKBIgrdRIlznAyTh3ng9mGMtAv8Ccdcog.JPEG.jung_nang_gu/%ED%99%8D%EB%B3%B4%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?type=w800"
                        alt="A챌린지"
                      />
                    </div>
                    <span className={style.challenge_cate}>연극</span>
                    <em className={style.challenge_tit}>B챌린지B챌린지B챌린지</em>
                    <span className={style.challenge_txt}>
                      2024.06.20(목) ~ 2024.06.23(일)
                      <p />
                    </span>
                  </a>
                </div>
                <div className={style[swiperslide]}>
                  <a
                    href="#"
                    title="해당 챌린지 상세 페이지로 이동"
                    className={style.challenge_link}
                  >
                    <div className={style.challenge_img}>
                      <img
                        src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                        alt="A챌린지"
                      />
                    </div>
                    <span className={style.challenge_cate}>연극 이름</span>
                    <em className={style.challenge_tit}>A챌린지</em>
                    <span className={style.challenge_txt}>
                      2024.06.20(목) ~ 2024.06.23(일)
                      <p />
                    </span>
                  </a>
                </div>
                <div className={style[swiperslide]}>
                  <a
                    href="#"
                    title="해당 챌린지 상세 페이지로 이동"
                    className={style.challenge_link}
                  >
                    <div className={style.challenge_img}>
                      <img
                        src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                        alt="A챌린지"
                      />
                    </div>
                    <span className={style.challenge_cate}>클라이밍장 이름</span>
                    <em className={style.challenge_tit}>A챌린지</em>
                    <span className={style.challenge_txt}>
                      2024.06.20(목) ~ 2024.06.23(일)
                      <p />
                    </span>
                  </a>
                </div>
                <div className={style[swiperslide]}>
                  <a
                    href="#"
                    title="해당 챌린지 상세 페이지로 이동"
                    className={style.challenge_link}
                  >
                    <div className={style.challenge_img}>
                      <img
                        src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                        alt="A챌린지"
                      />
                    </div>
                    <span className={style.challenge_cate}>클라이밍장 이름</span>
                    <em className={style.challenge_tit}>A챌린지</em>
                    <span className={style.challenge_txt}>
                      2024.06.20(목) ~ 2024.06.23(일)
                      <p />
                    </span>
                  </a>
                </div>
              </div>
              <div className={style.control}>
                <div className={style[swiperbuttonprev]}/>
                <div className={style[swiperpagination]} />
                <div className={style[autoplayprogress]}>
                  <svg viewBox="0 0 48 48">
                    <circle cx={24} cy={24} r={20} />
                  </svg>
                  <button
                    type="button"
                    className={`${style[controlbtn]} ${style[controlbtn]} ${style[btnstop]}`}
                    title="정지 버튼"
                  >
                    자동재생 정지 버튼
                  </button>
                  <button
                    type="button"
                    className={`${style[controlbtn]} ${style[btnplay]}`}
                    title="재생 버튼"
                  >
                    재생 버튼
                  </button>
                </div>
                <div className={`${style[controlbtn]} ${style[btnplay]}`}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Challengecopy;
