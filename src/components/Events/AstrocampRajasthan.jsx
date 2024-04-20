import { useEffect } from 'react';
import React from 'react';
import Videostar from '../Videostar';
import ImageSliderSpiti from './ImageSlider/ImageSliderSpiti';
import ladakh2 from '../../assets/Ladakh/ladakh12.jpg'
import ladakh3 from '../../assets/Ladakh/ladakh5.jpg'
import ladakh1 from '../../assets/Ladakh/ladakh6.jpg'
import ladakh4 from '../../assets/Ladakh/ladakh8.jpg'
import ladakh5 from '../../assets/Ladakh/ladakh9.jpg'
import ladakh6 from '../../assets/Ladakh/ladakh10.jpg'
import ladakh7 from '../../assets/Ladakh/ladakh4.jpg'

import "../../fonts/stylesheet.css";
import {Link} from 'react-router-dom'



const slides = [
  { url: ladakh1, alt: "Ladakh One" },
  { url: ladakh2, alt: "Ladakh Two" },
  { url: ladakh3, alt: "Ladakh Three" },  
  { url: ladakh4, alt: "Ladakh Three" },  
  { url: ladakh5, alt: "Ladakh Five" },
  { url: ladakh6, alt: "Ladakh Six" },
  { url: ladakh7, alt: "Ladakh Seven" },
]
const Intro = () => {
  return (
    
    <section className= " w-full text-white py-16 z-10">
      <h1 className="lg:text-[50px]  lg:mb-4 mb-2 mt-2 md:mt-0  text-center text-white pt-3 top-5 text-2xl Grotesk-Black">Astrocamp Rajasthan</h1>
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
          <span className='ml-8 Grotesk-Black'>Join</span>  our 5-night, 6-day Astrocamp in Rajasthan, blending celestial wonders 
          with cultural immersion. Explore Jodhpur, Jaisalmer, and Udaipur, with guided tours and stargazing nights. Witness 
          the cosmos through telescopes, learn about constellations, and enjoy local cuisine. Stay in historical forts and desert 
          locations for a truly memorable experience. This Astrocamp offers a unique blend of cosmic marvels and cultural richness, 
          promising an unforgettable journey.
          </p>
          
           
            {/* <div className=' flex flex-row items-center justify-center gap-x-32 '>
              <div className='flex flex-col items-center justify-center'>
                <div className=' rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black '>
                  <span className='mt-4 text-lg text-black'> Batch 1: 4th to 12th May </span>
                </div>
                <div className='rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black '>
                  <span className='mt-4 text-lg text-black'> Batch 2: 1st to 8th June</span>
                </div>
              </div>

              <div className='flex flex-col  justify-center'>
                <div className=' rounded-md  px-1 py-2 mt-3 bg-white   Grotesk-Black'>
                  <span className='mt-4 text-lg  text-black '>Batch 3: 10th to 18th August</span>
                </div>
                <div className='rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black'>
                  <span className='mt-4 text-lg text-black'>Batch 4: 31st Aug to 8th Sept</span>
                </div>
              </div>
            </div> */}


            {/* <button className=" Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              Register Now
            </button> */}


            {/* <Link to = "https://forms.gle/2sWEeoD168Wx8cay9"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
              Dates will be announced soom
                </button>
            </Link> */}
          

          <h2 className=' text-red-500 w-[93%] text-xl'> Note: Stay tuned for the upcoming announcement of the date</h2>
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
      <span className='ml-8 Grotesk-Black'>Join</span>  our 5-night, 6-day Astrocamp in Rajasthan, blending celestial wonders 
          with cultural immersion. Explore Jodhpur, Jaisalmer, and Udaipur, with guided tours and stargazing nights. Witness 
          the cosmos through telescopes, learn about constellations, and enjoy local cuisine. Stay in historical forts and desert 
          locations for a truly memorable experience. This Astrocamp offers a unique blend of cosmic marvels and cultural richness, 
          promising an unforgettable journey.
          </p>
      </div>

      {/* <div className='flex flex-col'>
        <div>
            <div className=' rounded-md  px-1 py-2 mt-3 bg-black mr-32 '>
              <span className='mt-4 text-lg text-white'> Batch 1: 4th to 12th May</span>
            </div>
            <div className='rounded-md  px-1 py-2 mt-3 bg-black mr-32  '>
              <span className='mt-4 text-lg text-white'>Batch 2: 1st to 8th June</span>
            </div>
        </div>

        <div>
            <div className=' rounded-md  px-1 py-2 mt-3 bg-black mr-32 '>
              <span className='mt-4 text-lg text-white'>Batch 3: 10th to 18th August</span>
            </div>
            <div className='rounded-md  px-1 py-2 mt-3 bg-black mr-32  '>
              <span className='mt-4 text-lg text-white'>Batch 4: 31st Aug to 8th Sept</span>
            </div>
        </div>

      </div> */} 

      {/* <Link to = ""  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6  justify-center  rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                Register
                </button>
        </Link> */}

      <h2 className=' text-red-500 w-[93%]'> Note: Stay tuned for the upcoming announcement of the date</h2>
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
      
     <h2 className='font-bold  md:text-[35px] text-4xl '>Itinerary Details</h2>
      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md Grotesk-Black  text-black'>Day 1: Arrival in Jodhpur</h2>
        </div>
        <div className='leading-4'>
         
          <li className='list-disc leading-6 py-2'>Arrive in Jodhpur, the "Blue City" of Rajasthan.</li>
          <li className='list-disc leading-6 py-2'>Check in to your hotel and relax after your journey.</li>
          <li className='list-disc leading-6 py-2'>Afternoon visit Umaid Bhawan Palace, which houses a
              private astronomical observatory.</li>
          <li className='list-disc leading-6 py-2'>Evening visit to Mehrangarh Fort for panoramic sunset
            views and basic stargazing.</li>
            
        </div>
      </div>

      {/*Day 2*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'> Day 2: Jodhpur to Jaisalmer</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Tranfer to our Camping site. Evening visit to the Sam Sand Dunes for a Camel ride, Jeep safari</li>
          <li className='list-disc leading-6 py-2'>Come back to Camps for Rajasthani folk music, DJ Garba followed by dinner and spend the night watching some amazing deep-sky objects through the Telescopes.</li>
        </div>
      </div>

      {/*Day 3*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 3:Longewala border</h2>
        </div>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>After breakfast head out to Longewala border where 1971 INDO-PAK war was fought .</li>
          <li className='list-disc leading-6 py-2'> Visit the Tanot mata mandir and war memorial.</li>
          <li className='list-disc leading-6 py-2'>Evening visit to the Sam Sand Dunes for Stargazing.</li>
          <li className='list-disc leading-6 py-2'>Post dinner get ready for midnight sky & Astrophotography. </li>
        
        </div>
      </div>


      {/*Day 4*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 4: Jaisalmer Sightseeing</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Have a early checkout after breakfast to Jaisalmer sightseeing.</li>
          <li className='list-disc leading-6 py-2'>Visit to Golden Jaisalmer Fort, Nathmal Ki Haveli and Gadisar Lake.</li>
          <li className='list-disc leading-6 py-2'>Catch a bus for Udaipur in evening.</li>
        </div>
      </div>

      {/*Day 5*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 5: Udaipur sightseeing</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2  '>Morning: Arrive in Udaipur and check into your hotel.</li>
          <li className='list-disc leading-6 py-2'> Afternoon: Visit the City Palace, a magnificent royal residence
            with a museum and stunning views of Lake Pichola.</li>
          <li className='list-disc leading-6 py-2'>Evening: Visit Solar observatory, Lake Palace and Jag Mandir.</li>
          <li className='list-disc leading-6 py-2'>Dinner at the hotel</li>

        </div>
      </div>



      {/*Day 6*/}

      <div>
        <div className='border border-gray-400  mt-5  bg-[#ADD8E6]  '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 6: Udaipur to Jodhpur</h2>
        </div>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Morning: After breakfast visit Gulab baug.</li>
          <li className='list-disc leading-6 py-2'>Afternoon : Catch a bus for Jodhpur.</li>
          <li className='list-disc leading-6 py-2'>Evening : Say goodbye, exchange memories as the trip ends at
            Jodhpur.</li>
        
        </div>
      </div>

    </section>
  );
};

