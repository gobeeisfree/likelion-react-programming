import ReactDOM from 'react-dom/client';

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));

reactDomRoot.render(
  <div>
    <h1>React</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab animi,
      labore facilis obcaecati ullam placeat molestiae. Enim, consectetur
      laudantium.
    </p>
    <ul>
      <li>list item A</li>
      <li>list item B</li>
      <li>list item C</li>
    </ul>
  </div>
);

// JSX가 하는 일은 React 요소 생성 → 마크업 생성
// JSX → 컴파일러(변환기) → React 요소 → ReactDOM → 실제 DOM 요소 생성 → 구조 작성