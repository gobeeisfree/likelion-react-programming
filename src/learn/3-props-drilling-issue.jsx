import useDocumentTitle from '@/hooks/useDocumentTitle';
import debounce from '@/utils/debounce';
import { useState } from 'react';
function PropsDrillingIssue() {
  useDocumentTitle('속성(props) 드릴링 이슈');
  // 상태
  const [color, setColor] = useState({
    fg: 'text-blue-50',
    bg: '#1170a3',
  });

  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = debounce((newBgColor) =>
    setColor((color) => ({
      ...color,
      bg: newBgColor,
    }))
  );

  return (
    <div
      className="PassingProps rounded-md p-5"
      style={{ backgroundColor: color.bg }}
    >
      <GrandParent color={color} onChangeColor={handleChangeBgColor} />
    </div>
  );
}
/* -------------------------------------------------------------------------- */

export function GrandParent({ color, onChangeColor }) {
  return (
    <div
      className="GrandParent rounded-md p-4"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 20%)`,
      }}
    >
      <Parent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Parent({ color, onChangeColor }) {
  return (
    <div
      className="Parent rounded-md p-4"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 40%)`,
      }}
    >
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <div
      className="Child rounded-md p-4"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 60%)`,
      }}
    >
      <GrandChild color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function GrandChild({ color, onChangeColor }) {
  return (
    <div
      className="GrandChild flex flex-col items-center justify-center rounded-md p-4 "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p className={`${color.fg} mb-2`}>상태 데이터를 제게 주세요!</p>
      <input
        type="color"
        aria-label="배경 색상"
        defaultValue={color.bg}
        onChange={(e) => {
          onChangeColor(e.target.value);
        }}
      />
    </div>
  );
}
export default PropsDrillingIssue;
