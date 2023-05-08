import React from 'react'

const Herosection = () => {
  return (
    <div>
        <div className='w-full h-screen herocection flex justify-center items-center' >
      <div className="w-4/5 h-4/5 box p-10 ">
        <div className="left-box">
        <div className="text-title">
         <h1 className='title' >DISCOVER WHAT OUR FOUNDATION GOES WITH ITS INFLUNCE</h1>
         <button className='explore-btn' >Explore All Work</button>
        </div>
        </div>
     
        <div className="child">
            <img className='child-img' src="img/child.png" alt="" />
        </div>
      </div>
   </div>
    </div>
  )
}

export default Herosection
