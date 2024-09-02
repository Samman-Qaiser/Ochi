import React from 'react'
import { useEffect,useState } from 'react'
import Eyes from './Eyes';
import LocomotiveScroll from 'locomotive-scroll';

function Cartoon() {
  
  return (
    <div className='Cartoon' >
       <div className='Cartoon-con' >
           <div className='eyes'>
            <Eyes />
            <Eyes />
           </div>
       </div>
        
    </div>
  )
}

export default Cartoon