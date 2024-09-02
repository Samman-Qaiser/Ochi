import React from 'react'

function Cards() {
  return (
    <div className='cards-con'>
        <div style={{display:"flex",columnGap:"1rem",width:"50%",height:"70%",backgroundColor:"#004D43",borderRadius:"1rem",alignItems:"center",justifyContent:"center"}}>
             <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
        </div>
        <div style={{display:"flex",columnGap:"1rem",width:"50%",height:"70%"}}>
            <div style={{width:"50%",height:"100%",borderRadius:"1rem",backgroundColor:"#212121",alignItems:"center",justifyContent:"space-around",display:"flex",flexDirection:"column"}}>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
                  <h4 className='btn'>bootcamp alumini</h4>
            </div>
            <div style={{width:"50%",height:"100%",borderRadius:"1rem",backgroundColor:"black",alignItems:"center",justifyContent:"space-around",display:"flex",color:"whitesmoke",flexDirection:"column",}}>
                <h1>Clutch</h1>
                <h4 className='btn'>Rating clutch</h4>

            </div>
        </div>
    </div>
  )
}

export default Cards