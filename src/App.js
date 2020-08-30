import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import CanvasBoard from 'containers/CanvasBoard';
import Menu from 'containers/Menu';
import Header from 'components/Header';

function App() {
  const { hue, saturation, lightness } = useSelector(
    (state) => state.menu.color
  );
  return (
    <div
      style={{
        '--selectedColor': `hsl(${hue} ${saturation}% ${lightness}%)`,
        '--hue': hue,
        '--saturation': `${saturation}%`,
        '--lightness': `${lightness}%`,
      }}
    >
      <Suspense fallback={'loading...'}>
        <Header />
        <CanvasBoard />
        <Menu />
      </Suspense>
    </div>
  );
}

export default App;
