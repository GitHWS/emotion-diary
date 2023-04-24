import React from 'react';

const MyButton = ({ text, type = 'default', onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      onClick={onClick}
      className={['MyButton', `MyButton_${btnType}`].join(' ')}>
      {text}
    </button>
  );
};

export default MyButton;
