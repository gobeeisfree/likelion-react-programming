import { useState } from 'react';
import RootLayout from './layout/RootLayout';
import LearnStateAndEffects from './pages/LearnStateAndEffects';
import ProductList from './pages/ProductList';

function App() {
  const [inVisible] = useState(true);
  return (
    <div className="App">
      <RootLayout>
        <LearnStateAndEffects />
        {inVisible && <ProductList />}
      </RootLayout>
    </div>
  );
}
export default App;
