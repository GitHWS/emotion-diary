import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParmas, setSearchParams] = useSearchParams();

  const id = searchParmas.get('id');
  const mode = searchParmas.get('mode');
  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이 곳은 일기 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: 'Winterlood' })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate('/home');
        }}>
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}>
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
