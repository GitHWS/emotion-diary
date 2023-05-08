interface MyButtonProps {
  text: string;
  type?: 'default' | 'positive' | 'negative';
  onClick: () => void;
}

const MyButton = ({ text, type = 'default', onClick }: MyButtonProps) => {
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
