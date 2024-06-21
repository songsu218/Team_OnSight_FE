import { useState } from 'react';
import style from '../../css/InfoUpModal.module.css';

const InfoUpModal = ({ onClose }) => {
  const [preImg, setPreImg] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPreImg(file);

    // 이미지 URL 생성
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
    } else {
      setImgUrl(null);
    }
  };

  return (
    <div className={style.popModal}>
      <section>
        <header data-ui-mode="pc">
          <h2>기본정보 수정하기</h2>
          <button onClick={onClose}>기본정보 수정 닫기</button>
        </header>
        <header data-ui-mode="mb">
          <h2>기본정보 수정하기</h2>
          <nav className={style.navBack}>
            <a onClick={onClose}>나의 정보관리</a>
          </nav>
        </header>
        <div className={style.content}>
          <h2 className={style.tit}>기본정보</h2>
          <div className={style.formBox}>
            <fieldset>
              <legend>기본정보 수정</legend>
              <form
                action="/user/profile/update"
                autoComplete="off"
                enctype="multipart/form-data"
                id="formProfile"
                method="post"
              >
                <input type="hidden" name="" id="" />
                <dl className={style.form}>
                  {imgUrl && (
                    <div>
                      <h2>이미지 미리보기:</h2>
                      <img
                        src={imgUrl}
                        alt="Preview"
                        style={{ width: '100%', height: '300px', borderRadius: '50%' }}
                      />
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                </dl>
                <dl className={style.form}>
                  <dt>아이디</dt>
                  <dd>
                    <div className={style.form2}>
                      <input
                        type="text"
                        title="아이디"
                        disabled="disabled"
                        className={style.inputTxt}
                      />
                    </div>
                  </dd>
                </dl>
                <dl className={style.form}>
                  <dt>닉네임</dt>
                  <dd>
                    <div className={style.form2}>
                      <input
                        type="text"
                        title="닉네임"
                        id="NickName"
                        name="NickName"
                        className={style.inputTxt}
                      />
                    </div>
                  </dd>
                </dl>
              </form>
            </fieldset>
          </div>
          <div className={style.actionBox}>
            <button type="button" data-btn="pop-close" className={style.btnSub}>
              취소
            </button>
            <button type="button" className={style.btnSub}>
              수정완료
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoUpModal;
