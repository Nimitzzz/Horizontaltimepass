import * as React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const RSHorizontalScroll = () => {
  const ref = React.useRef();
  React.useEffect(() => {
    const refCurrent = ref.current.container.current;
    console.log(ref.current.container.current);
    const onWheel = (e) => {
      ref.current.container.current.scrollLeft += e.deltaY;
    };
    refCurrent.addEventListener('wheel', onWheel, {
      passive: true,
    });
    return () => {
      refCurrent.removeEventListener('wheel', onWheel, {
        passive: true,
      });
    };
  }, []);
  return (
    <>
      <Parallax horizontal pages={2} style={{ top: '0', left: '0' }} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#ff6d6d' }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default RSHorizontalScroll;
