// React 모듈 불러오기
import * as React from "react";
// ReactDOM 모듈 불러오기
import * as ReactDOM from "react-dom";
// React 버전 확인하기
console.log(`React version: ${React.version}`);
// ReactDOM 버전 확인하기
console.log(`ReactDOM version: ${ReactDOM.version}`);

// React 요소 작성 (React API)
const appElement = React.createElement(
  /* type */
  'div',
  /* props {} */
  {
    className: 'App',
    id: 'reactAppElement',
    'data-type': 'React.ReactElement'
  },
  React.createElement(
    'h1',
    {
      title: 'React is Awesome!'
    },
    'React는',
    React.createElement(
      'b',
      null,
      '어썸(awesome)'
    ),
    '해~'
  )
);
console.log(appElement);

// React 요소 작성 (with JSX)
const appElementJSX = (
  <div
    className="App"
    id="reactAppElement"
    data-type="React.ReactElement"
  >
    <h1 title="React is Awesome!">
      React는 <b>어썸(awesome)</b>해~
    </h1>
  </div>
);
console.log(appElementJSX);

// App 컴포넌트 만들기

// ReactDOM.createRoot() 를 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
// ReactDOMRoot.render() 메서드로 App을 화면에 표시(렌더링)