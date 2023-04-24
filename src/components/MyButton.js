import React from 'react';

const MyButton = ({ text, type = 'default', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={['MyButton', `MyButton_${type}`].join(' ')}>
      {text}
    </button>
  );
};

export default MyButton;
