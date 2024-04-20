import { useEffect } from 'react';
import React from 'react';
import Videostar from '../Videostar';
import ImageSliderSpiti from './ImageSlider/ImageSliderSpiti';
import { FaCalendarDays } from "react-icons/fa6";

import pune1 from '../../assets/Pune/kamshet1.jpg'
import pune2 from '../../assets/Pune/kamshet2.jpg'
import pune3 from '../../assets/Pune/kamshet3.jpg'
import pune4 from '../../assets/Pune/kamshet4.jpg'
import pune5 from '../../assets/Pune/kamshet5.jpg'



import "../../fonts/stylesheet.css";
import {Link} from 'react-router-dom'
import { FcCalendar } from 'react-icons/fc';



const slides = [
  { url: pune1, alt: "pune One" },
  { url: pune2, alt: "Kutch Two" },
  { url: pune3, alt: "KutchThree" },  
  { url: pune4, alt: "ahanu Three" },  
  { url: pune5, alt : "pune five" },

]
const Intro = () => {
  return (
    
    <section className= " w-full text-white py-16 z-10">
      <h1 className="lg:text-[50px]  lg:mb-4 mb-2 mt-2 md:mt-0  text-center text-white pt-3 top-5 text-2xl Grotesk-Black">Astrocamp Pune</h1>
      <div className = "bg-blue-300 h-[3px] lg:w-[300px] lg:mt-2 mx-auto w-[200px] rounded-lg "></div>
      <div className='flex  xl:flex-row  flex-col overflow-x-hidden gap-8 mt-10'>
        <div className='xl:w-[48%] w-[96%]  md:ml-5 lg:p-1 p-3  mr-[7px] md:mr-0  md:h-fit'>
         <div>
           <ImageSliderSpiti classname = '' slides = {slides} dots = {false} />
         </div>
        {/* <img src={AstrocampSpiti1} alt="Astrocamp in Spiti Valley" className="rounded-lg shadow-lg mb-6  object-cover h-[500px]" /> */}
        </div>

        <div className='xl:w-[45%]  w-[96%] flex flex-col  mt-8 text-neutral-400 font-bold ml-5  lg:visible '>
          <p className="xl:text-[21px] text-[25px] xl:leading-7 md:leading-10 Grotesk-Black mr-8 text-justify mb-4 ">
          <span className='ml-8 Grotesk-Black'>Nestled</span> in the Sahyadri mountains, Astrocamp Pune is a 
          celestial wonderland where stardust meets science. Whether you’re an amateur astronomer, space enthusiast, or simply 
          gaze at the night sky in awe, Astrocamp Pune offers something extraordinary. Imagine lying on a grassy hill surrounded
           by historic forts, telescopes unveiling distant galaxies and nebulae under the Sahyadri sky. Dive into the cosmos with 
           expert-led sky sessions, igniting a lifelong passion for space exploration.
          </p>
          
           
            <div className=' flex flex-row gap-x-32  justify-center '>
              <div className='flex flex-col items-center justify-center'>
                <div className=' rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black flex  justify-center items-center gap-2  '>
                 <FaCalendarDays className=' text-black text-4xl'/>
                  <span className='  text-3xl text-black '> 27th April </span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className=' rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black flex  justify-center items-center gap-2  '>
                 <FaCalendarDays className=' text-black text-4xl'/>
                  <span className='  text-3xl text-black '> 4th May </span>
                </div>
              </div>
            </div>


            {/* <button className=" Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              Register Now
            </button> */}


            <Link to = "https://forms.gle/MuoMzwq1oFajKvjr9"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                Register
              </button>
            </Link>
          

        
        </div>
      </div>
    </section>
  );
};

