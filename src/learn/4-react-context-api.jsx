import debounce from '@/utils/debounce';
import { useState, createContext, useContext, useReducer } from 'react';

/* Context ------------------------------------------------------------------ */

// Context ( Modern (Hooks) / Legacy (Context.Consumer + Render Props or HOC Pattern) )

// JSX
// React.createElement

// Context 생성
// React.createContext(초깃값) <- 읽기 전용
// const [get] = useState(initialValue)

// Context 공급자(Provider)
// 값(value) <- 읽기/쓰기
// const [get, set] = useState(initialValue)

// Context 값 꺼내기(가져오기)
// React.useContext

/* -------------------------------------------------------------------------- */

// 1. Context 생성
// Theme 상태/업데이트 함수(dispatch) 공급
const ThemeContext = createContext();

/* Reducer Function --------------------------------------------------------- */
const initialTheme = {
  currentMode: 'light',
  light: {
    fg: 'black',
    bg: 'white',
  },
  dark: {
    fg: 'white',
    bg: 'black',
  },
};

// Action Types
const RESET_THEME = 'RESET_THEME';
const CHANGE_LIGHT_THEME = 'CHANGE_LIGHT_THEME';
const CHANGE_DARK_THEME = 'CHANGE_DARK_THEME';
const SWITCH_MODE = 'SWITCH_MODE';

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return {
        ...state,
        currentMode: state.currentMode.includes('light') ? 'dark' : 'light',
      };
    case CHANGE_LIGHT_THEME:
      return {
        ...state,
        light: action.payload,
      };
    case CHANGE_DARK_THEME:
      return {
        ...state,
        dark: action.payload,
      };
    case RESET_THEME:
      return initialTheme;
    default:
      return state;
  }
};

/* Component ---------------------------------------------------------------- */

function ReactContextAPI() {
  // 상태
  const [color, setColor] = useState({
    fg: 'text-blue-50',
    bg: '#1170a3',
  });

  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = debounce(
    (newBgColor) =>
      setColor((color) => ({
        ...color,
        bg: newBgColor,
      })),
    600
  );

  // 컨텍스트 값으로 공급
  // 렌더 트리거 2가지

  // 1. React.useState
  // const [theme, setTheme] = useState({
  //   light: {
  //     fg: 'black',
  //     bg: 'white',
  //   },
  //   dark: {
  //     fg: 'white',
  //     bg: 'black',
  //   },
  // });

  // const usingStateValue = {
  //   theme,
  //   setTheme
  // };

  // 2. React.useReducer (like Redux)
  const [theme, dispatch] = useReducer(reducer, initialTheme);

  return (
    <ThemeContext.Provider
      displayName="ThemeContextProvider"
      // 1. value={usingStateValue}
      // 2. value={{theme, dispatch}}
      value={{ theme, dispatch }}
    >
      <div
        className="PassingProps rounded-md p-5"
        style={{ backgroundColor: color.bg }}
      >
        <GrandParent color={color} onChangeColor={handleChangeBgColor} />
      </div>
    </ThemeContext.Provider>
  );
}

export default ReactContextAPI;

/* -------------------------------------------------------------------------- */

function GrandParent({ color, onChangeColor }) {
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

function Parent({ color, onChangeColor }) {
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

function Child({ color, onChangeColor }) {
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

function GrandChild({ color, onChangeColor }) {
  // 2. 컨텍스트 값을 주입(Injection)
  const { theme, dispatch } = useContext(ThemeContext);

  // console.log(theme, dispatch);

  const currentTheme = theme[theme.currentMode];
  // console.log(currentTheme);

  const handleSwitchThemeMode = () => {
    dispatch({
      type: SWITCH_MODE,
    });
  };

  return (
    <div
      className="GrandChild flex flex-col items-center justify-center rounded-md p-4 "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p
        className={`${color.fg} mb-2 text-center font-medium drop-shadow-md`}
        style={{ backgroundColor: currentTheme.bg, color: currentTheme.fg }}
      >
        컨텍스트 공급자(Context Provider)를 사용해
        <br />
        데이터를 공급(provide)해주세요!
      </p>
      <button
        className="my-2 border border-white p-2"
        type="button"
        onClick={handleSwitchThemeMode}
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