const Inclusion = () =>{
  return(
    <div  >


      <section className='sm:w-9/12 w-11/12 mx-auto py-8 Grotesk-Normal'>
        <h2 className='font-bold  md:text-[35px]  text-3xl uppercase bg-[#ADD8E6] p-2 text-black  rounded-md'>Inclusion</h2>
        <div className='leading-4'>

        <li className='list-disc leading-6 py-2'>Star gazing expert with a telescope for the entire trip.</li>  
        <li className='list-disc leading-6 py-2'>Standard A/C double/ triple sharing Hotel/Tent accommodation</li> 
        <li className='list-disc leading-6 py-2'> Food planning: MAP (breakfast & dinner)</li> 
        <li className='list-disc leading-6 py-2'>Cab/Tempo traveller for transfers and sightseen</li> 
        <li className='list-disc leading-6 py-2'>Camel ride, DJ Garba, Cultural program at Jaisalmer</li> 
        <li className='list-disc leading-6 py-2'>Intercity Transfers by Bus</li> 
  
        </div>
      </section>

      <section className='sm:w-9/12 w-11/12 mx-auto Grotesk-Normal'>
        <h2 className='font-bold    md:text-[35px] text-3xl  p-2  rounded-md bg-[#ADD8E6] text-black'>EXCLUSIONS</h2>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Lunch or any food not mentioned in the itinerary</li> 
          <li className='list-disc leading-6 py-2'>Any Personal expenses, tips or portage</li> 
          <li className='list-disc leading-6 py-2 '>Fight/Train tickets to & fro Jodhpur.</li> 
          <li className='list-disc leading-6 py-2'>Extra activities charges yourself (ATV/Para-motoring)</li> 
          <li className='list-disc leading-6 py-2'>Any charge like extra accommodation, route & date change incurred due to
              unforeseen & unavoidable conditions
          </li> 
          <li className='list-disc leading-6 py-2'>Any other cost due to unforeseen circumstances including medical emergencies and
              natural calamities which are out of control
          </li> 
          <li className='list-disc leading-6 py-2'> Anything not mentioned in the inclusions</li>
        
        </div>
      </section>

      {/*Cancelation Policy*/}
      <div className=' sm:w-9/12 w-11/12 mx-auto py-8 Grotesk-Normal'>
          <h2 className='font-bold  md:text-[35px] text-3xl uppercase bg-[#ADD8E6]  text-black p-2  rounded-md'>CANCELLATION POLICY</h2>
          
          <li className='list-disc leading-6 py-2'>Initial booking amount is non - refundable</li>
          <li className='list-disc leading-6 py-2'>50% of the total amount will be given as a refund for cancellation made 30 days
            before the start of the trip
          </li>
          <li className='list-disc leading-6 py-2'>25% of the total amount will be given as a refund for cancellation made 15-30 days
            before the start of the trip
          </li>
          <li className='list-disc leading-6 py-2'>No refund will be given for a cancellations made 0-15 days before the start of the
            trip 
          </li>
          <li className='list-disc leading-6 py-2'>100% refund will be given if tripcanceledlled by the operator</li>
          
      </div>

    </div>
  )
}

