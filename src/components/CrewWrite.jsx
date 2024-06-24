import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "../css/Write.module.css";
import Editor from "./Editor";

const CrewWrite = () => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState(null);
  const [content, setContent] = useState("");
  const [message1, setMessage1] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // URLSearchParams를 사용하여 쿼리 매개변수 추출
  const searchParams = new URLSearchParams(location.search);
  const postId = searchParams.get("postId");

  useEffect(() => {
    const writeGroupfeed = async () => {
      if (postId) {
        const res = await fetch(`http://localhost:8000/Feed/${postId}`);
        const result = await res.json();
        console.log("writeGroupfeed ---------------", result);
        setTitle(result.title);
        setContent(result.content);
      }
    };
    writeGroupfeed();
  }, [postId]);

  const updatePost = async (e) => {
    e.preventDefault();
    if (title === "") {
      setMessage1("제목을 입력해 주세요");
      document.getElementById("title").focus();
      return;
    } else {
      setMessage1("");
    }

    const data = new FormData();
    data.set("title", title);
    data.set("content", content);
    if (files?.[0]) {
      data.set("files", files[0]);
    }

    const url = postId
      ? `http://localhost:8000/Feed/${postId}`
      : "http://localhost:8000/Feed";

    const method = postId ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      body: data,
      credentials: "include",
    });
    const result = await response.json();
    if (result.message === "ok") {
      navigate(`/crewfeeds/${postId}`);
    }
  };

  return (
    <div>
      <form className={style.writeCon} onSubmit={updatePost}>
        <div className={style.titleCon}>
          <label htmlFor="title">
            <h2>제목</h2>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>&nbsp;{message1}</p>
        </div>
        <div className={style.contentCon}>
          <label htmlFor="content">
            <h2>내용</h2>
          </label>
          <Editor content={content} setContent={setContent} />
        </div>
        <div className={style.fileCon}>
          <label htmlFor="files">
            <h2>첨부파일</h2>
          </label>
          <input
            type="file"
            name="files"
            id="files"
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>

        <div className={style.buttonCon}>
          <button type="button" onClick={() => navigate(-1)}>
            취소
          </button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </div>
  );
};

export default CrewWrite;
