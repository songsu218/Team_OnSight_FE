import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import style from '../css/RecordModal.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RecordModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState(new Date());
  const [openPlace, setOpenPlace] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const togglePlace = () => setOpenPlace(!openPlace);
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setOpenPlace(false);
  };
  const place = ['무슨클라이밍장1', '무슨클라이밍장2', '무슨클라이밍장3'];
  const [openDiffi, setOpenDiffi] = useState(false);
  const [selectedDiffis, setSelectedDiffis] = useState([]);
  const toggleDiffi = () => setOpenDiffi(!openDiffi);
  const handleDiffiClick = (diffi) => {
    setSelectedDiffis((prevSelectedDiffis) => [...prevSelectedDiffis, diffi]);
    setOpenDiffi(false);
  };
  const diffi = ['난이도 (v1)', '난이도 (v2)', '난이도 (v3)'];
  const [counts, setCounts] = useState({});
  const increase = (diffi) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [diffi]: (prevCounts[diffi] || 0) + 1,
    }));
  };
  const decrease = (diffi) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [diffi]: Math.max((prevCounts[diffi] || 0) - 1, 0),
    }));
  };
  const handleClick = (e, action, diffi) => {
    e.stopPropagation();
    action(diffi);
  };
  const CounterButton = ({ action, diffi, label }) => (
    <button
      className={style.inDeBtn}
      type="button"
      onClick={(e) => handleClick(e, action, diffi)}
    >
      {label}
    </button>
  );

  return (
    <>
      <button onClick={handleShow} className={style.addBtn}>
        <i className="fa-solid fa-plus"></i>
      </button>
      <Modal className={style.modalRe} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>기록 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalBody}>
          <form className={style.recordCon}>
            <label htmlFor="title">제목</label>
            <input type="text" />
            <label htmlFor="title">상세내용</label>
            <input type="text" />
            <label htmlFor="title">날짜 선택</label>
            <div className={style.dateWrap}>
              <DatePicker
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <label htmlFor="title"></label>
            <label htmlFor="title">운동 장소</label>
            <div className={style.placeC}>
              <div onClick={togglePlace}>
                <span>{selectedPlace || '장소 선택'}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              {openPlace && (
                <ul className={style.placeList}>
                  {place.map((place) => (
                    <li key={place} onClick={() => handlePlaceClick(place)}>
                      {place}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <label htmlFor="title">운동 난이도</label>
            <div className={style.diffiC}>
              <div onClick={toggleDiffi}>
                <span>
                  {selectedDiffis.length > 0
                    ? selectedDiffis.join(', ')
                    : '난이도 선택'}
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              {openDiffi && (
                <ul className={style.diffiList}>
                  {diffi.map((diffi) => (
                    <li key={diffi} onClick={() => handleDiffiClick(diffi)}>
                      {diffi}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={style.diffiCon}>
              {selectedDiffis.map((diffi, index) => (
                <span key={index}>{diffi}</span>
              ))}
            </div>
            <input type="file" />
          </form>
        </Modal.Body>
        <Modal.Footer className={style.ModalFt}>
          <Button
            className={style.saveBtn}
            variant="primary"
            onClick={handleClose}
          >
            기록하기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecordModal;
