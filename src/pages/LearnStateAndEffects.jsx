import { useState } from 'react';

// const getOne = () => 1;

function LearnStateAndEffects() {
  // 지역 변수는 상태 변수???
  // 리액트 상태 변수는 useState 훅(함수) 사용한다.
  // Q. 컴포넌트 count 상태를 리액트에서 인식하도록 정의해봅니다.
  // let count = 100;
  // A. React.useState() 훅을 사용하세요.
  // const [count2] = useState(() => getOne());
  // console.log(count1);
  // console.log(count2);
  const [count, setCount] = useState(100);
  const [step] = useState(12);

  // 상태 정의와 상태 변경

  return (
    <div className="m-10 flex flex-col items-start gap-2" lang="en">
      <h2 className="text-2xl uppercase text-indigo-600">
        Learn State And Effects {count}
      </h2>
      <button
        type="button"
        onClick={() => setCount(count + step)}
        className="rounded-md border border-slate-600 px-2.5 py-0.5"
      >
        +{step}
      </button>
    </div>
  );
}

export default LearnStateAndEffects;
