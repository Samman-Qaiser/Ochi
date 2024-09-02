import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
function Page3() {
  return (
    <div  className='page3' data-scroll data-scroll-section data-scroll-speed="-0.2" >
        <div className='page3-box'>
            <p style={{fontSize:"3rem"}}>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>
        </div>
        <div className='page3-box page3-bt'>
          <div className='pg3-left'>
            <p>What you can expect:</p>
          </div>
          <div className='pg3-right'>
            <p>
               
           We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
            </p>
            <p>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className='pg3-social'>
             {['Instagram','Facebook','LinkedIN','Behance'].map((item,index)=>{
                return (
                    <>
                        <li>{item}</li>
                    </>
                )
             })}
          </div>
        </div>
    </div>
  )
}

export default Page3