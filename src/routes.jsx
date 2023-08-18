import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Router Object
// 경로(path), 요소(element ← <Component />)
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

console.log(router);

export default router;
