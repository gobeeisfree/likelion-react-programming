import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ProtectRoute from './components/ProtectRoute';
import RootLayout from './layout/RootLayout';
import PassingProps from './learn/1-passing-props';
import LiftingStateUp from './learn/2-lifting-state-up';
import PropsDrillingIssue from './learn/3-props-drilling-issue';
import ReactContextAPI1 from './learn/4-1-react-context-api';
import ReactContextAPI2 from './learn/4-2-seperation-react-context';
import RefExampleMemoValues from './learn/5-ref-1-memo-values';
import RefExampleReferencingDOM from './learn/6-ref-2-referencing-dom';
import GSAP_Animation from './learn/7-1-ref-3-gsap-animation';
import GSAP_Context from './learn/7-2-ref-3-gsap-context';
import FramerMotion_Animation from './learn/8-framer-motion';
import ComponentPropTypes from './learn/9-component-prop-types';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductEdit from './pages/ProductEdit';
import ProductList from './pages/ProductList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={true} />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="products" element={<ProductList />} />
      <Route
        path="product/edit/:productId"
        element={
          <ProtectRoute>
            <ProductEdit />
          </ProtectRoute>
        }
      />
      <Route path="contact" element={<Contact />} />
      {/* 학습 주제 */}
      <Route path="learn">
        <Route path="01" element={<PassingProps />} />
        <Route path="02" element={<LiftingStateUp />} />
        <Route path="03" element={<PropsDrillingIssue />} />
        <Route path="04/01" element={<ReactContextAPI1 />} />
        <Route path="04/02" element={<ReactContextAPI2 />} />
        <Route path="05" element={<RefExampleMemoValues />} />
        <Route path="06" element={<RefExampleReferencingDOM />} />
        <Route path="07/01" element={<GSAP_Animation />} />
        <Route path="07/02" element={<GSAP_Context />} />
        <Route path="08" element={<FramerMotion_Animation />} />
        <Route path="09" element={<ComponentPropTypes />} />
      </Route>
    </Route>
  )
);

export default router;
