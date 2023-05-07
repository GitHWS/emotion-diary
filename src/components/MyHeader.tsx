interface MyHeaderProps {
  headText: string;
  leftChild: JSX.Element;
  rightChild: false | JSX.Element;
}

const MyHeader = ({ headText, leftChild, rightChild }: MyHeaderProps) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
