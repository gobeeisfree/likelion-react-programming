// 상태는 스냅샨 같이 작동한다.
// 상태란? 시간의 흐름에 따라 변하는 데이터를 말한다.
// 스냅샷은 흐르는 상태의 특정 시점에서의 데이터 조각을 말한다.
// 스냅샷은 현재 실행된 함수 몸체 안에서 변경이 불가능하다.
// 렌더 트리거(요청)를 수행하는 상태 업데이트 함수에 전달한 nextState는 다음 렌더링 시점에 반영된다.
// 그렇다면? 현재 시점에서 변경될 상태에 접근할 수는 없는가?
// No. 사이드 이펙트로 처리가 가능함.
// 1. 이벤트 핸들러
// 2. useEffect 훅

import { useEffect, useState } from 'react';

function LearnStateAndEffects() {
  const [count, setCount] = useState(0);

  // 이펙트 사용 (동기화)
  // 상태의 변경이 발생하면 이펙트에 설정된 콜백 함수가 실행된다.
  // 즉 다음 상태(nextState)에 접근 가능하다.
  useEffect(
    () => {
      /* 1단계: 이펙트 콜백 함수 */

      // DOM 커밋 이후에 실행
      // 이펙트 콜백 함수
      console.log('count in effect', count); // next State
    },
    /* 2단계: 이펙트 콜백 함수를 실행시키는 조건(배열 포함된 항목) */
    // 종속성 배열이 없는 경우, 컴포넌트 렌더링 될 때 마다 이펙트 함수가 항상 실행
    // 종속성 배열이 빈 경우, 컴포넌트 최초 렌더링이 시 1회 실행
    // [],
    // 종속성 배열에 의존하는 상태를 설정하면
    // 리액트는 종속된 상태의 변경을 감지(이전 → 이후)
    // 상태가 변경되었다면 이펙트 콜백 함수를 실행
    [count]
  );

  const handleClick = () => {
    setCount(count + 10); // count (snapshot) = 0
    console.log('count in event handler ', count);
  };

  /* -------------------------------------------------------------------------- */

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log(isShow); // next state snapshot
  }, [isShow]);

  const handleToggle = () => {
    setIsShow(!isShow);
    console.log('isShow = ', isShow); // current state snapshot
  };

  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <h2 className={`font-suit text-2xl text-indigo-600`}>
        상태 및 이펙트 학습하기 ({count})
      </h2>
      <button type="button" onClick={handleToggle}>
        {isShow ? '감춤' : '숨김'}
      </button>
      {isShow && (
        <button type="button" onClick={handleClick}>
          +10
        </button>
      )}
    </div>
  );
}

export default LearnStateAndEffects;
