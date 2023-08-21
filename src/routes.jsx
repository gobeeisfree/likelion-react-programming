import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Contact from './pages/Contact';

// 구버전 처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
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
