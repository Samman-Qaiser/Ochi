import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Page5() {
  const animationControls1 = useAnimation();
  const animationControls2 = useAnimation();

  function handleHover(index) {
    return () => {
      if (index === 0) {
        animationControls1.start({ y: "0" });
      } else {
        animationControls2.start({ y: "0" });
      }
    };
  }

  function handleHoverEnd(index) {
    return () => {
      if (index === 0) {
        animationControls1.start({ y: "150%" });
      } else {
        animationControls2.start({ y: "150%" });
      }
    };
  }

  return (
    <div className='page5'>
      <h1>Featured Projects</h1>
      <div className='pg5-con'>
        <div 
          className='pg5-left'  >
          <h1>
            {'FYDE'.split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={animationControls1}
                transition={{ ease: "easeInOut", delay: index * 0.1 }} 
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <p>FYDE</p>
          <motion.div    onHoverStart={handleHover(0)} 
          onHoverEnd={handleHoverEnd(0)} className='pg5-main'>
            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="FYDE Project" />
          </motion.div>
          <div className='lower'>
            {['audit', 'copywriting', 'salesbook', 'salesdesign', 'slides design'].map((item, index) => (
              <h3 key={index} className='btn'>{item}</h3>
            ))}
          </div>
        </div>
        <div className='pg5-right' >
  
          <h1>
            {'VISE'.split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={animationControls2} 
                transition={{ ease: "easeInOut", delay: index * 0.1 }} 
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <p>VISE</p>
          <motion.div      
          onHoverStart={handleHover(1)} 
          onHoverEnd={handleHoverEnd(1)} className='pg5-main'>
            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="VISE Project" />
          </motion.div>
          <div className='lower'>
            {['agency', 'company presentation'].map((item, index) => (
              <h3 key={index} className='btn'>{item}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
