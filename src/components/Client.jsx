import React from 'react'
function Test(props){
    return(
        <>
            <div style={{display:'flex',justifyContent:"space-between",width:"100%",height:"10vh",padding:"1rem 2rem",boxSizing:"border-box",borderBottom:"1px solid #B2B2B2",alignItems:"center"}}>
                <p>{props.first}</p>
                <p>{props.name}</p>
                <p>Read</p>
            </div>
        </>
    )
}
function Client() {
  return (
    <div className='Client-con'>
        <h1>Clients' Review</h1>
        <div className='testimonial'>
              <div style={{width:"50%",height:"100%",display:"flex",justifyContent:"space-between"}}>
                <div style={{width:"50%",height:"100%"}}>
                    <p>Karman ventures</p>
                </div>
                <div style={{width:"50%",height:"100%"}}>
                   <p>Services</p>
                   <h4 className='btn'>Investor Deck</h4>
                   <h4 className='btn'>sales deck</h4>
                </div>
              </div>
              <div style={{width:"30%",height:"100%",display:"flex",justifyContent:"space-between",flexDirection:"column",rowGap:"1rem"}}>
               <p>
                William Barness
               </p>
               <div className='small-img'></div>
               <p>
               They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
        </div>
        <div className='test2'>
            <Test first="Planetly" name="David Budde"/>
            <Test first="Workiz Ezzy" name="Nina Walloch" />
            <Test first="Premium Blend" name="Tomer Levy" />
            <Test first="Blank Book" name="Ellen Kim" />
            <Test first="OrderLion" name="Brendan Goss" />
            <Test first="Planetly" name="Raff Labrie" />
            <Test first="Premium Blend" name="Stefan Strohmer" />
            <Test first="Workiz Ezzy" name="Jaci Smith" />
        </div>
    </div>
  )
}

export default Client