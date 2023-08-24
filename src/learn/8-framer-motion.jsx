import useDocumentTitle from '@/hooks/useDocumentTitle';
import { motion } from 'framer-motion';
import { useState } from 'react';

function FramerMotion_Animation() {
  useDocumentTitle('Framer Motion 애니메이션');

  const [count, setCount] = useState(0);
  const [keys, setKeys] = useState(
    Array(6)
      .fill(null)
      .map(() => Math.random())
  );

  const handleCountUp = () => {
    setCount((c) => c + 10);
  };

  const handleResetAnimation = () => {
    setKeys(keys.map(() => Math.random()));
  };

  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="my-6 flex gap-2">
        <button
          type="button"
          className="rounded-md border border-slate-200 px-1.5 py-1.5 shadow-lg"
          onClick={handleCountUp}
        >
          {count}
        </button>
        <button
          type="button"
          className="rounded-md border border-slate-200 px-1.5 py-1.5 shadow-lg"
          onClick={handleResetAnimation}
        >
          <svg
            className="h-[16px] w-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-[700px]">
        {keys.map((key) => (
          <Circle key={key} />
        ))}
      </div>
    </>
  );
}

function Circle() {
  return (
    <motion.figure
      initial={{ y: -150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, scale: 2 }}
      viewport={{
        once: true,
      }}
      transition={{ duration: 4, type: 'spring', stiffness: 400, damping: 10 }}
      role="none"
      className="grid h-16 w-16 place-content-center rounded-full bg-yellow-300"
    >
      <motion.img
        // 초기상태(initial)
        initial={{ scale: 0 }}
        // 애니메이션 상태(animate)
        animate={{ scale: 1, rotate: 360 }}
        // 트랜지션 상태(transition)
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        src="/react.png"
        alt="React"
        className="h-10 w-10"
      />
    </motion.figure>
  );
}

export default FramerMotion_Animation;
