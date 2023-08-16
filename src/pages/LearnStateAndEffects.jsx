import { useId } from 'react';
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
  const [step, setStep] = useState(12);

  // 상태 정의와 상태 변경

  // 관리가 까다로운 ID 속성 값을 자동 생성하는 훅
  const stepperId = useId();

  return (
    <div className="m-10 flex flex-col items-start gap-2" lang="en">
      <h2 className="text-2xl uppercase text-indigo-600">
        Learn State And Effects {count}
      </h2>
      <div className="flex items-center gap-2">
        <label htmlFor={stepperId} className="text-base">
          step
        </label>
        <input
          type="number"
          id={stepperId}
          value={step}
          onChange={(e) => {
            const nextStep = Number(e.target.value);
            setStep(nextStep);
          }}
          placeholder={step}
          className="w-16 rounded-xl border border-slate-300 px-2 py-1"
        />
      </div>
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
