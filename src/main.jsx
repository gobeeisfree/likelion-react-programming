import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// React 함수 컴포넌트의 요건
// - 함수 이름은 첫글자가 대문자
// - JSX를 반환!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// JSX가 하는 일은 React 요소 생성 → 마크업 생성
// JSX → 컴파일러(변환기) → React 요소 → ReactDOM → 실제 DOM 요소 생성 → 구조 작성