import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';

const PB_TODOS_ENDPOINT = `http://127.0.0.1:8090/api/collections/todos/records`;

function LearnStateAndEffects() {
  const { data, isLoading, error } = useFetchData(PB_TODOS_ENDPOINT);

  if (isLoading) {
    return <Spinner size={160} message="데이터 가져오는 중이에요." />;
  }

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="m-10 flex flex-col items-start gap-2">
      <h2 className="font-suit text-2xl text-indigo-600">
        상태 및 이펙트 학습하기
      </h2>
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
