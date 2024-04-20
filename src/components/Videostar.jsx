import React from 'react'
import starvideo from '../assets/Spiti/StarRotation.mp4'

const Videostar = () => {
  return (
    <div className=' relative'>
      <video className=" w-full xl:h-[110vh] md:h-[1300px] h-[500px] object-fill  opacity-80" autoPlay loop muted
        data-setup='{"playbackRates": [0.2]} '>
        <source src= {starvideo} type="video/mp4" className=''/>
        Your browser does not support the video tag.
      </video>
      {/* <div className=''>
        <h2>Astrocamp Spiti valley</h2>
      </div> */}
    </div>
  )
}

export default Videostar;