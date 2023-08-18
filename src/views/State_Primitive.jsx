import { useState } from 'react';

function LearnStateAndEffects() {
  // 성(lastName), 이름(firstName)
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  // const [showYourName, setShowYourName] = useState(false);

  // 성 + 이름(fullName) 출력
  // 파생된 상태 (derived state)
  const fullName = lastName + firstName;
  const fullNameLength = fullName.length;
  const showYourName = lastName.length > 0 && firstName.length > 0;

  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <h2 className="text-2xl uppercase text-indigo-600">
        상태 및 이펙트 학습하기
      </h2>

      <h3 className="text-lg text-slate-700">너의 이름은?</h3>

      <div className="flex items-center gap-1">
        <input
          type="text"
          name="lastName"
          aria-label="성"
          placeholder="김"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className="w-7 rounded-sm border-2 border-indigo-400 px-1 text-center"
        />
        <input
          type="text"
          name="firstName"
          aria-label="이름"
          placeholder="덕구"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="w-12 rounded-sm border-2 border-indigo-400 px-1 text-center"
        />
        <span className="text-base text-slate-600">({fullNameLength})</span>
      </div>

      {showYourName && (
        <>
          <hr className="border-1 my-2 w-full border-dashed border-indigo-300" />
          <img src="https://bit.ly/45blNdl" alt="" className="h-40" />
          <p>
            아! 당신의 이름은{' '}
            <b className="text-indigo-500 underline underline-offset-4">
              {fullName}
            </b>
            이군요!
          </p>
        </>
      )}
    </div>
  );
}

export default LearnStateAndEffects;
