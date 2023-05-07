import React from 'react';

interface EmotionItemProps {
  emotion_id: 1 | 2 | 3 | 4 | 5;
  emotion_img: string;
  emotion_descript: string;
  onClick: (emotion: 1 | 2 | 3 | 4 | 5) => void;
  isSelected: boolean;
}

const EmotionItem = React.memo(
  ({
    emotion_id,
    emotion_img,
    emotion_descript,
    onClick,
    isSelected,
  }: EmotionItemProps) => {
    return (
      <div
        className={[
          'EmotionItem',
          isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
        ].join(' ')}
        onClick={() => onClick(emotion_id)}>
        <img src={emotion_img} alt={`${emotion_descript}을 선택`} />
        <span>{emotion_descript}</span>
      </div>
    );
  }
);

export default EmotionItem;
