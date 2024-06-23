import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "../../css/ChallengeModal.module.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import axios from "axios";
import { ch } from "../../api.js";

registerLocale("ko", ko);

function ChallengeModal({onClose}) {
  // const [show, setShow] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [openPlace, setOpenPlace] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [climbingCenters, setClimbingCenters] = useState([]);
  const [selectedCity, setSelectedCity] = useState("서울특별시");
  const [selectedDistrict, setSelectedDistrict] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [showingCenters, setShowingCenters] = useState([]);
  const [title, setTitle] = useState('');

  const handleClose = () => {
    // setShow(false);
    resetForm();
    onClose();
  };

  // const handleShow = () => setShow(true);

  const resetForm = () => {
    setSelectedPlace(null);
    setTitle("");
  };

  const togglePlace = () => {
    setOpenPlace(!openPlace);
  };

  const handlePlaceClick = (center) => {
    setSelectedPlace(center.center);
    setOpenPlace(false);
  };

  const handleSubmit = async () => {
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("center", selectedPlace);
    formData.append("date", startDate.toISOString().split("T")[0]);

    console.log(formData);
    // ch.chEnter()
    // .then((result) => {

    // }).catch((error) => {
    //   console.log(`${error}`);
    // });

    handleClose();
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/center")
      .then((response) => {
        setClimbingCenters(response.data);
        setShowingCenters(response.data);
      })
      .catch((error) => console.error("API 요청 에러:", error));
  }, []);

  const handleSearch = () => {
    const results = climbingCenters.filter((center) => {
      return (
        center.si === selectedCity &&
        (selectedDistrict === "전체" || center.gu.includes(selectedDistrict)) &&
        center.center.includes(searchTerm)
      );
    });
    setShowingCenters(results);
  };

  const handleRefresh = () => {
    setSelectedCity("서울특별시");
    setSelectedDistrict("전체");
    setSearchTerm("");
    setShowingCenters(climbingCenters);
  };

  const handleClick = (e, action, diffi) => {
    e.stopPropagation();
    action(diffi);
  };

  return (
    <>
      {/* <button className={style.addBtn}>
        <span>나의 챌린지 만들기</span>
      </button> */}
      <Modal className={style.modalRe} show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>챌린지 만들기</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalBody}>
          <form className={style.recordCon}>
            <label htmlFor='title'>챌린지 이름</label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='date'>날짜 선택</label>
            <div className={style.dateWrap}>
              <DatePicker
                dateFormat='yyyy.MM.dd'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                maxDate={new Date()}
                locale='ko'
              />
            </div>
            <label htmlFor='place'>운동 장소</label>
            <div className={style.placeC}>
              <div className={style.placeView} onClick={togglePlace}>
                <span>{selectedPlace || "장소 선택"}</span>
                <i className='fa-solid fa-chevron-down'></i>
              </div>
              {openPlace && (
                <div className={style.placeList}>
                  <div>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      <option value='서울특별시'>서울특별시</option>
                    </select>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => {
                        setSelectedDistrict(e.target.value);
                        setShowingCenters(
                          climbingCenters.filter(
                            (center) =>
                              e.target.value === "전체" ||
                              center.gu.includes(e.target.value)
                          )
                        );
                      }}
                    >
                      <option value='전체'>전체</option>
                      {Array.from(
                        new Set(climbingCenters.map((center) => center.gu))
                      ).map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={style.searchCon}>
                    <input
                      type='text'
                      className={style.searchInput}
                      placeholder='검색창'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />
                    <div>
                      <i
                        className={`fa-solid fa-magnifying-glass ${style.readingGlasses}`}
                        onClick={handleSearch}
                      ></i>
                      <i
                        className={`fa-solid fa-rotate-left ${style.rotate}`}
                        onClick={handleRefresh}
                      ></i>
                    </div>
                  </div>
                  <ul className={style.placeResult}>
                    {showingCenters.map((center) => (
                      <li
                        key={center._id}
                        onClick={() => handlePlaceClick(center)}
                      >
                        {center.center}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className={style.ModalFt}>
          <Button
            className={style.saveBtn}
            variant='primary'
            onClick={handleSubmit}
          >
            챌린지 생성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChallengeModal;
