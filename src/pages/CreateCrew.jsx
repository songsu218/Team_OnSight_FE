import { useState } from "react";
import style from "../css/CreateCrew.module.css";

const CreateCrew = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

    if (city === "seoul") {
      setDistricts([
        "종로구",
        "중구",
        "용산구",
        "성동구",
        "광진구",
        "동대문구",
        "중랑구",
        "성북구",
        "강북구",
        "도봉구",
        "노원구",
        "은평구",
        "서대문구",
        "마포구",
        "양천구",
        "강서구",
        "구로구",
        "금천구",
        "영등포구",
        "동작구",
        "관악구",
        "서초구",
        "강남구",
        "송파구",
        "강동구",
      ]);
    } else if (city === "busan") {
      setDistricts([
        "중구",
        "서구",
        "동구",
        "영도구",
        "부산진구",
        "동래구",
        "남구",
        "북구",
        "해운대구",
        "사하구",
        "금정구",
        "강서구",
        "연제구",
        "수영구",
        "사상구",
        "기장군",
      ]);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      si: selectedCity,
      gu: selectedDistrict,
    };

    try {
      const response = await fetch("/api/save-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Location saved successfully");
      } else {
        console.error("Failed to save location");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className={style.createpage}>
      <form Submit="createCrew" className={style.createCrew}>
        <h2>나의 크루생성</h2>
        <img src="/img/noimg.jpg" alt="미리보기" />
        <div className={style.imgBtnCon}>
          <input type="file" name="crewImg" id="crewImg" />
          <button className="Btn">사진삭제</button>
        </div>

        <section>크루명</section>
        <input type="text" placeholder="name" required />
        <section>소개 글</section>
        <input type="text" placeholder="content" required />
        <section>활동지역</section>
        <div className="selectBox">
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">선택</option>
            <option value="seoul">서울특별시</option>
            <option value="busan">부산광역시</option>
            {/* 추가 도시 옵션 */}
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
        <div className={style.saBtn}>
          <button className="Btn" type="submit">저장</button>
        </div>
      </form>
    </main>
  );
};

export default CreateCrew;