const Batchdetails = () =>{
  return(
    <div className=' w-[100%]  flex flex-col  mt-8 text-black font-bold ml-4  sm:hidden visible'>
      <div className='w-[93%]'>
      <p className="text-[18px] leading-7 text-neutral-400  Grotesk-Black lg:p-0 p-1 text-justify mb-4 ">
            <span className='ml-8 Grotesk-Black'>Nestled</span> in the Sahyadri mountains, Astrocamp Pune is a 
                celestial wonderland where stardust meets science. Whether you’re an amateur astronomer, space enthusiast, or simply 
                gaze at the night sky in awe, Astrocamp Pune offers something extraordinary. Imagine lying on a grassy hill surrounded
                by historic forts, telescopes unveiling distant galaxies and nebulae under the Sahyadri sky. Dive into the cosmos with 
                expert led sky sessions, igniting a lifelong passion for space exploration.
      </p>
      </div>

      <div className='flex flex-col'>
        <div>
            <div className=' rounded-md  px-1 py-2 mt-3 bg-black mr-32 flex flex-row gap-3 items-center  '>
            <FaCalendarDays className=' text-white text-xl '/>
              <span className=' text-xl font-bold text-white'> 27th April</span>
            </div>
        </div>
        <div>
            <div className=' rounded-md  px-1 py-2 mt-3 bg-black mr-32 flex flex-row gap-3 items-center  '>
            <FaCalendarDays className=' text-white text-xl '/>
              <span className=' text-xl font-bold text-white'> 4th May</span>
            </div>
        </div>

      </div> 

      <Link to = "https://forms.gle/MuoMzwq1oFajKvjr9"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-2 px-6  justify-center  rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                Register
                </button>
        </Link>

      
      <div class="h-0 w-full  text-center border-gray-500 my-5">
        <span class="inline-block w-2 h-2 mx-4 bg-gray-500 rounded-full"></span>
        <span class="inline-block w-2 h-2 mx-4 bg-gray-500 rounded-full"></span>
        <span class="inline-block w-2 h-2 mx-4 bg-gray-500 rounded-full"></span>
        <span class="inline-block w-2 h-2 mx-4 bg-gray-500 rounded-full"></span>
    </div>

      
          
    </div>
  )
}

