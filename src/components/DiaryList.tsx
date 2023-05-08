import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OriginDiaryDataType, ProcessedDiaryListType } from '../types/Types';

import MyButton from './MyButton';
import DiaryItem from './DiaryItem';

/** useState setter 함수 타입 */
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface OptionItem {
  value: string;
  name: string;
}

interface ControlMenuProps {
  value: string;
  optionList: Array<OptionItem>;
  onChange: SetState<string>;
}

interface DiaryListProps {
  diaryList: ProcessedDiaryListType;
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
  ({ value, optionList, onChange }: ControlMenuProps) => {
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

const DiaryList = ({ diaryList = [] }: DiaryListProps) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    const filterCallback = (item: OriginDiaryDataType) => {
      if (filter === 'good') {
        return Number(item.emotion) <= 3;
      } else {
        return Number(item.emotion) > 3;
      }
    };

    const compare = (a: OriginDiaryDataType, b: OriginDiaryDataType) => {
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
        : copyList.filter((it: OriginDiaryDataType) => filterCallback(it));

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

      {getProcessedDiaryList().map((it: OriginDiaryDataType) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default DiaryList;
