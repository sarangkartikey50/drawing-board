import React, { lazy, Suspense } from 'react';
import CanvasBoard from 'containers/CanvasBoard';
import Menu from 'containers/Menu';
const Header = lazy(() => import('components/Header'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={'loading...'}>
        <Header />
        <CanvasBoard />
        <Menu />
      </Suspense>
    </div>
  );
}

export default App;
