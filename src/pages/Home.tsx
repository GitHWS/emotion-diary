import { useContext, useEffect, useState } from 'react';

import { DiaryStateContext } from '../App';

import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';

const Home = () => {
  const [data, setData] = useState<
    Array<{
      id: number;
      content: string;
      emotion: 1 | 2 | 3 | 4 | 5;
      date: number;
    }>
  >([]);
  const [curDate, setCurDate] = useState(new Date());
  const diaryList = useContext(DiaryStateContext);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    let titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정 일기장`;
  }, []);

  useEffect(() => {
    if (diaryList!.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList!.filter(
          (it: {
            id: number;
            content: string;
            emotion: 1 | 2 | 3 | 4 | 5;
            date: number;
          }) => firstDay <= it.date && it.date <= lastDay
        )
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () =>
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );

  const decreaseMonth = () =>
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text="<" onClick={decreaseMonth} />}
        rightChild={<MyButton text=">" onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;