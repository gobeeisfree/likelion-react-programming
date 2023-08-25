import debounce from '@/utils/debounce';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function LiftingStateUp() {
  const [color, setColor] = useState('#999');
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <div className="PassingProps">
      <Parent color={color} onChangeColor={handleChangeBgColor} />
      <OtherParent color={color} />
    </div>
  );
}

export default LiftingStateUp;

/* -------------------------------------------------------------------------- */

export function OtherParent({ color }) {
  return (
    <div
      className="Parent flex items-center justify-center bg-slate-200 p-4"
      style={{
        backgroundColor: color,
      }}
    >
      <p>Change Background Color</p>
    </div>
  );
}

export function Parent({ color, onChangeColor }) {
  return (
    <div className="Parent">
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <>
      <Helmet>
        <title>상태 끌어올리기</title>
      </Helmet>
      <div className="Child flex items-center justify-center gap-8">
        <p className="text-4xl font-extralight uppercase" style={{ color }}>
          Child
        </p>
        <input
          type="color"
          aria-label="글자 색상 변경"
          defaultValue={color}
          onChange={debounce((e) => onChangeColor(e.target.value), 500)}
        />
      </div>
    </>
  );
}
