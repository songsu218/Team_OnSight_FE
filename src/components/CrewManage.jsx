import { useState } from 'react';
import style from '../css/CrewManage.module.css';

const CrewManage = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [crewImg, setCrewImg] = useState('');
  const [members, setMembers] = useState('');
  const [memberLimit, setMemberLimit] = useState('');
  const [membercount, setMembercount] = useState('');
  const [feedcount, setFeedcount] = useState('');
  const [selectedCity, setSelectedCity] = useState(''); //시
  const [selectedDistrict, setSelectedDistrict] = useState(''); //구
  const [districts, setDistricts] = useState([]);

  //img 미리보기 부분
  const [previewSrc, setPreviewSrc] = useState('/img/noimg.jpg');

  const handleButtonClick = () => {
    document.getElementById('crewImgInput').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewSrc(fileUrl);
      setCrewImg(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewSrc('/img/noimg.jpg'); //미리보기 이미지
    setCrewImg('');
    document.getElementById('crewImgInput').value = null;
  };

  // 지역 검색부분
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

    if (city === 'seoul') {
      setDistricts([
        '종로구',
        '중구',
        '용산구',
        '성동구',
        '광진구',
        '동대문구',
        '중랑구',
        '성북구',
        '강북구',
        '도봉구',
        '노원구',
        '은평구',
        '서대문구',
        '마포구',
        '양천구',
        '강서구',
        '구로구',
        '금천구',
        '영등포구',
        '동작구',
        '관악구',
        '서초구',
        '강남구',
        '송파구',
        '강동구',
      ]);
    } else if (city === 'busan') {
      setDistricts([
        '중구',
        '서구',
        '동구',
        '영도구',
        '부산진구',
        '동래구',
        '남구',
        '북구',
        '해운대구',
        '사하구',
        '금정구',
        '강서구',
        '연제구',
        '수영구',
        '사상구',
        '기장군',
      ]);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  //DB Post부분
  const handleSubmitcrew = async (event) => {
    event.preventDefault();

    const data = {
      id,
      name,
      selectedCity,
      selectedDistrict,
      content,
      crewImg,
      members,
      memberLimit,
      membercount,
      feedcount,
    };

    try {
      const response = await fetch('http://localhost:8000/createCrew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Location saved successfully');
      } else {
        console.error('Failed to save location');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className={style.createpage}>
      <form Submit="createCrew" className={style.createCrew}>
        <img src={previewSrc} alt="미리보기" />
        <div className={style.imgBtnCon}>
          <input
            type="file"
            name="crewImg"
            id="crewImgInput"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            className={style.Btn}
            onClick={handleButtonClick}
          >
            사진변경
          </button>

          <button className={style.Btn} onClick={handleRemoveImage}>
            사진삭제
          </button>
        </div>

        <section>
          크루명 <p>크루명은 변경할 수 없습니다</p>
        </section>
        <div className={style.crewName}>기존에 작성한 크루명</div>
        <section>소개 글</section>
        <input
          type="text"
          placeholder="  기존에 있던 소개글"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <section>활동 지역</section>
        <div className="selectBox">
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">선택</option>
            <option value="seoul">서울특별시</option>
            <option value="busan">부산광역시</option>
          </select>
          <select value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">선택</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <section>참가자수</section>
        <div className={style.selectBox}>
          <select
            name="limit"
            id="limit"
            value={memberLimit}
            onChange={(e) => setMemberLimit(e.target.value)}
          >
            <option value="10" selected>
              10
            </option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className={style.saBtn}>
          <button
            className={style.Btn}
            type="submit"
            onClick={handleSubmitcrew}
          >
            저장
          </button>
        </div>
      </form>
    </main>
  );
};

export default CrewManage;
