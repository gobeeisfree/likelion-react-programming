// 상태는 스냅샨 같이 작동한다.
// 상태란? 시간의 흐름에 따라 변하는 데이터를 말한다.
// 스냅샷은 흐르는 상태의 특정 시점에서의 데이터 조각을 말한다.
// 스냅샷은 현재 실행된 함수 몸체 안에서 변경이 불가능하다.
// 렌더 트리거(요청)를 수행하는 상태 업데이트 함수에 전달한 nextState는 다음 렌더링 시점에 반영된다.
// 그렇다면? 현재 시점에서 변경될 상태에 접근할 수는 없는가?
// No. 사이드 이펙트로 처리가 가능함.
// 1. 이벤트 핸들러
// 2. useEffect 훅

import { useState } from 'react';

function LearnStateAndEffects() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 10);
    console.log('count 값은? ', count);
  };
  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <h2 className={`font-suit text-2xl text-indigo-600`}>
        상태 및 이펙트 학습하기 ({count})
      </h2>
      <button type="button" onClick={handleClick}>
        +10
      </button>
    </div>
  );
}

export default LearnStateAndEffects;
