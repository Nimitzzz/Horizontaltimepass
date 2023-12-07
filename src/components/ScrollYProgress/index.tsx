import { motion, useTransform, useMotionValue, animate } from 'framer-motion';
import React from 'react';

export default function ScrollYProgress() {
  let x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  React.useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000,
      onStop: ()=> console.log(x)
    })
  
    return controls.stop
  })

  return (
      <motion.div drag="x" style={{ x, opacity, backgroundColor: 'crimson', width: '40px', height: '40px' } } />
  );
}
