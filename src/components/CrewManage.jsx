import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from '../css/CrewManage.module.css';

const CrewManage = () => {
  const { crewId } = useParams();
  const crew = useSelector((state) => state.crew.crewInfo);

  const [content, setContent] = useState('');
  const [crewImg, setCrewImg] = useState('');
  const [memberLimit, setMemberLimit] = useState('10');
  const [selectedSi, setSelectedSi] = useState('');
  const [selectedGu, setSelectedGu] = useState('');
  const [gus, setGus] = useState([]);

  const [previewSrc, setPreviewSrc] = useState('/img/noimg.jpg');

  const selectedCrew = crew.find((c) => c._id === crewId);

  useEffect(() => {
    if (selectedCrew) {
      setContent(selectedCrew.content);
      setMemberLimit(selectedCrew.memberLimit);
      setSelectedSi(selectedCrew.si);
      setSelectedGu(selectedCrew.gu);
      if (selectedCrew.si === 'seoul') {
        setGus([
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
      }
      if (selectedCrew.crewImg) {
        setPreviewSrc(`http://localhost:8000${selectedCrew.crewImg}`);
      }
    }
  }, [selectedCrew]);

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
    setPreviewSrc('/img/noimg.jpg');
    setCrewImg('');
    document.getElementById('crewImgInput').value = null;
  };

  const handleSiChange = (e) => {
    const si = e.target.value;
    setSelectedSi(si);
    setSelectedGu(''); // 구 선택 초기화
  };

  const handleGuChange = (e) => {
    setSelectedGu(e.target.value);
  };

  const handleSubmitCrew = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    formData.append('crewImg', crewImg);
    formData.append('memberLimit', memberLimit);
    formData.append('si', selectedSi);
    formData.append('gu', selectedGu);

    try {
      const response = await axios.put(
        `http://localhost:8000/crew/${crewId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        console.log('success');
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  if (!selectedCrew) {
    return <p>메인페이지 갔다오세요</p>;
  }

  return (
    <main className={style.createpage}>
      <form onSubmit={handleSubmitCrew} className={style.createCrew}>
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

          <button
            type="button"
            className={style.Btn}
            onClick={handleRemoveImage}
          >
            사진삭제
          </button>
        </div>

        <section>
          크루명 <p>크루명은 변경할 수 없습니다</p>
        </section>
        <div className={style.crewName}>{selectedCrew.name}</div>
        <section>소개 글</section>
        <input
          type="text"
          placeholder=" 기존에 있던 소개글"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <section>활동 지역</section>
        <div className="selectBox">
          <select value={selectedSi} onChange={handleSiChange}>
            <option value="">선택</option>
            <option value="seoul">서울특별시</option>
          </select>
          <select value={selectedGu} onChange={handleGuChange}>
            <option value="">선택</option>
            {gus.map((gu, index) => (
              <option key={index} value={gu}>
                {gu}
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
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className={style.saBtn}>
          <button className={style.Btn} type="submit">
            저장
          </button>
        </div>
      </form>
    </main>
  );
};

export default CrewManage;
