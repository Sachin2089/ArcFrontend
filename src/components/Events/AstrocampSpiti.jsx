import { useEffect } from 'react';
import React from 'react';
import Videostar from '../Videostar';
import ImageSliderSpiti from './ImageSlider/ImageSliderSpiti';
import spiti1 from '../../assets/Spiti/spiti1.jpg'
import spiti2 from '../../assets/Spiti/spiti2.jpg'
import spiti3 from '../../assets/Spiti/spiti3.jpg'
import spiti4 from '../../assets/Spiti/spiti4.jpg'
import spiti5 from '../../assets/Spiti/spiti5.jpg'
import "../../fonts/stylesheet.css";
import {Link} from 'react-router-dom'

const slides = [
  { url: spiti1, alt: "spiti One" },
  { url: spiti2, alt: "spiti Two" },
  { url: spiti3, alt: "spiti Three" },  
  { url: spiti4, alt: "spiti Three" },  
  { url: spiti5, alt: "spiti Five" },
]
const Intro = () => {
  return (
    
    <section className= " w-full text-white py-16 z-10">
      <h1 className="lg:text-[50px]  lg:mb-4 mb-2 mt-2 md:mt-0  text-center text-white pt-3 top-5 text-2xl Grotesk-Black">Astrocamp  Spiti Valley</h1>
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
          <span className='ml-8 Grotesk-Black'>Experience</span> Spiti's transformative journey, traversing urban landscapes to 
          Shimla's misty allure, Kinnaur's rugged trails, and Spiti's mesmerizing vistas. Encounter Chandratal lake's allure 
          and the tranquility of Manali. At Astrocamp, immerse in India's darkest skies, exploring planets, clusters, and 
          galaxies through telescopes. This event unites travel, sightseeing, ancient monasteries, stargazing, and Milky Way 
          photography, a cosmic escapade amid enchanting camping nights.
          </p>

          
           
            <div className=' flex flex-row items-center justify-center gap-x-32 '>
              <div className='flex flex-col items-center justify-center'>
                <div className=' rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black '>
                  <span className='mt-4 text-lg text-black'> Batch 1: 10th May 2024</span>
                </div>
                <div className='rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black '>
                  <span className='mt-4 text-lg text-black'> Batch 2: 7th June 2024</span>
                </div>
              </div>

              <div className='flex flex-col  justify-center'>
                <div className=' rounded-md  px-1 py-2 mt-3 bg-white   Grotesk-Black'>
                  <span className='mt-4 text-lg  text-black '> Batch 3: 2nd to 12th August</span>
                </div>
                <div className='rounded-md  px-1 py-2 mt-3 bg-white  text-center Grotesk-Black'>
                  <span className='mt-4 text-lg text-black'> Batch 4: 6th to 16th September</span>
                </div>
              </div>
            </div>


            {/* <button className=" Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
              Register Now
            </button> */}


            <Link to = "/registartionSpiti"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
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
        <span className='ml-8'>Experience</span> Spiti's transformative journey, traversing urban landscapes to 
          Shimla's misty allure, Kinnaur's rugged trails, and Spiti's mesmerizing vistas. Encounter Chandratal lake's allure 
          and the tranquility of Manali. At Astrocamp, immerse in India's darkest skies, exploring planets, clusters, and 
          galaxies through telescopes. This event unites travel, sightseeing, ancient monasteries, stargazing, and Milky Way 
          photographya cosmic escapade amid enchanting camping nights.
      </p>
      </div>

      <div className='flex flex-col'>
        <div>
            <div className=' rounded-md  px-1 py-2 mt-3 bg-black mr-32 '>
              <span className='mt-4 text-lg text-white'> Batch1: 10th May 2024</span>
            </div>
            <div className='rounded-md  px-1 py-2 mt-3 bg-black mr-32  '>
              <span className='mt-4 text-lg text-white'> Batch1: 7th June 2024</span>
            </div>
        </div>

        <div>
            <div className=' rounded-md  px-1 py-2 mt-3 bg-black mr-32 '>
              <span className='mt-4 text-lg text-white'>Batch 3: 2nd to 12th August</span>
            </div>
            <div className='rounded-md  px-1 py-2 mt-3 bg-black mr-32  '>
              <span className='mt-4 text-lg text-white'> Batch 4: 6th to 16th September</span>
            </div>
        </div>

      </div>

      
      <Link to = "/registartionSpiti"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
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
    <section className=' sm:w-9/12 w-11/12 mx-auto py-8  Grotesk-Normal lg:px-0 px-2 top-10'>
      
     <h2 className='font-bold  md:text-[35px] text-4xl '>Itinerary Details</h2>
      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md Grotesk-Black  text-black'>Day 1: Hometown To Delhi</h2>
        </div>
        <div className='leading-4'>
         
          <li className='list-disc leading-6 py-2'>Board train from Delhi to Hometown</li>
          <li className='list-disc leading-6 py-2'>Begin the trip and set yourself to make memories you crave</li>
          <li className='list-disc leading-6 py-2'>Over night train journey</li>
          
        </div>
      </div>

      {/*Day 2*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 2: Delhi To Shimla</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Welcome to "Capital of India"</li>
          <li className='list-disc leading-6 py-2'>Relax for sometime in New Delhi</li>
          <li className='list-disc leading-6 py-2'>Enjoy your leisure time by exploring near by places</li>
          <li className='list-disc leading-6 py-2'>Meet our Star gazing expert at Majnu-ka-tila</li>
          <li className='list-disc leading-6 py-2'>Start your overnight bus journey to Shimla</li>
        </div>
      </div>

      {/*Day 3*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 3: Shimla to Chitkul</h2>
        </div>
        <div className='leading-4'>

          <li className='list-disc leading-6 py-2'>Arrive to Shimla (summer capital of British India)</li>
          <li className='list-disc leading-6 py-2'> Start your journey to Chitkul</li>
          <li className='list-disc leading-6 py-2'>Long drive through the scenic beauty of Kinnaur via Narkanda and Rampur</li>
          <li className='list-disc leading-6 py-2'>Halt on the way to take a closer look of the picturesque view as you enter
            the beautiful Kinnaur valley
          </li>
          <li className='list-disc leading-6 py-2'> Arrive at Chitkul/Rakcham in the evening and enjoy at the campsite/hotel
            for tonight
          </li>
          <li className='list-disc leading-6 py-2'>Get ready for 1st session of Star gazing.</li>
          
        </div>
      </div>


      {/*Day 4*/}


      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 4: Chitkul to Tabo</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'>Wake up in the middle of a quaint village overlooking snow-laden
            mountains</li>
          <li className='list-disc leading-6 py-2'>ndulge in breakfast with a view at India's last village</li>
          <li className='list-disc leading-6 py-2'>After breakfast, walk around river Baspa and click beautiful pictures</li>
          <li className='list-disc leading-6 py-2'>7 hour drive to Tabo village, witnessing the confluence of Satluj and
            Spiti river</li>
          <li className='list-disc leading-6 py-2'>Call it a night at a cozy homestay in Tabo</li>
          <li className='list-disc leading-6 py-2'>Get ready for 2nd session of Star gazing</li>

        </div>
      </div>

      {/*Day 5*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 5: Tabo - Dhankar - Pin Valley - Kaza</h2>
        </div>
        <div className='leading-4'>
        <li className='list-disc leading-6 py-2  '>Relish the breakfast and bask in the winter sun.After Breakfast, visit Tabo
            Monastery</li>
        <li className='list-disc leading-6 py-2'> Drive-through a never seen before terrain to reach Dhankar and explore a
            unique monastery built on a cliff</li>
        <li className='list-disc leading-6 py-2'>Head out for Pin valley, witnessing jaw-dropping valley views of the frozen
            waterfall. Experience the wildlife around last village of Pin valley</li>
        <li className='list-disc leading-6 py-2'>Night at a peaceful homestay in Kaza</li>
        <li className='list-disc leading-6 py-2'>Post dinner session 3 of Star gazing from Kaza</li>

        </div>
      </div>



      {/*Day 6*/}

      <div>
        <div className='border border-gray-400  mt-5  bg-[#ADD8E6]  '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 6: Kaza -Langza - Komic - Hikkim -Kaza</h2>
        </div>
        <div className='leading-4'>

        <li className='list-disc leading-6 py-2'>Begin with a delightful breakfast to energize for the day ahead.</li>
        <li className='list-disc leading-6 py-2'>Encounter the awe-inspiring 35-ft Buddha statue in Langza, an emblem of spiritual tranquility amid the mountains.</li>
        <li className='list-disc leading-6 py-2'>Ascend to Hikkim, boasting the world's loftiest post office. Send your greetings from this extraordinary altitude!</li>
        <li className='list-disc leading-6 py-2'>Venture to Komic, the pinnacle of motorable villages globally, and immerse in its unparalleled mountain charm.</li>
        <li className='list-disc leading-6 py-2'>Post dinner, Get Ready for Astrophotography of Milkyway
            " The home of 100 billion stars"</li>
        
        </div>
      </div>


       {/*Day 7*/}

       <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 7: Kaza - Key - Chicham- Kibber - Kaza</h2>
        </div>

        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'> Visit Key Monastery, and sigh at the marvels of 1000 years old ancient
            murals, rare thangkas and ancient weapons</li>
          <li className='list-disc leading-6 py-2'>Drive through the picturesque mountains and reach Asia's highest road
            bridge, Chicham bridge. After that visit Kibber village</li>
          <li className='list-disc leading-6 py-2'>Buy souvenir and gifts for your loved ones</li>
          <li className='list-disc leading-6 py-2'>5th session of Star gazing at Kaza</li>
          

        </div>
      </div>


      {/*Day 8*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6] '>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 8: Kaza To Chandratal</h2>
        </div>
        <div className='leading-4'>
          <li className='list-disc leading-6 py-2'> Wake up early , have breakfast and start your journey to one last yet the
            most wonderful spot-Chandra Tal lake</li>
          <li className='list-disc leading-6 py-2'>The mystically marvellous Chandratal or the Moon Lake is located at a
            height of 14,000 feet in the mighty Himalayas</li>
          <li className='list-disc leading-6 py-2'>The lake is so vibrant that it looks like a fine art painting straight out of the
            hands of mother nature</li>
          <li className='list-disc leading-6 py-2'>Check-in to camps near Chandratal, freshen up, have dinner and sleep
            under the stunning Milky Way Galaxy</li>
          <li className='list-disc leading-6 py-2'>6th Star gazing Session</li>

        </div>
      </div>


      {/*Day 9*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 9: Chandrataal Lake to Manali</h2>
        </div>
        <div className='leading-4'>

         <li className='list-disc leading-6 py-2'> Wakeup, have breakfast and make your way back to Manali</li>
         <li className='list-disc leading-6 py-2'>Drive back through the stunning landscapes and reach Manali by
            afternoon</li>
         <li className='list-disc leading-6 py-2'>Explore Manali in the evening</li>
         <li className='list-disc leading-6 py-2'>Board AC bus for overnight journey to Delhi</li>


        </div>
      </div>


      {/*Day 10*/}

      <div>
        <div className='border border-gray-400  mt-5 bg-[#ADD8E6]'>
          <h2 className='font-bold text-[20px] my-2 mx-2 rounded-md text-black'>Day 9: Delhi to Hometown</h2>
        </div>
        <div className='leading-4'>
        <li className='list-disc leading-6 py-2'>Reach Delhi in morning</li>
        <li className='list-disc leading-6 py-2'>Relax a bit and get ready for return train journey to Hometown</li>
        <li className='list-disc leading-6 py-2'>Its time to update your social media with beautiful memories and look back
            your past 10 days</li>
        <li className='list-disc leading-6 py-2'>Share your thoughts about the trip with us and See you soon!!!</li>      
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

        <li className='list-disc leading-6 py-2'>Stargazing Expert</li> 
        <li className='list-disc leading-6 py-2'>Bus Travel AV Volvo</li> 
        <li className='list-disc leading-6 py-2'>Accommodation at all places (double/triple sharing)</li> 
        <li className='list-disc leading-6 py-2'> Breakfast and dinner starting from Day 3 dinner to Day 9</li> 
        <li className='list-disc leading-6 py-2'>Transportation in Tempo Traveller/Sumo/Scorpio/Bus/Train for all days</li> 
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
          <li className='list-disc leading-6 py-2 '>To and fro Travel fare from home to railway station</li> 
          <li className='list-disc leading-6 py-2'> Travel fare for sightseeing at Delhi and Manali</li> 
          <li className='list-disc leading-6 py-2'>To and fro Travel fare from New Delhi/Nizamuddin station to Majnu-Ka-Tila</li> 
          <li className='list-disc leading-6 py-2'>Any charge like extra accommodation, route & date change incurred due to
              unforeseen & unavoidable conditions
          </li> 
          <li className='list-disc leading-6 py-2'>Any other cost due to unforeseen circumstances including medical emergencies and
              natural calamities which are out of control
          </li> 
          <li className='list-disc leading-6 py-2'> Food during train</li>
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
    
    <div className=' sm:w-9/12 w-11/12 mx-auto py-2 Grotesk-Normal' >
      <h2 className='font-bold  md:text-[35px] text-3xl uppercase bg-[#ADD8E6] text-black p-2  rounded-md'>COSTING PER PERSON</h2>
      
      <table className="w-full table-auto border-collapse   mt-10">
      
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 font-bold text-center w-1/2 text-[21px] ">Part A : Train tickets cost</td>
            <td className="border border-black px-4 py-3  text-center font-bold text-[20px]">At Actual</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-3 font-bold text-center w-1/2 text-[20px]">Part B: Triple Sharing Ex Delhi</td>
            <td className="border border-black px-4 py-3 text-center font-bold text-[20px]">Part A + INR 23000</td>
            
          </tr>
          <tr>
            <td className="border border-black px-4 py-3 font-bold text-center text-[20px] w-1/2">Part C : Twin Sharing Ex Delhi</td>
            <td className="border border-black px-4 py-3 text-center font-bold text-[20px]">Part A + INR 25000</td>
            
          </tr>
        </tbody>
    
      </table>
    </div>
  );
};


const RegistrationButton = () => {
  return (
    <section className="py-8 text-center">
      <Link to = "/registartionSpiti"  target =  "_blank" className= "Grotesk-Black hover:bg-opacity-100 bg-opacity-30 bg-[#1779f4] hover:border border-white mx-auto  text-white  py-3 px-6 rounded-md shadow-lg lg:mt-10 md:mt-4 text-[25px]">
          <button >
              Register Now
          </button>
      </Link>
     
     
    </section>
  );
};

const AstrocampSpiti = () => {

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

export default AstrocampSpiti;
