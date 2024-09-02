import React from 'react'
import { motion } from 'framer-motion';
import './style.css'
import LocomotiveScroll from 'locomotive-scroll';
function Marquee() {
  return (
    <div className='marquee-con' data-scroll data-scroll-section data-scroll-speed="0.1" >
        <div>
            <motion.h1 initial={{x:0}} animate={{x:'-100%'}}  transition={{
                        duration: 8,   
                        ease: 'linear',  
                        repeat: Infinity,
                
                    }}>&nbsp;WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:'-100%'}}  transition={{
                        duration: 8,    
                        ease: 'linear',  
                        repeat: Infinity, 
                   
                    }}>&nbsp;WE ARE OCHI</motion.h1>
        </div>

    </div>
  )
}

export default Marquee