import { useState } from 'react';

function LearnStateAndEffects() {
  // 숫자 값 상태 관리
  // 마우스의 x 좌표
  const [mouseX, setMouseX] = useState(0);
  // 마우스의 y 좌표
  const [mouseY, setMouseY] = useState(0);

  const handlePrintMousePosition = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // 객체 상태 관리
  return (
    <div
      className="m-10 flex flex-col items-start gap-2"
      onMouseMove={handlePrintMousePosition}
    >
      <h2 className="text-2xl uppercase text-indigo-600">
        상태 및 이펙트 학습하기
      </h2>

      <output>
        마우스 X 좌표: {mouseX} / 마우스 Y 좌표: {mouseY}
      </output>
    </div>
  );
}

export default LearnStateAndEffects;
