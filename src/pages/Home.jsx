import { useEffect } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import pb from '@/api/pocketbase';

function Home() {
  useDocumentTitle('홈');

  // 로그인
  // 사용자 브라우저 로컬 스토리지에 저장
  useEffect(() => {
    const { isValid, model, token } = pb.authStore;
    console.log(isValid); // boolean
    console.log(model); // null or { id, email, ... }
    console.log(token); // '' or 'unique_token_data'
  }, []);

  // 로그아웃
  // 사용자 브라우저 로컬 스토리지에 저장된 데이터를 삭제
  const handleSignOut = () => pb.authStore.clear();

  return (
    <div className="grid min-h-[calc(100vh_-_200px)] place-content-center bg-hero bg-cover bg-center">
      <h2 className="text-4xl font-extralight uppercase tracking-widest text-white">
        Shop<span className="text-6xl text-yellow-400">.</span>
      </h2>
      {pb.authStore.isValid && (
        <button
          type="button"
          className="p-4 text-4xl text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Home;