const TicketCosting = () => {
  return (
    
    <div className=' sm:w-9/12 w-11/12 mx-auto py-2 text-justify Grotesk-Normal' >
      <h2 className='font-bold  md:text-[35px] text-3xl uppercase bg-[#ADD8E6] text-black p-2  rounded-md'>COSTING PER PERSON</h2>
      
      <table className="w-full table-auto border-collapse   mt-10">
      
        <tbody className=''>
          <tr>
            <td className="border border-white px-4 py-2  text-center w-1/2 text-[21px] ">Triple Sharing</td>
            <td className="border border-white px-4 py-3  text-center  text-[20px]"> ₹ 17,000</td>
          </tr>
          <tr>
            <td className="border  border-white px-4 py-3  text-center w-1/2 text-[20px]">Twin Sharing</td>
            <td className="border border-white px-4 py-3 text-center  text-[20px]">₹ 19,000</td>
            
          </tr>
          <tr>
            <td className="border border-white px-4 py-3 text-center text-[20px] w-1/2">Group Discount for 5 or more people on triple sharing</td>
            <td className="border border-white px-4 py-3 text-center  text-[20px]">₹ 15,000</td>
            
          </tr>
        </tbody>
    
      </table>
    </div>
  );
};


const RegistrationButton = () => {
  return (
    <section className="py-8 text-center">
     {/* <Link to = "https://forms.gle/8AxLS1wJC2PbjK5y9"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                  Register Now
                </button>
            </Link>
      */}
    </section>
  );
};

const AstrocampRajasthan = () => {

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
        <Details />
        <Inclusion/>
        {/* <TicketCosting/> */}
        <RegistrationButton />
      </div>
    </div>
  );
};

export default AstrocampRajasthan;
