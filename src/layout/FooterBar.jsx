import { useState } from 'react';

function FooterBar() {
  // 현재(오늘) 년도를 화면에 출력하는 상태를 설정
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="grid place-content-center bg-slate-200 p-5">
      <small className="text-base text-slate-700">
        Copyright {currentYear} &copy; 모든 저작권은 이듬(EUID)에 있습니다.
      </small>
    </footer>
  );
}

export default FooterBar;
