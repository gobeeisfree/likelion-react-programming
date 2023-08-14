/* eslint-disable no-inner-declarations */
import Switcher from '@/components/Switcher/Switcher';
import React from 'react';

{
  // 로컬 변수
  let myName = '로컬 변수';

  // 로컬 뮤테이션
  // eslint-disable-next-line no-unused-vars
  function handleUpdateMyName() {
    myName += ' Wow~';
    console.log(myName);
  }

  console.log('컴포넌트 렌더링 myName =', myName);
}

function Demo() {
  // 상태 관리는 페이지 컴포넌트에서 진행
  // React.useState() 훅으로 선언된 상태로 제어
  // on / off 상태 변수 (관리할 데이터 타입은 Boolean)

  // const readyState = React.useState(false); // [s, f]
  // const isReady = readyState[0]; // 상태: state
  // const setIsReady = readyState[1]; // 상태 업데이트 함수: setState

  // console.log(isReady);
  // console.log(setIsReady);

  const [isReady, setIsReady] = React.useState(false);

  // 리액트가 요구하는 방법대로 상태를 업데이트(변경)하면?
  // 렌더링 트리거 → 컴포넌트 렌더링 → DOM 커밋 순으로 진행

  const handleToggleReady = () => {
    setIsReady(!isReady);
  };

  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
      }}
    >
      {/* <p>{myName}</p> */}
      {/* <button type='button' onClick={handleUpdateMyName}>나의 이름을 바꿔줘</button> */}
      {/* Atomic Component → Stateless or Presentational */}
      <Switcher
        on={isReady}
        onLabel="on"
        offLabel="off"
        onClick={handleToggleReady}
      />
      <Switcher
        on={isReady}
        onLabel="on"
        offLabel="off"
        onClick={handleToggleReady}
      />
    </div>
  );
}
export default Demo;
