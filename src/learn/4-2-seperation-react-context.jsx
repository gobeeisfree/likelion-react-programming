import debounce from '@/utils/debounce';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GrandParent from './partials/GrandParent';

function ReactContextAPI() {
  const [color, setColor] = useState({
    fg: 'text-blue-50',
    bg: '#1170a3',
  });

  const handleChangeBgColor = debounce(
    (newBgColor) =>
      setColor((color) => ({
        ...color,
        bg: newBgColor,
      })),
    600
  );

  return (
    <>
      <Helmet>
        <title>Context 분리 관리</title>
      </Helmet>
      <div
        className="PassingProps rounded-md p-5"
        style={{ backgroundColor: color.bg }}
      >
        <GrandParent color={color} onChangeColor={handleChangeBgColor} />
      </div>
    </>
  );
}

export default ReactContextAPI;
