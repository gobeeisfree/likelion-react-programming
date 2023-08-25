import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - ReactBird</title>
      </Helmet>
      <div className="grid min-h-[calc(100vh_-_200px)] place-content-center bg-hero bg-cover bg-center">
        <h2 className="text-4xl font-extralight uppercase tracking-widest text-white">
          Shop<span className="text-6xl text-yellow-400">.</span>
        </h2>
      </div>
    </>
  );
}

export default Home;
