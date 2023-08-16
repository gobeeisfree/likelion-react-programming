import Heading from '@/components/Heading';

function HeaderBar() {
  // 리액트 도구 학습 → 사용 (필수 JavaScript 언어 구문 독해 및 활용 능력)
  // 템플릿 리터럴 구문 `${}`
  return (
    <header className="bg-indigo-950 p-5 text-indigo-50">
      <Heading />
    </header>
  );
}

export default HeaderBar;
