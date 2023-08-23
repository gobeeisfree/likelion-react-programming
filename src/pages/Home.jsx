import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('홈');

  return (
    <div className="bg-hero grid min-h-[calc(100vh_-_200px)] place-content-center bg-cover bg-center bg-no-repeat">
      <h2 className="text-4xl font-extralight uppercase tracking-widest text-white">
        Shop<span className="text-6xl text-yellow-400">.</span>
      </h2>
    </div>
  );
}

export default Home;
