import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import style from '../css/Write.module.css';
import Editor from './Editor';

const CrewWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message1, setMessage1] = useState('');

  const navigate = useNavigate();
  const { crewId } = useParams();

  const user = useSelector((state) => state.user.userInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === '') {
      setMessage1('제목을 입력해 주세요');
      document.getElementById('title').focus();
      return;
    } else {
      setMessage1('');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('userId', user.id);
    formData.append('crewId', crewId);

    try {
      const response = await axios.post(
        'http://localhost:8000/feed',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        navigate(-1);
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <div>
      <form className={style.writeCon} onSubmit={handleSubmit}>
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
