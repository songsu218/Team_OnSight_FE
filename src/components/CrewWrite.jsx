import { useState } from "react";
import style from "../css/Write.module.css";
import Editor from "./Editor";

const CrewWrite = () => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      {/* <form className={style.writeCon} onSubmit={updatePost}> */}
      <form className={style.writeCon}>
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
            // onChange={(e) => setTitle(e.target.value)}
          />
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
          <p className={style.smallImgCon}>
            {/* <img src={`${url}/${cover}`} alt={title} /> */}
          </p>
        </div>

        <div className={style.buttonCon}>
          <button>취소</button>
          <button>작성하기</button>
        </div>
      </form>
    </div>
  );
};

export default CrewWrite;
