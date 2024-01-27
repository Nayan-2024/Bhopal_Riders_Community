import React from 'react'
import sponsor1 from './images/logo1.png'
import './index.css'
const sponsor = () => {
  return (
    <div className='sponsor_comp'>
      <h1>Support Our <span className="brand">Sponsors</span> </h1>
      <div className="sponsor_images">
        <img src={sponsor1} alt="" />
        <img src={sponsor1} alt="" />
        <img src={sponsor1} alt="" />
        <img src={sponsor1} alt="" />
      </div>
    </div>
  )
}

export default sponsor
