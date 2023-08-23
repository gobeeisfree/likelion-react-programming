import { Outlet, Link } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout({ displaySideMenu = false }) {
  return (
    <>
      <HeaderBar />
      <main className="flex gap-4 p-5">
        {displaySideMenu && (
          <nav className="min-w-[100px] bg-slate-100 px-4 py-3">
            <h3 className="sr-only">학습 내비게이션 메뉴</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/learn/01">Props 전달</Link>
              </li>
              <li>
                <Link to="/learn/02">상태 끌어올리기</Link>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
