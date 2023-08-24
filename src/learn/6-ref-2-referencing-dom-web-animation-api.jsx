import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useLayoutEffect } from 'react';

function RefExampleReferencingDOM() {
  useDocumentTitle('DOM 요소를 참조하는 Refs');
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 참조하는 Refs</h2>
      <Circle />
    </>
  );
}

function Circle() {
  // useEffect 콜백 보다 먼저 실행
  // 리액트 렌더링 프로세스
  // 1. 렌더 트리거
  // 2. 컴포넌트 렌더링
  // 3. DOM 커밋
  // - useLayoutEffect() 콜백
  // 브라우저 렌더링 프로세스
  // 4. 브라우저 페이팅
  // - useEffect() 콜백

  useLayoutEffect(() => {
    // Javascript Animation API
    // 참고:
    //   https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    //   https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
    //   https://easings.co

    // figure 요소가 단 하나만 존재할 것이다. (보장 못함)
    // .circle 단 하나만 존재할 것이다. (보장 못함)
    // #circle은 단 하나만 존재할 것이다. (보장?)
    const circleElement = document.getElementById('circle');
    const handleMoveX = (e) => {
      e.currentTarget.animate(
        /* keyframes */
        // { transform: ['translateX(0)', 'translateX(360px)'] },
        [
          /* keyframe {} */
          { transform: 'translateX(0)' }, // from | initial
          { transform: 'translateX(360px)' }, // to | animate
        ],
        /* options */
        {
          duration: 3000,
          iterations: Infinity,
          direction: 'alternate',
          fill: 'forwards',
          easing: 'cubic-bezier(0.86,0,0.07,1)',
        }
      );
    };

    // 이벤트 연결
    circleElement.addEventListener('click', handleMoveX);

    // 연결된 이벤트 정리
    return () => {
      circleElement.removeEventListener('click', handleMoveX);
    };
  }, []);
  return (
    <figure
      role="none"
      id="circle"
      className="circle h-16 w-16 rounded-full bg-yellow-400"
    />
  );
}

export default RefExampleReferencingDOM;
