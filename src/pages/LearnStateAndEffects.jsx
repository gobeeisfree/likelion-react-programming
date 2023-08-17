// 리액트 렌더링과 상관 없이 외적으로 처리가 요구되는 일 (side effect)
// 서버에 데이터 가져오기 요청
// 대기 시간... (사용자에 어떤 정보를 제공할 것인가?)
// 서버에서 응답(성공 또는 실패)
// 성공한 경우: 배열(객체) 리스트 렌더링 -> 화면에 표시
// 실패한 경우: 오류 메시지를 화면에 출력

// 컴포넌트 상태 (최소한의 갯수로 관리가 요구)
// 1. data: 데이터 가져오기
// 2. status: 진행상황 'pending' | 'loading' | 'success' | 'error'
// 2-1. isLoading: 대기 시간 상태
// 2-2. isSuccess: 데이터 가져오기 성공한 상태
// 2-3. isError: 데이터 가져오기 실패한 상태

import { useEffect, useState } from 'react';

function LearnStateAndEffects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

  // server request (endpoint:)
  // side effect
  useEffect(() => {
    // 상태 변경
    // 대기 → 로딩 중...
    setStatus('loading'); // 상태 업데이트 일괄(batch) 처리
    // Promise API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      // 성공
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setStatus('success');
      })
      // 실패
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  }, []);

  // 데이터 가져오는 중(로딩)일 때 표시할 화면
  if (status === 'loading') {
    return (
      <div role="alert">
        <img
          src="https://i.gifer.com/ZKZg.gif"
          alt="데이터 가져오는 중입니다."
        />
        데이터 가져오는 중입니다.
      </div>
    );
  }
  // 데이터 가져오기 실패한 경우 표시할 화면
  if (status === 'error') {
    return <div role="alert">{error.toString()}</div>;
  }

  // 데이터 가져오기 성공했을 때 표시할 화면
  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <h2 className={`font-suit text-2xl text-indigo-600`}>
        상태 및 이펙트 학습하기
      </h2>

      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LearnStateAndEffects;
