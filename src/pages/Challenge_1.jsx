import Challenge_1 from "./Challenge";

const Challenge_1 = () => {
  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    /* 참고사이트 기준이고 여기서부터 */\n    html {\n      font-size: 62.5%;\n    }\n\n    @media only screen and (min-width:768px) {\n      #container {padding:9.6rem 0 13.6rem;}\n      #container .content {width:63.3rem;}\n    }\n\n    @media only screen and (min-width: 1080px) {\n      #container {padding:14.0rem 0 13.6rem;}\n      #container .content {width:100.3rem;min-height:calc(100vh - 58.8rem);}\n    }\n\n    @media only screen and (min-width:1680px) {\n      #container {padding:14.0rem 0 13.6rem;}\n      #container .content {width:139.6rem;}\n    }\n\n    @media only screen and (min-width:1440px) {\n      #container {padding:14.0rem 0 13.6rem;}\n      #container, #footer {padding-left:21.0rem;}\n    }\n\n    /* 여기까지 공통쪽에서 작업되어 적용되었다 가정\n\n\n    /* 우리처럼 페이지ID로 감싸서 스타일 중복되지 않게 하는게 좋을 것 같음. */\n\n    .page-tit-area {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: 0 0 5.6rem;\n    }\n\n    .page-tit {\n      margin: 0;\n      font-size: 5.6rem;\n      line-height: 6.8rem;\n      font-weight: 800;\n    }\n\n    .page-nav  {\n      position: relative;\n      width: 64.0rem;\n    }\n\n    .page-nav:before,\n    .page-nav .active .page-link:before  {\n      content: ''; \n      display: block;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n    }\n\n    .page-nav:before {\n      border-top: 0.1rem solid #b9b9b9;\n      border-bottom: 0.1rem solid #b9b9b9;\n    }\n\n    .page-nav > ul {\n      display: flex;\n      justify-content: flex-end;\n      margin: 0;\n      padding: 0 3.1rem;\n      list-style: none;\n    }\n\n    .page-link {\n      display: block;\n      position: relative;\n      padding: 0 1.6rem;\n      transition: all 0.3s ease;\n      font-size: 2.0rem;\n      line-height: 5.6rem;\n      text-decoration: none;\n      text-align: center;\n      font-weight: 300;\n      color: #000;\n    }\n    .page-nav .page-link:hover,\n    .page-nav .active .page-link {\n      font-weight: 800;\n    }\n\n    .page-nav .page-link:before {\n      border-top: 0.3rem solid transparent;\n      border-bottom: 0.3rem solid transparent;\n    }\n    .page-nav .active .page-link:before {\n      border-color: #000;\n    }\n\n    .sub-tit-area {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      margin: 0 0 2rem;\n    }\n\n    .sub-tit-area .sub-tit {\n      font-size: 3.2rem;\n      line-height: 4.8rem;\n    }\n\n    .filter-option {\n      margin: 0 0 4.0rem;\n      width: auto;\n    }\n\n    .filter-option .option-label {\n      font-size: 2.0rem;\n      font-weight: 700;\n      margin: 0 0.8rem 0 0;\n      cursor: pointer\n    }\n\n    .filter-option .option-list {\n      display: inline-block;\n      width: auto;\n      height: 4.0rem;\n      padding: 0.5rem 3.6rem 0.5rem 1.6rem;\n      background: transparent url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212.176%22%20height%3D%226.048%22%20viewBox%3D%220%200%2012.176%206.048%22%3E%0D%0A%20%20%3Cpath%20id%3D%22ico_arr_drop%22%20d%3D%22M508.5%2C430.5l5.545%2C4%2C5.455-4%22%20transform%3D%22translate(-507.915%20-429.689)%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%2F%3E%0D%0A%3C%2Fsvg%3E%0D%0A\") no-repeat calc(100% - 1.6rem) 50%;\n      border: 0;\n      font-size: 1.8rem;\n      line-height: 3.0rem;\n      color: #000;\n      -webkit-appearance:none;\n      -moz-appearance:none;\n      appearance:none;\n    }\n    \n\n    .filter-option .option-list:focus {\n      outline: 1px solid #b9b9b9;\n    }\n\n    .challenge-wrap {\n      padding-top: 4.0rem;\n      border-top: 0.3rem solid #000;\n    }\n\n    /* .challenge-list {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 6.8rem;\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    } */\n\n    .challenge-link {\n      display: block;\n      text-align: left;\n      text-decoration: none;\n      color: #000;\n    }\n\n    .challenge-img {\n      position: relative;\n      display: block;\n      width: 29.8rem;\n      height: 42.2rem;\n      margin: 0 0 2.5rem;\n      overflow: hidden;\n    }\n\n    .challenge-img img {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      transition: all 0.3s ease-in-out;\n    }\n\n    .challenge-link:focus .challenge-img img,\n    .challenge-link:hover .challenge-img img {\n      transform:scale(1.15) rotate(5deg);\n    }\n\n    .challenge-cate {\n      display: inline-block;\n      margin-bottom: 2rem;\n      position: relative;\n      padding: 0 0 0.4rem;\n      font-size: 1.6rem;\n      line-height: 2.0rem;\n      font-weight: 700;\n      border-bottom: 0.3rem solid #000;\n      \n    }\n\n    .challenge-tit,\n    .challenge-txt {\n      display: block;\n    }\n\n    .challenge-tit {\n      margin: 0 0 2.5rem;\n      font-size: 2.0rem;\n      font-weight: 900;\n      font-style: normal;\n      line-height: 2.6rem;\n    }\n\n    .challenge-link:focus .challenge-tit,\n    .challenge-link:hover .challenge-tit {\n      text-decoration: underline;\n      text-underline-position : under;\n    }\n\n    .challenge-txt {\n      font-size: 1.6rem;\n      line-height: 2.4rem;\n    }\n\n    /* swiper */\n    .swiper {\n      position: relative;\n      width: 100%;\n      text-align: center;\n    }\n\n    .swiper-wrapper {\n      margin-bottom: 9.6rem;\n    }\n\n    .swiper-slide {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      background: #fff;\n      font-size: 18px;\n      text-align: center;\n    }\n\n    .autoplay-progress {\n      position: absolute;\n      right: 16px;\n      bottom: 16px;\n      z-index: 10;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 34px;\n      height: 34px;\n      font-size: 0;\n      font-weight: bold;\n      color: #000;\n    }\n\n    .autoplay-progress:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      border: 0.3rem solid #b9b9b9;\n      border-radius: 100%;\n      margin: 0.1rem;\n      opacity: 0.3;\n    }\n\n    .autoplay-progress svg {\n      --progress: 0;\n      position: absolute;\n      left: 0;\n      top: 0px;\n      z-index: 10;\n      width: 100%;\n      height: 100%;\n      stroke-width: 4px;\n      stroke: #000;\n      fill: none;\n      stroke-dashoffset: calc(125.6px * (1 - var(--progress)));\n      stroke-dasharray: 125.6;\n      transform: rotate(-90deg);\n    }\n\n    .control {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .swiper-pagination {\n      margin-right: 1em;\n    }\n\n    .autoplay-progress,\n    .swiper-pagination,\n    .swiper-button-prev,\n    .swiper-button-next {\n      display: inline-block;\n      position: relative;\n      top: auto;\n      bottom: auto;\n      left: auto;\n      right: auto;\n    }\n\n    .swiper-pagination,\n    .swiper-button-prev,\n    .swiper-button-next {\n      margin-top: 0;\n      width: auto;\n    }\n\n    .swiper-button-prev,\n    .swiper-button-next {\n      width: 101px;\n      height: 28px;\n      cursor: pointer;\n    }\n\n    .swiper-button-prev:after,\n    .swiper-button-next:after {\n      content: \"\";\n      display: none;\n    }\n\n    .swiper-button-prev {\n      margin-right: 3rem;\n      background: url(data:image/png;base64,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) no-repeat 50% / 101px 28px;\n    }\n\n    .swiper-button-next {\n      margin-left: 3rem;\n      background: url(data:image/png;base64,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) no-repeat 50% / 101px 28px;\n      transform: rotateY(180deg);\n    }\n\n    .swiper-pagination {\n      font-size: 1.8rem;\n      line-height: 3.4rem;\n    }\n\n    .control-btn {\n      z-index: 10;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      padding: 0;\n      background: transparent;\n      border: 0;\n      outline: none;\n      font-size: 0;\n      text-indent: -9999px;\n      cursor: pointer;\n    }\n\n    .control-btn.btn-stop {\n      width: 1rem;\n      height: 1rem;\n      background: #000;\n    }\n\n    .control-btn.btn-play {\n      width: 0;\n      height: 0;\n      border-left: 1.0rem solid #000;\n      border-top: 0.5rem solid transparent;\n      border-bottom: 0.5rem solid transparent;\n    }\n  ",
          }}
        />
        <main id="container">
          <div className="content">
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
export default Challenge_1;
