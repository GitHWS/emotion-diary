import React from 'react';

import { EmotionIdType, EmotionDataType } from '../types/Types';

interface EmotionItemProps extends EmotionDataType {
  onClick: (emotion: EmotionIdType) => void;
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