const Details = () => {
  return (
    <section className=' sm:w-9/12 w-11/12 mx-auto py-8  Grotesk-Normal lg:px-0 px-2 top-10 text-justify'>
      
     <h2 className='font-bold  md:text-[35px] text-4xl '> Event Details</h2>
      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md Grotesk-Black  text-black'>Overview of the Event</h2>
        </div>
        <div className='leading-4'>
         
        <li className='list-disc leading-6 py-2'>Place: Velhe (Just a 2-hour drive from Pune)</li>
        <li className='list-disc leading-6 py-2'>Camping with tent stay (only foam sheets will be provided)</li>
        <li className='list-disc leading-6 py-2'>Stargazing and Telescopic observations of Moon, Planets, Galaxies, and many more celestial objects</li>
        <li className='list-disc leading-6 py-2'>Fun activities and games</li>
        <li className='list-disc leading-6 py-2'>Sanitized stay with Social distancing regulations</li>
        <li className='list-disc leading-6 py-2'>Homely Veg, Non-Veg & Jain Food, breakfast, and snacks</li>
        <li className='list-disc leading-6 py-2'>Clean & Hygienic western washrooms</li>

        </div>
      </div>

      {/*Day 2*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'> Itinerary </h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>5:00 PM: Arrival at campsite</li>
          <li className='list-disc leading-6 py-2'>5:30 PM: Snacks and tea</li>
          <li className='list-disc leading-6 py-2'>6:00 PM: Tent building activity</li>
          <li className='list-disc leading-6 py-2'>6:30 PM: Introduction to Astronomical Telescopes</li>
          <li className='list-disc leading-6 py-2'>7:00 PM: Planet Observations, Naked eye observation of man-made satellites</li>
          <li className='list-disc leading-6 py-2'>7:30 PM: Introduction to Astronomy & Stargazing</li>
          <li className='list-disc leading-6 py-2'>9:00 PM: Telescopic observation</li>
          <li className='list-disc leading-6 py-2'>10:00 PM: Dinner</li>
          <li className='list-disc leading-6 py-2'>11:00 PM: Introduction to Astrophotography</li>
          <li className='list-disc leading-6 py-2'>12:00 AM: Tea time</li>
          <li className='list-disc leading-6 py-2'>12:30 AM: Midnight sky session</li>
          <li className='list-disc leading-6 py-2'>2:00 AM: Telescopic observation</li>
          <li className='list-disc leading-6 py-2'>2:30 AM: Guitar session, Campfire games, and activities</li>
          <li className='list-disc leading-6 py-2'>4:00 AM: Lights off</li>
          <li className='list-disc leading-6 py-2'>7:00 AM: Wake-up call</li>
          <li className='list-disc leading-6 py-2'>8:00 AM: Tea and breakfast</li>
          <li className='list-disc leading-6 py-2'>9:00 AM: Departure from campsite</li>
        </div>
      </div>


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'> Things to carry</h2>
        </div>
        <div className='leading-4'>
         
        <li className='list-disc leading-6 py-2'>Water bottle</li>
        <li className='list-disc leading-6 py-2'>Mosquito repellent</li>
        <li className='list-disc leading-6 py-2'>Sanitizer</li>
        <li className='list-disc leading-6 py-2'>Shoes</li>
        <li className='list-disc leading-6 py-2'>Warm clothes, Blanket, Head cap to protect from cold weather.</li>
        <li className='list-disc leading-6 py-2'>Personal Torch and medicine (if any)</li>
        <li className='list-disc leading-6 py-2'>Anything to munch during the stay</li>
        </div>
      </div>


    </section>
  );
};

const Inclusion = () =>{
  return(
    <div  >


      <section className='sm:w-9/12 w-11/12 mx-auto py-8 Grotesk-Normal'>
        <h2 className='font-bold  md:text-[20px]  text-3xl  bg-[#ADD8E6] p-2 text-black  rounded-md'>Inclusion</h2>
        <div className='leading-4'>

      
          <li className='list-disc leading-6 py-2'>Includes 3 teas, breakfast, snacks, dinner</li>
          <li className='list-disc leading-6 py-2'>Entry fee and camping tent for stay, with 3 people sharing per tent</li>
          <li className='list-disc leading-6 py-2'>Couples can opt for a 2-person tent with an additional charge of Rs 200 per person</li>
       
    


  
        </div>
      </section>

      <section className='sm:w-9/12 w-11/12 mx-auto Grotesk-Normal'>
        <h2 className='font-bold    md:text-[20px] text-3xl  p-2  rounded-md bg-[#ADD8E6] text-black'>Exclusion</h2>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Any Beverages or any food not mentioned in the itinerary</li> 
          <li className='list-disc leading-6 py-2'> Travel till Dahanu</li> 
        </div>
      </section>

      {/*Cancelation Policy*/}
      <div className=' sm:w-9/12 w-11/12 mx-auto py-8 Grotesk-Normal'>
          <h2 className='font-bold  md:text-[20px] text-3xl  bg-[#ADD8E6]  text-black p-2  rounded-md'>Cancellation Policy </h2>
          
          <li className='list-disc leading-6 py-2'>Full refund if cancelled 4 days prior to event.</li>
          <li className='list-disc leading-6 py-2'>50% refund if cancelled 2 days prior to event.</li>
          <li className='list-disc leading-6 py-2'>No refund if cancelled 1 day prior or on the same day of the event.</li>
      </div>

    </div>
  )
}

const TicketCosting = () => {
  return (
    
    <div className=' sm:w-9/12 w-11/12 mx-auto py-2 text-justify Grotesk-Normal' >
      <h2 className='font-bold  md:text-[20px] text-[20px]  bg-[#ADD8E6] text-black p-2  rounded-md'>Costing Per Person</h2>
      
      <table className="w-full table-auto border-collapse   mt-10">
      
        <tbody className=''>
          <tr>
            <td className="border border-white px-4 py-2  text-center w-1/2 text-[21px] ">Astrocamp Cost </td>
            <td className="border border-white px-4 py-3  text-center  text-[20px]"> ₹ 1,400</td>
          </tr>
          
        </tbody>
    
      </table>
    </div>
  );
};


const RegistrationButton = () => {
  return (
    <section className="py-8 text-center">
     <Link to = "https://forms.gle/MuoMzwq1oFajKvjr9"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                  Register Now
                </button>
            </Link>
     
    </section>
  );
};

const AstrocampPune = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className=' overflow-x-hidden  justify-center items-center'>

      <div className='relative sm:w-full w-[104%]  overflow-x-hidden overflow-y-hidden  '>
        <Videostar/>
        <div className='absolute z-20 top-6 mb-3'>
          <Intro />
        </div>
      </div>

      <div className=' '>
        <Batchdetails/>
        <TicketCosting/>
        <Details />
        <Inclusion/>
        <RegistrationButton />
      </div>
    </div>
  );
};

export default AstrocampPune;
