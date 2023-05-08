import React, { useEffect, useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

interface DiaryStateContextType {
  id: number;
  date: number;
  content: string;
  emotion: 1 | 2 | 3 | 4 | 5;
}

interface DiaryDispatchContextType {
  onCreate: (date: string, content: string, emotion: 1 | 2 | 3 | 4 | 5) => void;
  onRemove: (targetId: number) => void;
  onEdit: (
    targetId: number,
    date: string,
    content: string,
    emotion: 1 | 2 | 3 | 4 | 5
  ) => void;
}

const initialState: Array<DiaryStateContextType> = [];

type ReducerActionType =
  | { type: 'INIT'; data: Array<DiaryStateContextType> }
  | { type: 'CREATE'; data: DiaryStateContextType }
  | { type: 'REMOVE'; targetId: number }
  | { type: 'EDIT'; data: DiaryStateContextType };

const reducer = (
  state: Array<DiaryStateContextType>,
  action: ReducerActionType
) => {
  let newState = [];

  switch (action.type) {
    case 'INIT': {
      return action.data;
    }

    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(newState));

  return newState;
};

export const DiaryStateContext =
  React.createContext<Array<DiaryStateContextType> | null>(null);
export const DiaryDispatchContext =
  React.createContext<DiaryDispatchContextType>(null!);

function App() {
  // 무슨 에러일까.. 흠흠
  const [data, dispatch] = useReducer(reducer, initialState);
  const dataId = useRef<number>(0);

  useEffect(() => {
    const localData = localStorage.getItem('diary');

    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (
          a: {
            id: string;
            date: number;
            content: string;
            emotion: 1 | 2 | 3 | 4 | 5;
          },
          b: {
            id: string;
            date: number;
            content: string;
            emotion: 1 | 2 | 3 | 4 | 5;
          }
        ) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: 'INIT', data: diaryList });
      }
    }
  }, []);

  // CREATE
  const onCreate = (
    date: string,
    content: string,
    emotion: 1 | 2 | 3 | 4 | 5
  ) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId: number) => {
    dispatch({ type: 'REMOVE', targetId });
  };

  // EDIT
  const onEdit = (
    targetId: number,
    date: string,
    content: string,
    emotion: 1 | 2 | 3 | 4 | 5
  ) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;