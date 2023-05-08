/** 감정 아이디 타입 */
export type EmotionIdType = 1 | 2 | 3 | 4 | 5;

/** 감정 아이템 타입 */
export interface EmotionDataType {
  emotion_id: EmotionIdType;
  emotion_img: string;
  emotion_descript: string;
}

/** 일기 데이터 타입 */
export interface OriginDiaryDataType {
  id: number;
  date: string;
  emotion: EmotionIdType;
  content: string;
}

/** 일기 데이터 타입 */
export type ProcessedDiaryDataType = {
  id: number;
  date: number;
  emotion: EmotionIdType;
  content: string;
};

/** 일기 데이터 JSON 타입  */
export type JSONDiaryDataType = {
  id: string;
  date: number;
  emotion: EmotionIdType;
  content: string;
};

/** 일기 목록 타입 - date : string */
export type OriginDiaryListType = Array<OriginDiaryDataType>;

/** 일기 목록 타입 - date : number */
export type ProcessedDiaryListType = Array<ProcessedDiaryDataType>;
