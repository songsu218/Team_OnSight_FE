import { useState } from 'react';
import style from '../css/Header.module.css';

const Header = () => {
  const [hoverImg, setHoverImg] = useState({
    link1: false,
    link2: false,
    link3: false,
    link4: false,
    link5: false,
  });

  const MouseHover = (link) => {
    setHoverImg((prevState) => ({ ...prevState, [link]: true }));
  };

  const MouseLeave = (link) => {
    setHoverImg((prevState) => ({ ...prevState, [link]: false }));
  };

  return (
    <header className={style.gnb}>
      <div>
        <h1>
          <div>
            <a href="/">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </h1>
        <nav>
          <div className={style.holdBar}>
            <a
              href="/"
              onMouseEnter={() => MouseHover('link1')}
              onMouseLeave={() => MouseLeave('link1')}
            >
              <img
                src={hoverImg.link1 ? '/img/eholdr.png' : '/img/holdr.png'}
                alt=""
              />
              <span style={{ color: hoverImg.link1 ? '#E90D0D' : '#FFFFFF' }}>
                온사이트
              </span>
            </a>
            <a
              href="/"
              onMouseEnter={() => MouseHover('link2')}
              onMouseLeave={() => MouseLeave('link2')}
            >
              <img
                src={hoverImg.link2 ? '/img/eholdb.png' : '/img/holdb.png'}
                alt=""
              />
              <span style={{ color: hoverImg.link2 ? '#1332D1' : '#FFFFFF' }}>
                암장탐색
              </span>
            </a>
            <a
              href="/"
              onMouseEnter={() => MouseHover('link3')}
              onMouseLeave={() => MouseLeave('link3')}
            >
              <img
                src={hoverImg.link3 ? '/img/eholdy.png' : '/img/holdy.png'}
                alt=""
              />
              <span style={{ color: hoverImg.link3 ? '#FACA3D' : '#FFFFFF' }}>
                크루
              </span>
            </a>
            <a
              href="/"
              onMouseEnter={() => MouseHover('link4')}
              onMouseLeave={() => MouseLeave('link4')}
            >
              <img
                src={hoverImg.link4 ? '/img/eholdg.png' : '/img/holdg.png'}
                alt=""
              />
              <span style={{ color: hoverImg.link4 ? '#4DD65B' : '#FFFFFF' }}>
                챌린지
              </span>
            </a>
            <a
              href="/"
              onMouseEnter={() => MouseHover('link5')}
              onMouseLeave={() => MouseLeave('link5')}
            >
              <img
                src={hoverImg.link5 ? '/img/eholdp.png' : '/img/holdp.png'}
                alt=""
              />
              <span style={{ color: hoverImg.link5 ? '#8F3AFF' : '#FFFFFF' }}>
                MY
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div className={style.viewMore}>
        <a href="/">
          <i className="fa-solid fa-gear"></i>
          <span>로그인</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
