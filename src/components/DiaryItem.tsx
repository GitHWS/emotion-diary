import React from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/emotion';

import MyButton from './MyButton';

export interface DiaryItemProps {
  id: number;
  content: string;
  emotion: 1 | 2 | 3 | 4 | 5;
  date: string;
}

const DiaryItem = React.memo(
  ({ id, content, emotion, date }: DiaryItemProps) => {
    const navigate = useNavigate();

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || '';

    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () => {
      navigate(`/diary/${id}`);
    };

    const goEdit = () => {
      navigate(`/edit/${id}`);
    };

    return (
      <div className="DiaryItem">
        <div
          className={[
            'emotion_img_wrapper',
            `emotion_img_wrapper_${emotion}`,
          ].join(' ')}
          onClick={goDetail}>
          <img
            src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
            alt={`기분이 ${
              emotionList.find((it) => it.emotion_id === emotion)!
                .emotion_descript
            }`}
          />
        </div>
        <div className="info_wrapper" onClick={goDetail}>
          <div className="diary_date">{strDate}</div>
          <div className="diary_content_preview">{content.slice(0, 25)}</div>
        </div>
        <div className="btn_wrapper">
          <MyButton onClick={goEdit} text="수정하기" />
        </div>
      </div>
    );
  }
);

export default DiaryItem;
