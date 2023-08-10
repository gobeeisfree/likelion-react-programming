import RootLayout from "./layout/RootLayout";
import * as Utils from "./utils";

console.log(Utils);

// import Home from './pages/Home';
// import About from './pages/About';

// {/* 홈 페이지 : index.html */}
// {/* 소개 페이지 : about.html */}
// {/* 제품 목록 페이지 : products.html */}
// {/* 의뢰 페이지 : contact.html */}

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* <Home /> */}
        <output style={{ display: "block" }}>
          {/* function composition */}
          {/* {currencyKR(numberWithComma(getRandom(1920999)))} */}
        </output>
        {/* <output>{getRandomMinMax()}</output> */}
        <output>
          {Utils.currencyKR(Utils.numberWithComma(99870 + 19000 + 9400 + 870))}
        </output>
      </RootLayout>
    </div>
  );
}

export default App;
