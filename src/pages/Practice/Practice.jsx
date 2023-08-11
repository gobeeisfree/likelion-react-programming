// 스타일 파일 호출
import './Practice.css';

// 컴포넌트 호출
import DefinitionList from './DefinitionList';
import Controller from './parts/Controller';

/* -------------------------------------------------------------------------- */

function Practice() {
  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr />

      {/* 컴포넌트 추출(Extracting Component) */}
      <DefinitionList />

      {/* 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다. */}
      <Controller />
    </div>
  );
}

export default Practice;
