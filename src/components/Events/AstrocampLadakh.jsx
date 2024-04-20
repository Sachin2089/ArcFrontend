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
      <h1 className="lg:text-[50px]  lg:mb-4 mb-2 mt-2 md:mt-0  text-center text-white pt-3 top-5 text-2xl Grotesk-Black">Astrocamp Ladakh</h1>
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
          <span className='ml-8 Grotesk-Black'>Explore</span> Hanle and Ladakh, where celestial wonders meet Himalayan majesty. Start in Leh, 
          Ladakh's capital, with ancient monasteries and sunsets. Journey through Nubra Valley, cross Khardung La Pass, and marvel at sand dunes
           and Diskit Monastery. At Hanle, visit the Indian Astronomical Observatory for stargazing. Immerse in Ladakh's culture, savor local cuisine, 
           and visit Hemis, Thiksey, and Shey monasteries. Experience the magic of Hanle and Ladakh in an unforgettable adventure.
          </p>
          
           
            <div className=' flex flex-row items-center justify-center gap-x-32 '>
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
            </div>


            {/* <button className=" Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              Register Now
            </button> */}


            <Link to = "https://forms.gle/XrBtmJSrS6aPWxyz7"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                  Register Now
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
          <span className='ml-8 Grotesk-Black'>Explore</span> Hanle and Ladakh, where celestial wonders meet Himalayan majesty. Start in Leh, 
          Ladakh's capital, with ancient monasteries and sunsets. Journey through Nubra Valley, cross Khardung La Pass, and marvel at sand dunes
           and Diskit Monastery. At Hanle, visit the Indian Astronomical Observatory for stargazing. Immerse in Ladakh's culture, savor local cuisine, 
           and visit Hemis, Thiksey, and Shey monasteries. Experience the magic of Hanle and Ladakh in an unforgettable adventure.
        </p>
      </div>

      <div className='flex flex-col'>
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

      </div>

      <Link to = "https://forms.gle/XrBtmJSrS6aPWxyz7"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                  Register Now
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
      
     <h2 className='font-bold  md:text-[35px] text-4xl '>Itinerary Details</h2>
      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md Grotesk-Black  text-black'>Day 1: Arrive at Leh</h2>
        </div>
        <div className='leading-4'>
         
          <li className='list-disc leading-6 py-2'>Arrive at Leh Kushok Bakula Rimpochee Airport</li>
          <li className='list-disc leading-6 py-2'>Transfer to your hotel and rest for acclimatization</li>
          <li className='list-disc leading-6 py-2'>Explore the local markets in Leh town</li>
          
        </div>
      </div>

      {/*Day 2*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 2: Leh Local Sightseeing</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Visit Shanti stupa, Sangam, Magnetic Hill and Gurudwara Pathar sahib.</li>
          <li className='list-disc leading-6 py-2'>Visit the Hall of Fame, a museum dedicated to Indian soldiers</li>
          <li className='list-disc leading-6 py-2'>Enjoy a leisurely walk around the Leh market in the evening.</li>
          <li className='list-disc leading-6 py-2'>Get ready to know about basic Astronomy in 1st session</li>
        </div>
      </div>

      {/*Day 3*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 3: Nubra Valley</h2>
        </div>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Drive through the Khardung La Pass, one of the highest motorable passes in the world</li>
          <li className='list-disc leading-6 py-2'> Get some thrill by experiencing river rafting in Nubra river.</li>
          <li className='list-disc leading-6 py-2'>Enjoy a camel ride on the double-humped Bactrian camels</li>
          <li className='list-disc leading-6 py-2'>Get ready for 2nd session of Star gazing from the middel of the sand dunes along with observations of galaxies through telescopes </li>
        
        </div>
      </div>


      {/*Day 4*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 4: Turtuk</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Drive through the scenic roads of Nubra valley, towards the
            last village of India.</li>
          <li className='list-disc leading-6 py-2'>Visit Turtuk the beautiful village near to India - POK border</li>
          <li className='list-disc leading-6 py-2'>After breakfast, walk around river Baspa and click beautiful pictures</li>
          <li className='list-disc leading-6 py-2'>Enjoy a camel ride on the double-humped Bactrian camels
            and ATV rides.</li>
          <li className='list-disc leading-6 py-2'>Get ready for 3rd session of Star gazing</li>
         

        </div>
      </div>

      {/*Day 5*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 5: Tso Pangong</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2  '>Embark on a thrilling drive to Pangong Tso Lake, one of the most famous
              attractions in the region</li>
          <li className='list-disc leading-6 py-2'> Enjoy the breathtaking views of the lake's changing colors and surrounding
              mountains</li>
          <li className='list-disc leading-6 py-2'>Spend the evening exploring the lake, stay near the lake for a unique
            experience.</li>
          <li className='list-disc leading-6 py-2'>Its time to gear up with your camera/DSLR and tripod for Astrophotography
            session.</li>

        </div>
      </div>



      {/*Day 6*/}

      <div>
        <div className='border border-gray-400  mt-5  bg-[#ADD8E6]  '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 6: Indian Astronomical observatory</h2>
        </div>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Depart from Pangong Tso and drive to Hanle, a remote village in the
              Changthang region of Ladakh.</li>
          <li className='list-disc leading-6 py-2'>Visit the Rezangla war memorial.</li>
          <li className='list-disc leading-6 py-2'>At night explore the darkest sky with more constellations and deep sky
            objects.</li>
        
        </div>
      </div>


       {/*Day 7*/}

       <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 7: UMLING -LA</h2>
        </div>

        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'> Exprience being at world highest motarable road at Umling -La in morning</li>
          <li className='list-disc leading-6 py-2'>Visit India's highest Astronomical Observatory which host an 2M optical
              telescope. Learn and experience 21st century astronomy from experts at IAO.</li>
          <li className='list-disc leading-6 py-2'>Visit to Hagar telescope and learn about Multiwavelenght Astronomy.</li>
          <li className='list-disc leading-6 py-2'>At night capture the milkyway, timelapse videos and star trails using your phone/DSLR.</li>
          

        </div>
      </div>


      {/*Day 8*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 8:Back to Leh</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'> Leave Hanle and drive to the based Leh</li>
          <li className='list-disc leading-6 py-2'>Visit Thiksey Monastery while returning.</li>
          <li className='list-disc leading-6 py-2'>Enjoy shopping in local markets and buy Souvenir for loved ones</li>
          <li className='list-disc leading-6 py-2'>Pack your bags and graze through the memories of last 8 days</li>
        </div>
      </div>


      {/*Day 9*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 9: Goodbye LEH</h2>
        </div>
        <div className='leading-4'>

         <li className='list-disc leading-6 py-2'>Check out from your hotel and transfer to the airport for your departure flight, taking back beautiful memories of your Ladakh trip.</li>
         <li className='list-disc leading-6 py-2'>Fill Feedback form, upload pics/reels on Insta, and do not forgot to tag @arceducators.</li>


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
        <li className='list-disc leading-6 py-2'>Accommodation at all places (double/triple sharing)</li> 
        <li className='list-disc leading-6 py-2'> Breakfast and dinner starting from Day 1 dinner to Day 9</li> 
        <li className='list-disc leading-6 py-2'>Transportation in Royal Enfield Bike/Tempo Traveller/Sumo/Scorpio for all days as per the itinerary</li> 
        <li className='list-disc leading-6 py-2'>Experienced local driver and group leader with great knowledge of the terrain</li> 
        <li className='list-disc leading-6 py-2'>First Aid Kit for emergency</li> 
        <li className='list-disc leading-6 py-2'> State tax & permits GST included</li> 
          
        
        </div>
      </section>

      <section className='sm:w-9/12 w-11/12 mx-auto Grotesk-Normal'>
        <h2 className='font-bold    md:text-[35px] text-3xl  p-2  rounded-md bg-[#ADD8E6] text-black'>EXCLUSIONS</h2>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Lunch or any food not mentioned in the itinerary</li> 
          <li className='list-disc leading-6 py-2'>Any Personal expenses, tips or portage</li> 
          <li className='list-disc leading-6 py-2 '>Air Fare to and from Leh</li> 
          <li className='list-disc leading-6 py-2'>To and fro Travel fare from New Delhi/Nizamuddin station to Majnu-Ka-Tila</li> 
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
            <td className="border border-white px-4 py-3  text-center  text-[20px]"> ₹ 30,000</td>
          </tr>
          <tr>
            <td className="border  border-white px-4 py-3  text-center w-1/2 text-[20px]">Twin Sharing</td>
            <td className="border border-white px-4 py-3 text-center  text-[20px]">₹ 32,000</td>
            
          </tr>
          <tr>
            <td className="border border-white px-4 py-3 text-center text-[20px] w-1/2">Solo + Bike + Twin Sharing</td>
            <td className="border border-white px-4 py-3 text-center  text-[20px]">₹ 35,000</td>
            
          </tr>
          <tr>
            <td className="border border-white px-4 py-3 text-center text-[20px] w-1/2">Dual +Bike + Twin Sharing</td>
            <td className="border border-white px-4 py-3 text-center  text-[20px]">₹ 33,000</td>
            
          </tr>
        </tbody>
    
      </table>
    </div>
  );
};


const RegistrationButton = () => {
  return (
    <section className="py-8 text-center">
     <Link to = "https://forms.gle/XrBtmJSrS6aPWxyz7"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              <button >
                  Register Now
                </button>
            </Link>
     
    </section>
  );
};

const AstrocampLadakh = () => {

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
        <TicketCosting/>
        <RegistrationButton />
      </div>
    </div>
  );
};

export default AstrocampLadakh;
