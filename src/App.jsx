import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

// {/* 홈 페이지 */}
// {/* 소개 페이지 */}
// {/* 제품 목록 페이지 */}
// {/* 의뢰 페이지 */}

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Home />
        {/* <About />
        <Contact />
        <Products /> */}
      </RootLayout>
    </div>
  );
}

export default App;