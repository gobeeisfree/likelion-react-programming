import { useDispatch, useTheme, switchMode } from '@/contexts/Theme';

export default function GrandChild({ color, onChangeColor }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const currentTheme = theme[theme.currentMode];

  const handleSwitchThemeMode = () => {
    dispatch(switchMode());
  };

  return (
    <div
      className="GrandChild flex flex-col items-center justify-center rounded-md p-4 "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p
        className={`${color.fg} mb-2 p-4 text-center font-extrabold drop-shadow-md`}
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.fg,
        }}
      >
        컨텍스트 공급자(Context Provider)를 사용해
        <br />
        데이터를 공급(provide)해주세요!
      </p>
      <button
        type="button"
        onClick={handleSwitchThemeMode}
        className="-x-4 my-2 border border-white p-2"
      >
        <span className="uppercase">
          {theme.currentMode.includes('light') ? 'dark' : 'light'}
        </span>{' '}
        테마 스위치
      </button>
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
