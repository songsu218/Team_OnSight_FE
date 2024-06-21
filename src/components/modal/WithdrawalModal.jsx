import style from '../../css/Withdrawal.module.css';

const WithdrawalModal = ({ onClose }) => {
  return (
    <div className={style.popModal}>
      <section>
        <header data-ui-mode="pc">
          <h2>회원 탈퇴하기</h2>
          <button onClick={onClose}>회원 탈퇴 닫기</button>
        </header>
        <header data-ui-mode="mb">
          <h2>회원 탈퇴하기</h2>
          <nav className={style.navBack}>
            <a onClick={onClose}>나의 정보관리</a>
          </nav>
        </header>
        <div className={style.content}>
          <h2 className={style.tit}>회원탈퇴</h2>
          <p className={style.txt}>
            홈페이지를 이용해 주셔서 감사합니다.
            <br />
            회원탈퇴 시 회원정보는 안전하게 모두 삭제됩니다.
          </p>
          <div className={style.formBox}>
            <fieldset>
              <legend>회원탈퇴사유입력</legend>
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
                <dt>비밀번호</dt>
                <dd>
                  <div className={style.form2}>
                    <input
                      type="password"
                      title="비밀번호"
                      placeholder="비밀번호 입력"
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
          </div>
          <div className={style.actionBox}>
            <button type="button" data-btn="pop-close" className={style.btnSub}>
              취소
            </button>
            <button type="button" className={style.btnSub}>
              탈퇴
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WithdrawalModal;
