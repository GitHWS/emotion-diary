# 나만의 작은 일기장, 감정 일기장 📓

> Udemy 한입 크기로 잘라먹는 리액트 강의의 프로젝트 결과물 레포지토리입니다.

![thumbnail](https://user-images.githubusercontent.com/96808980/235910498-7d0911d4-6e73-470f-b466-4ac1f3072a3a.png)

## 데모
데모 : [나만의 작은 일기장, 감정 일기장](https://githws-emotion-diary.web.app/)

## 개요
```
📓 오늘 하루를 나의 기분으로 기억하고 기록하는 일기장입니다.
📝 내가 작성한 일기의 목록을 확인할 수 있습니다.
🧹 내가 작성한 일기를 월별로 정렬(최신/오래된 순), 필터링(전부/좋은/안좋은)하여 볼 수 있습니다.
🔄 내가 작성한 일기를 수정할 수 있습니다.
🔥 내가 작성한 일기를 삭제할 수 있습니다.
```

## 목차

1. [프로젝트 진행 동기](#1-프로젝트-진행-동기)
2. [프로젝트 플로우 차트](#2-프로젝트-플로우-차트)
3. [기술 및 개발환경](#3-기술-및-개발환경)
4. [구현 기능](#4-구현-기능)
5. [구현 동작](#5-구현-동작)

<br/>

## 1. 프로젝트 진행 동기

첫 React 프로젝트로, React의 기본 CRUD 기능을 구현해보기 위한 프로젝트입니다.

실제 프로젝트에 React의 State와 기본적인 Hooks을 사용하는 경험을 쌓기 위해 프로젝트를 진행했습니다.

<img width="500" src="https://user-images.githubusercontent.com/96808980/235915483-bb03be9e-7bb8-4caf-bb85-38d5746e9ba2.png" alt="감정일기장 메인" />

<br/>

## 2. 프로젝트 플로우 차트

<img width="800" alt="프로젝트 플로우 차트" src="https://user-images.githubusercontent.com/96808980/235927230-a308b32d-646f-4f1a-a6e9-756d1c9f396c.png">

<br/>

## 3. 기술 및 개발환경

- Front-end
```
- React(create-react-app)
- react-router-dom
- localStorage
```
```json
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.10.0",
```
<br/>

- 배포 환경
```
- firebase hosting
```

<br/>

## 4. 구현 기능

- 📓 CRUD
  - 일기 작성
  - 선택한 일기 수정
  - 선택한 일기 삭제
- 📜 일기 목록 정렬 및 필터링
  - 일기 목록 보기 
  - 일기 최신순 / 오래된 순 정렬
  - 일기 전부 / 좋은 감정만(완전좋음, 좋음) / 안좋은 감정만(그럭저럭, 나쁨, 끔찍함) 필터링
- 💾 일기 데이터 저장
  - 일기 데이터 로컬 스토리지 저장
- 👟 페이지 이동
  - 라우터 기능 구현

<br/>

## 5. 구현 동작

### 1) Home

일기 목록 데이터를 월별로 볼 수 있으며 일기 목록을 최신-오래된 순 정렬을 할 수 있으며 기분에 따라 필터링을 할 수 있습니다.

**[월별 정렬]**

<img width="400" src="https://user-images.githubusercontent.com/96808980/235931683-e38e470d-46f5-4e75-8db5-6cb50fa17f8e.gif"/>

**[최신-오래된 순 정렬/기분별 필터링]**

<img width="400" src="https://user-images.githubusercontent.com/96808980/235933131-f5d0acd7-2292-4612-aff5-88f01bcf9d2f.gif"/>

<br/>

### 2) New

새로운 일기를 작성합니다.

<img width="400" src="https://user-images.githubusercontent.com/96808980/235936474-99511607-c938-4b42-a747-36a31d7a2bf0.gif"/>

<br/>

### 3) Edit

작성했던 일기 데이터를 수정/삭제합니다.

**[일기 데이터 수정]**

<img width="400" src="https://user-images.githubusercontent.com/96808980/235937307-71c6ebe0-ac28-4526-9cb7-919ca68e2c9e.gif"/>

**[일기 데이터 삭제]**

<img width="400" src="https://user-images.githubusercontent.com/96808980/235937774-6b28894b-903e-463e-bcdb-560a25ea3cc0.gif"/>

<br/>

### 4) Diary

선택한 일기를 열람할 수 있습니다.

<img width="400" src="https://user-images.githubusercontent.com/96808980/235938398-a7704c36-68f7-4cce-9bf9-7e78350acb71.gif" />

<br/>



