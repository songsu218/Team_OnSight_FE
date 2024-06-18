import style from "../css/challenge.module.css";
import React from "react";
import "swiper/css";

const Challenge = () => {
  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".page-tit-area {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: 0 0 5.6rem;\n    }",
          }}
        />
        <title>Document</title>
        {/* <link
          rel="stylesheet"
          href={style}
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <main id={style.container}>
          <div className={style.content}>
            {/* h1은 로고(사이트명)이라 가정하고 */}
            <div className="page-tit-area">
              <h2 className="page-tit">챌린지 일정</h2>
              <nav className="page-nav">
                <ul>
                  <li className="active">
                    <a
                      href="#"
                      className="page-link"
                      title="나의 챌린지 만들기 페이지 이동 링크"
                    >
                      나의 챌린지 만들기
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="page-link"
                      title="나의 챌린지 보기 페이지 이동 링크"
                    >
                      나의 챌린지 보기
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sub-tit-area">
              <h3 className="sub-tit">2024</h3>
            </div>
            <div className="filter-option">
              <label htmlFor="challengeOption1" className="option-label">
                <span>상태</span>
              </label>
              <select id="challengeOption1" className="option-list">
                <option>선택</option>
                <option value={1}>진행 중</option>
                <option value={2}>진행 끝</option>
              </select>
            </div>
            <div className="challenge-wrap">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a
                      href="https://www.naver.com"
                      title="해당 챌린지 상세 페이지로 이동"
                      className="challenge-link"
                      target="_blank"
                    >
                      <div className="challenge-img">
                        <img
                          src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                          alt="A챌린지"
                        />
                      </div>
                      <span className="challenge-cate">클라이밍장 이름</span>
                      <em className="challenge-tit">C챌린지</em>
                      <span className="challenge-txt">
                        2024.06.20(목) ~ 2024.06.23(일)
                        <p />
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a
                      href="#"
                      title="해당 챌린지 상세 페이지로 이동"
                      className="challenge-link"
                    >
                      <div className="challenge-img">
                        <img
                          src="https://mblogthumb-phinf.pstatic.net/MjAxODExMDFfODMg/MDAxNTQxMDQ5NTQ4MDM1.HTE_ClokpSF4eWutgUkimC8L8qU4WdgCayAfSDfY1NQg.Vv6m5UgI_1kXKBIgrdRIlznAyTh3ng9mGMtAv8Ccdcog.JPEG.jung_nang_gu/%ED%99%8D%EB%B3%B4%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?type=w800"
                          alt="A챌린지"
                        />
                      </div>
                      <span className="challenge-cate">연극</span>
                      <em className="challenge-tit">B챌린지B챌린지B챌린지</em>
                      <span className="challenge-txt">
                        2024.06.20(목) ~ 2024.06.23(일)
                        <p />
                      </span>
                    </a>
                  </div>
                  <div className={'swiper-slide'}> 
                    <a
                      href="#"
                      title="해당 챌린지 상세 페이지로 이동"
                      className="challenge-link"
                    >
                      <div className="challenge-img">
                        <img
                          src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                          alt="A챌린지"
                        />
                      </div>
                      <span className="challenge-cate">연극 이름</span>
                      <em className="challenge-tit">A챌린지</em>
                      <span className="challenge-txt">
                        2024.06.20(목) ~ 2024.06.23(일)
                        <p />
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a
                      href="#"
                      title="해당 챌린지 상세 페이지로 이동"
                      className="challenge-link"
                    >
                      <div className="challenge-img">
                        <img
                          src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                          alt="A챌린지"
                        />
                      </div>
                      <span className="challenge-cate">클라이밍장 이름</span>
                      <em className="challenge-tit">A챌린지</em>
                      <span className="challenge-txt">
                        2024.06.20(목) ~ 2024.06.23(일)
                        <p />
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a
                      href="#"
                      title="해당 챌린지 상세 페이지로 이동"
                      className="challenge-link"
                    >
                      <div className="challenge-img">
                        <img
                          src="https://ojsfile.ohmynews.com/PHT_IMG_FILE/2023/0525/IE003155586_PHT.jpg"
                          alt="A챌린지"
                        />
                      </div>
                      <span className="challenge-cate">클라이밍장 이름</span>
                      <em className="challenge-tit">A챌린지</em>
                      <span className="challenge-txt">
                        2024.06.20(목) ~ 2024.06.23(일)
                        <p />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="control">
                  <div className="swiper-button-prev" />
                  <div className="swiper-pagination" />
                  <div className="autoplay-progress">
                    <svg viewBox="0 0 48 48">
                      <circle cx={24} cy={24} r={20} />
                    </svg>
                    <button
                      type="button"
                      className="control-btn btn-stop"
                      title="정지 버튼"
                    >
                      자동재생 정지 버튼
                    </button>
                    <button
                      type="button"
                      className="control-btn btn-play"
                      title="재생 버튼"
                    >
                      재생 버튼
                    </button>
                  </div>
                  <div className="swiper-button-next" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
};
export default Challenge;
