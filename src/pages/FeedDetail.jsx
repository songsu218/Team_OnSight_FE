import { useNavigate } from 'react-router-dom';
import style from '../css/FeedDetail.module.css';

const FeedDetail = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="con2">
        <div className={`${style.allCon} mw`}>
          <div className={style.topCon}>
            <button className={style.backBtn} onClick={goBack}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <div className={style.profileBox}>
              <div className={style.imgBox}>
                <img src="/img/test.jpg" alt="" />
              </div>
              <span>닉네임</span>
            </div>
          </div>
          <div className={style.outPutArea}>
            <p>1231412314123124</p>
            {/* 위에 p 태그가 글 들어갈 영역임 */}
            <div className={style.middelBtnBox}>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
          <div className={style.bottomCon}>
            <h3>댓글 목록</h3>
            <div className={style.commentArea}>
              <ul>
                <li>
                  <span>닉네임</span>
                  <p>댓글 내용 12341234</p>
                  <button>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </li>
                <li>
                  <span>닉네임</span>
                  <p>댓글 내용 12341234</p>
                  <button>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </li>
                <li>
                  <span>닉네임</span>
                  <p>댓글 내용 12341234</p>
                  <button>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </li>
              </ul>
              <div className={style.commentInputArea}>
                <span>닉네임</span>
                <input type="text" placeholder=" 댓글을 입력해주세요" />
                <button>등록</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedDetail;
