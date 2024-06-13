import style from '../css/RecordList.module.css';

const RecordList = () => {
  const restrictText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const title = '제목12342131231212121231231231231312321331231232131';

  return (
    <div className={style.swiperBox}>
      <div className={style.upperBox}>
        <img src="/img/test.jpg" alt="profile" />
        <span>닉네임</span>
      </div>
      <div className={style.lowerBox}>
        <img src="/img/test.jpg" alt="record" />
        <div className={style.levelBox}>
          <strong>{restrictText(title, 10)}</strong>
          <span>경기도무슨클라이밍장</span>
          <div className={style.levelArea}>
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: 'red',
                borderRadius: '2px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
