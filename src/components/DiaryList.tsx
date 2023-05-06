import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MyButton from './MyButton';
import DiaryItem, { DiaryItemProps } from './DiaryItem';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface OptionItem {
  value: string;
  name: string;
}

interface FilteredItemByEmotion {
  id: number;
  content: string;
  emotion: '1' | '2' | '3' | '4' | '5';
  date: string;
}

interface ControlMenuProps {
  value: string;
  onChange: SetState<string>;
  optionList: OptionItem[];
}

const sortOptionList = [
  {
    value: 'latest',
    name: '최신순',
  },
  {
    value: 'oldest',
    name: '오래된 순',
  },
];

const filterOptionList = [
  { value: 'all', name: '전부다' },
  { value: 'good', name: '좋은 감정만' },
  { value: 'bad', name: '안좋은 감정만' },
];

const ControlMenu = React.memo(
  ({ value, onChange, optionList }: ControlMenuProps) => {
    return (
      <select
        className="ControlMenu"
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => (
          <option value={it.value} key={`opt${idx}`}>
            {it.name}
          </option>
        ))}
      </select>
    );
  }
);

const DiaryList = ({ diaryList = [] }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    const filterCallback = (item: FilteredItemByEmotion) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a: FilteredItemByEmotion, b: FilteredItemByEmotion) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === 'all'
        ? copyList
        : copyList.filter((it: FilteredItemByEmotion) => filterCallback(it));

    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            text="새 일기쓰기"
            type="positive"
            onClick={() => navigate('/new')}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it: DiaryItemProps) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default DiaryList;
