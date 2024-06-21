import style from '../../css/PwUpModal.module.css';

const PwUpModal = ({ onClose }) => {
  return (
    <div className={style.popModal}>
      <section>
        <header data-ui-mode="pc">
          <h2>비밀번호 변경하기</h2>
          <button onClick={onClose}>비밀번호 변경하기 닫기</button>
        </header>
        <header data-ui-mode="mb">
          <h2>비밀번호 변경하기</h2>
          <nav className={style.navBack}>
            <a href="#none">나의 정보관리</a>
          </nav>
        </header>
        <div className={style.content}>
          <h2 className={style.tit}>비밀번호 변경</h2>
          <p className={style.txt}>
            회원님의 소중한 정보를 보호하기 위해 비밀번호를 암호화하여 관리합니다.
            <br />
            새로운 비밀번호를 입력하여 주시기 바랍니다.
          </p>
          <div className={style.formBox}>
            <form
              action="user/profile/pw"
              autoComplete="off"
              encType="multipart/form-data"
              id="formPassword"
              method="post"
            >
              <input type="hidden" />
              <fieldset>
                <legend>비밀번호 변경</legend>
                <dl className={style.form}>
                  <dt>현재 비밀번호</dt>
                  <dd>
                    <div className={style.form2}>
                      <input
                        type="password"
                        title="현재 비밀번호"
                        placeholder="현재 비밀번호를 입력해 주세요"
                        id="Password"
                        className={style.inputTxt}
                      />
                      <button
                        className={`${style.btnIcon} ${style.ic1}`}
                        // data-mode="hidden"
                        data-mode="visible"
                      ></button>
                      <button
                        className={`${style.btnIcon} ${style.ic2}`}
                        data-mode="hidden"
                        // data-mode="visible"
                      ></button>
                    </div>
                  </dd>
                </dl>
                <dl className={style.form}>
                  <dt>새로운 비밀번호</dt>
                  <dd>
                    <div className={style.form2}>
                      <input
                        type="password"
                        title="새 비밀번호"
                        placeholder="새 비밀번호를 입력해 주세요"
                        id="Password"
                        className={style.inputTxt}
                      />
                      <button
                        className={`${style.btnIcon} ${style.ic1}`}
                        // data-mode="hidden"
                        data-mode="visible"
                      ></button>
                      <button
                        className={`${style.btnIcon} ${style.ic2}`}
                        data-mode="hidden"
                        // data-mode="visible"
                      ></button>
                    </div>
                  </dd>
                </dl>
                <dl className={style.form}>
                  <dt>새로운 비밀번호 확인</dt>
                  <dd>
                    <div className={style.form2}>
                      <input
                        type="password"
                        title="새 비밀번호 확인"
                        placeholder="새 비밀번호를 다시 입력해 주세요"
                        id="Password"
                        className={style.inputTxt}
                      />
                      <button
                        className={`${style.btnIcon} ${style.ic1}`}
                        // data-mode="hidden"
                        data-mode="visible"
                      ></button>
                      <button
                        className={`${style.btnIcon} ${style.ic2}`}
                        data-mode="hidden"
                        // data-mode="visible"
                      ></button>
                    </div>
                  </dd>
                </dl>
              </fieldset>
            </form>
          </div>
          <div className={style.actionBox}>
            <button type="button" className={style.btnSub}>
              비밀번호 변경
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PwUpModal;
