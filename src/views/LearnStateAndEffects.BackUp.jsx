import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';

// 데이터 가져오기 (PocketBase 서버: 백엔드 데이터베이스 솔루션)

// 1. 컴포넌트에서 관리할 상태(데이터, 상황: 대기, 로딩, 성공, 실패) 정의
// 2. 서버에 데이터 가져오기 요청/응답
// 3. 응답된 상황(status)에 따라 뷰(view) 전환: 조건부 렌더링
// 3-1. 로딩 상황의 화면
// 3-2. 오류 상황의 화면
// 3-3. 성공 상황의 화면: 데이터 기반으로 리스트 렌더링

function LearnStateAndEffects() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  // 이펙트 필요!
  // React 외적인 일을 처리
  useEffect(() => {
    // 중단(abort) 컨트롤러(controller) 생성
    const controller = new AbortController();
    const { signal } = controller;
    setStatus('loading');

    // fetch + promise, async function + fetch
    fetch('http://127.0.0.1:8090/api/collections/todos/records', { signal })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setStatus('success');
      })
      .catch((error) => {
        if (!(error instanceof DOMException)) {
          setStatus('error');
          setError(error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  // 함수 몸체: 문 또는 식, 함수

  // 상황 별 조건 처리(화면 표시 모드)

  // 로딩중인 화면
  if (status === 'loading') {
    return <Spinner size={160} message="데이터 가져오는 중이에요." />;
  }

  // 오류가 발생한 경우 화면
  if (status === 'error') {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  // 성공적으로 데이터를 가져온 경우 화면
  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <h2 className="font-suit text-2xl text-indigo-600">
        상태 및 이펙트 학습하기
      </h2>
      {/* JSX: 식만 사용 가능 */}
      {data && (
        <ul>
          {data.items?.map((item) => (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.done} readOnly />{' '}
                {item.doit}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LearnStateAndEffects;
