import * as React from 'react';
import { motion, useViewportScroll } from 'framer-motion';

const FMHorizontalScroll = () => {
  const ref = React.useRef();
  React.useEffect(() => {
    const onWheel = (e) => {
      ref.current.scrollLeft += e.deltaY;
    };
    ref.current.addEventListener('wheel', onWheel, {
      passive: true,
      smooth: true,
    });
    return () => {
      ref.current.removeEventListener('wheel', onWheel, { passive: true });
    };
  }, []);
  const variants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: 0.75,
      opacity: 0.5,
      transition: {
        delay: 0.5,
        ease: 'linear',
      },
    },
  };
  return (
    <main ref={ref}>
      <motion.section
        variants={variants}
        transition={{ type: 'inertia', velocity: 50 }}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Beep
        </motion.h1>
      </motion.section>
      <motion.section
        variants={variants}
        transition={{ type: 'inertia', velocity: 50 }}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Beep
        </motion.h1>
      </motion.section>
      {/* <motion.section variants={variants}>
        <motion.div className="img-wrapper">
          <img
            src="https://source.unsplash.com/random?woman"
            className="img"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          />
        </motion.div>
      </motion.section> */}
      <motion.section>
        <motion.div />
      </motion.section>
      <motion.section>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          The End
        </motion.h1>
      </motion.section>
    </main>
  );
};

export default FMHorizontalScroll;
