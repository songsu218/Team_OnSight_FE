import { useEffect, useState } from "react";
import style from "../../css/InfoUpModal.module.css";
import { useSelector } from "react-redux";

const InfoUpModal = ({ onClose }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [nickname, setNickname] = useState(userInfo.nick);
  const [imgUrl, setImgUrl] = useState(
    `http://localhost:8000${userInfo.thumbnail}`
  );
  const [preImg, setPreImg] = useState(null);

  const formData = new FormData();
  formData.append("id", userInfo.id);
  formData.append("nick", nickname);
  if (preImg) {
    formData.append("thumbnail", preImg);
  }

  const userPwCheck = async () => {
    try {
      const response = await fetch(`http://localhost:8000/user/infoUpdate`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data) {
        onClose();
      } else {
        console.error("Failed to fetch info update");
      }
    } catch (err) {
      console.error("Error fetching info update", err);
    }
  };

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

  useEffect(() => {
    // 초기 이미지 미리보기 설정
    setImgUrl(`http://localhost:8000${userInfo.thumbnail}`);
  }, [userInfo]);

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
              <dl className={style.form}>
                {imgUrl && (
                  <div>
                    <img
                      src={imgUrl}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </dl>
              <dl className={style.form}>
                <dt>아이디</dt>
                <dd>
                  <div className={style.form2}>
                    <input
                      type="text"
                      title="아이디"
                      disabled="disabled"
                      value={userInfo.id}
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
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </div>
                </dd>
              </dl>
            </fieldset>
          </div>
          <div className={style.actionBox}>
            <button
              type="button"
              data-btn="pop-close"
              className={style.btnSub}
              onClick={onClose}
            >
              취소
            </button>
            <button
              type="button"
              className={style.btnSub}
              onClick={userPwCheck}
            >
              수정완료
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoUpModal;
