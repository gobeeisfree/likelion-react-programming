import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
// import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PassingProps from './learn/1-passing-props';
import LiftingStateUp from './learn/2-lifting-state-up';
import PropsDrillingIssue from './learn/3-props-drilling-issue';
import ReactContextAPI1 from './learn/4-1-react-context-api';
import ReactContextAPI2 from './learn/4-2-seperation-react-context';
import RefExampleMemoValues from './learn/5-ref-1-memo-values';
import RefExampleReferencingDOM from './learn/6-ref-2-referencing-dom';
import GSAP_Animation from './learn/7-ref-3-gsap-animation';
import FramerMotion_Animation from './learn/8-framer-motion-declaration-animation';

// 구버전 처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      {/* <Route path="products" element={<Products />} /> */}
      <Route path="products" element={<ProductList />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
      {/* 학습 주제 */}
      <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} />
      <Route path="learn/03" element={<PropsDrillingIssue />} />
      <Route path="learn/04/01" element={<ReactContextAPI1 />} />
      <Route path="learn/04/02" element={<ReactContextAPI2 />} />
      <Route path="learn/05" element={<RefExampleMemoValues />} />
      <Route path="learn/06" element={<RefExampleReferencingDOM />} />
      <Route path="learn/07" element={<GSAP_Animation />} />
      <Route path="learn/08" element={<FramerMotion_Animation />} />
    </Route>
  )
);

// 최신 방법(기본 방법)
// 배열 → 객체
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'products', element: <Products /> },
//       { path: 'contact', element: <Contact /> },
//     ],
//   },
// ]);

export default router;
