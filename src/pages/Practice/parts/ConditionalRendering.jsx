// 에셋 이미지 호출
import reactImagePath from '@/assets/react.svg';
import viteImagePath from '@/assets/vite.svg';

function ConditionalRendering({ imageType }) {
  // 2-1. 조건 문 (함수 몸체(function body) 내부 사용)
  // let imageComponent; // undefined

  // if (imageType === 'vite') {
  //   imageComponent = <img src={viteImagePath} alt="비트" />;
  //   // imageComponent = React.createElement('img', { src, alt });
  // } else {
  //   imageComponent = <img src={reactImagePath} alt="리액트" />;
  // }

  // 2-2. 조건 식 (함수 몸체 또는 JSX 내부 사용)

  // 2-2-1. 3항 연산식
  const imageComponent =
    imageType === 'vite' ? (
      <img src={viteImagePath} alt="비트" />
    ) : (
      <img src={reactImagePath} alt="리액트" />
    );

  return (
    <>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
          {/* 조건문으로 렌더링 */}
          <strong>imageComponent if 조건문으로 조건 처리</strong>
          {imageComponent}

          {/* 조건식으로 렌더링 (함수 실행, 3항 연산식(ternary), 논리곱/합 연산자, null 병합 연산자, 옵셔널 체이닝) */}
          <strong>3항 연산식으로 조건 처리</strong>
          {imageType === 'vite' ? (
            <img src={viteImagePath} alt="비트" />
          ) : (
            <img src={reactImagePath} alt="리액트" />
          )}

          {/* src/assets 동적 자원 호출 시 */}
          {/* <img src={reactImagePath} alt="리액트" />
          <img src={viteImagePath} alt="비트" /> */}

          {/* public 정적 자원 호출 시 */}
          {/* <img src="/react.avif" alt="리액트" /> */}
          {/* <img src="/vite.svg" alt="비트" /> */}

          <img
            src={imageType === 'react' ? '/react.avif' : '/vite.svg'}
            alt={imageType === 'react' ? '리액트' : '비트'}
          />

          {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">
          <img className="spinner" src="/spinner.svg" alt="로딩 중..." />
          <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
        </div>
      </dd>
    </>
  );
}

export default ConditionalRendering;
