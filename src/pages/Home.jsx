import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - ReactBird</title>
      </Helmet>
      <div className="grid min-h-[100%] place-content-center bg-hero bg-cover bg-center">
        <motion.h2
          drag
          dragConstraints={{ top: -2, right: 2, bottom: 2, left: -2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94, opacity: 0.8 }}
          className="text-4xl font-extralight uppercase tracking-widest text-white"
        >
          Shop<span className="text-[60px] text-yellow-400">.</span>
        </motion.h2>
      </div>
    </>
  );
}

export default Home;
