import React from 'react'
import Card from './Card'
const OurMission = (props) => {

  return (
    <div>
      <div className='our-mission1'>
        <div className='card1'>
          <div id='img'>
            <img src={props.image} alt="" srcset="" />
          </div>
          <div id='contentHeading'>
            <h3>{props.title}</h3>
            <div id='contentDisc'>
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
