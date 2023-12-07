import React from 'react';
import './style.scss';
import FMHorizontalScroll from './components/FramerMotion';
import RSHorizontalScroll from './components/ReactSpring';
import ScrollYProgress from './components/ScrollYProgress';
import SkewSmooth from './components/SkewSmooth';

export default function App() {
  return (
    <>
    {/* <div>
      <ScrollYProgress />
    </div> */}
      {/* <div>
        <SkewSmooth />
      </div> */}
      <div>
        <FMHorizontalScroll />
      </div>
      {/* <div><RSHorizontalScroll /></div> */}
    </>
  );
}
