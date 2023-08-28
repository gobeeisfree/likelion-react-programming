import Heading from '@/components/Heading';
import Nav from './Nav';

function HeaderBar() {
  // 리액트 도구 학습 → 사용 (필수 JavaScript 언어 구문 독해 및 활용 능력)
  // 템플릿 리터럴 구문 `${}`
  return (
    <header className="flex items-center justify-between bg-black p-5 text-indigo-50 dark:border-b dark:border-b-zinc-50/20">
      <Heading />
      <Nav />
    </header>
  );
}

export default HeaderBar;
