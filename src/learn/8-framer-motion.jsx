import useDocumentTitle from '@/hooks/useDocumentTitle';
import { motion } from 'framer-motion';

function FramerMotion_Animation() {
  useDocumentTitle('Framer Motion 애니메이션');
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="flex gap-10">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </>
  );
}

function Circle() {
  return (
    <motion.figure
      role="none"
      className="grid h-16 w-16 place-content-center rounded-full bg-yellow-300"
    >
      <motion.img src="/react.png" alt="React" className="h-10 w-10" />
    </motion.figure>
  );
}

export default FramerMotion_Animation;
