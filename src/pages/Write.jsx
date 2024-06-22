import { useState } from "react";
import style from "../css/Write.module.css";
import Editor from "./Editor";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  // const { postId } = useParams(); 작성자id

  return (
    <div className="con1">
      <main id={style.container} className="mw">
        <div className={style.content}>
          <div className={style.page_tit_area}>
            <h2 className={style.page_tit}>피드 작성하기</h2>
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
                <label htmlFor="content">내용</label>
                <Editor content={content} setContent={setContent} />
              </div>
              <div className={style.fileCon}>
                <label htmlFor="files">첨부파일</label>
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
              <button>취소</button>
              <button>작성하기</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Write;
