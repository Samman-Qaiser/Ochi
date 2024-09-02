import React from 'react'
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
function Landing() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='landing'>
        <div className='text-con'>
          <h1>WE CREATE</h1>
          <div> <motion.div initial={{width:0}}  animate={{width:'9.6vw'}} transition={{ease:[0.76,0,0.24,1]}} className='small-img'></motion.div><h1>EYE OPENING</h1></div>
          <h1>PRESENTATIONS</h1>
        </div>
        <div className='landing-bottom'>
             <p>For public and private companies</p>
             <p>
             From the first pitch to IPO</p>
             <button className='btn'>Start the project</button>
        </div>
    </div>
  )
}

export default Landing