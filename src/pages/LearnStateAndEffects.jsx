import { useState } from 'react';

// const getOne = () => 1;

function LearnStateAndEffects() {
  // 성(lastName), 이름(firstName)
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  // 성 + 이름 (fullName) 출력
  // 파생된 상태 (derived state)
  const fullName = lastName + firstName;

  return (
    <div className="m-10 flex flex-col items-start gap-2" lang="en">
      <h2 className="text-2xl uppercase text-indigo-600">
        Learn State And Effects
      </h2>

      <h3>너의 이름은?</h3>

      <input
        type="text"
        name="lastName"
        aria-label="성"
        placeholder="김"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        name="firstName"
        aria-label="이름"
        placeholder="덕구"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <p>당신의 이름은 {fullName} 이군요!</p>
    </div>
  );
}

export default LearnStateAndEffects;
