import { useEffect } from 'react';
import React from 'react';
import Videostar from '../Videostar';
import ImageSliderSpiti from './ImageSlider/ImageSliderSpiti';
import kutch1 from '../../assets/Kutch/kutch1.jpg'
import kutch2 from '../../assets/Kutch/kutch2.jpg'
import kutch3 from '../../assets/Kutch/kutch3.jpg'
import kutch4 from '../../assets/Kutch/kutch4.jpg'
import kutch5 from '../../assets/Kutch/kutch5.jpg'
import kutch6 from '../../assets/Kutch/kutch6.jpg'
import kutch7 from '../../assets/Kutch/kutch7.jpg'


import "../../fonts/stylesheet.css";
import {Link} from 'react-router-dom'



const slides = [
  { url: kutch1, alt: "Kutch One" },
  { url: kutch2, alt: "Kutch Two" },
  { url: kutch3, alt: "KutchThree" },  
  { url: kutch4, alt: "Kutch Three" },  
  { url: kutch5, alt: "Kutch Five" },
  { url: kutch6, alt: "Kutch Six" },
  { url: kutch7, alt: "Kutch Seven" },
]
const Intro = () => {
  return (
    
    <section className= " w-full text-white py-16 z-10">
      <h1 className="lg:text-[50px]  lg:mb-4 mb-2 mt-2 md:mt-0  text-center text-white pt-3 top-5 text-2xl Grotesk-Black">Astrocamp Kutch</h1>
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
          <span className='ml-8 Grotesk-Black'>Embark</span> on an Extraordinary Astronomy Tour to Rann of Kutch 🏔️🌠 Experience the magic of the night sky in one of the most 
          nique and captivating landscapes on Earth, the Rann of Kutch, with our 3-night, 4-day Astronomy Trip. This adventure-packed 
          journey is designed for stargazers, astronomy enthusiasts, and nature lovers who want to explore the celestial wonders while immersed in the 
          stunning beauty of the White Desert. 
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
      <span className='ml-8 Grotesk-Black'>Embark</span> on an Extraordinary Astronomy Tour to Rann of Kutch 🏔️🌠 Experience the magic of the night sky in one of the most 
          nique and captivating landscapes on Earth, the Rann of Kutch, with our 3-night, 4-day Astronomy Trip. This adventure-packed 
          journey is designed for stargazers, astronomy enthusiasts, and nature lovers who want to explore the celestial wonders while immersed in the 
          stunning beauty of the White Desert. 
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
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md Grotesk-Black  text-black'>Day 1: Bhuj</h2>
        </div>
        <div className='leading-4'>
         
          <li className='list-disc leading-6 py-2'>Arrive at Bhuj -Mumbai to Bhuj (Kutch Express) 5:45 PM - 8:30 AM, Delhi to Bhuj (Ala Hazrat Exp) 11:50 AM - 11:00 AM</li>
          <li className='list-disc leading-6 py-2'>Explore Prag, Aina Mahal, Kutch Museum, Swaminarayan Temple, and Vandemataram Memorial.</li>
          <li className='list-disc leading-6 py-2'>Sunset at Bhujio hill</li>
          <li className='list-disc leading-6 py-2'>Night stay in Bhuj</li>
            
        </div>
      </div>

      {/*Day 2*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'> Day 2: Rann Of Kutch</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Head to Dhordo with a stop at Nirona Village.</li>
          <li className='list-disc leading-6 py-2'>Check-in, witness the adventure activities at White Rann along with sunset.</li>
          <li className='list-disc leading-6 py-2'>Get ready for the 1st Stargazing session and telescopic observation from Rann..</li>
        </div>
      </div>

      {/*Day 3*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 3: Road To Heaven</h2>
        </div>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Wake up early for a sunrise experience in the White Dessert.</li>
          <li className='list-disc leading-6 py-2'> Explore Kalo Dungar and Magnetic Hill. Visit local art forms in Khavda, Ludhiya, and Gandhi nu Gam villages.</li>
          <li className='list-disc leading-6 py-2'> Depart for Dholavira, a UNESCO World Heritage Site, and drive through the scenic Road to Heaven on the way</li>
          <li className='list-disc leading-6 py-2'>Enjoy the 2nd Stargazing session and stay in Dholavira.</li>
        
        </div>
      </div>


      {/*Day 4*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 4: Harappan Excavation</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Early Breakfast and checkout from Dholavira</li>
          <li className='list-disc leading-6 py-2'>Visit to Harappan Excavation site</li>
          <li className='list-disc leading-6 py-2'>Visit to Fossil park and Archeological Museum.</li>
          <li className='list-disc leading-6 py-2'>Depart for Bhuj</li>
          <li className='list-disc leading-6 py-2'>Take overnight train to your respective base.</li>
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
        <li className='list-disc leading-6 py-2'>Pickup and Drop from the Railway station.</li>  
        <li className='list-disc leading-6 py-2'>Accommodation at all places in AC Bhunga/Hotels/tents as per the itinerary (double/triple sharing)</li> 
        <li className='list-disc leading-6 py-2'>Breakfast and dinner starting from Day 1 dinner to Day 4 </li> 
        <li className='list-disc leading-6 py-2'>Cab/Tempo traveller for transfers and sightseen</li> 
        <li className='list-disc leading-6 py-2'>Experienced local driver and group leader with great knowledge of the Area.</li> 
        <li className='list-disc leading-6 py-2'>First Aid Kit for emergency</li> 
        <li className='list-disc leading-6 py-2'>State tax & permits GST included</li> 
  
        </div>
      </section>

      <section className='sm:w-9/12 w-11/12 mx-auto Grotesk-Normal'>
        <h2 className='font-bold    md:text-[35px] text-3xl  p-2  rounded-md bg-[#ADD8E6] text-black'>EXCLUSIONS</h2>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Lunch or any food not mentioned in the itinerary</li> 
          <li className='list-disc leading-6 py-2'>Any Personal expenses, tips or portage</li> 
          <li className='list-disc leading-6 py-2 '>Fight/Train tickets to & fro railway station.</li> 
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

const AstrocampKutch = () => {

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

export default AstrocampKutch;
