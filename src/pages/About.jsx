import React from "react";
import BG from "../assets/About/groupPicture.jpg";
import pic2 from "../assets/About/StoryImage.jpg";
import founder1 from "../assets/About/founder1.jpg";
import founder2 from "../assets/About/Sameer.jpg";
import sachin from "../assets/About/sachin.jpg";
import prashant from "../assets/About/prashant.jpg";
import shruti from "../assets/About/shruti.jpg";
import jigisha from "../assets/About/jigisha.jpg";
import sai from "../assets/About/sai.jpg";
import adib from "../assets/About/adib.jpg";
import vinayak from "../assets/About/vinayak.jpg";
import addFadeup from "../animations/Fadeup";
import { motion } from "framer-motion";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="min-h-screen lg:px-[220px] bg-[#0B0B0F] py-8 lg:pt-32 flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex md:flex-row flex-col items-center justify-center md:h-[600px] sm:auto   w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={addFadeup}
          className=" md:w-[50%] flex flex-col items-start justify-center"
        >
          <motion.h1
            variants={addFadeup}
            className="Grotesk-Black md:mx-0 mx-auto md:text-[42px] text-[30px] mb-2 md:font-bold xl:text-[54px] text-white md:bg-transparent md:mt-0  mt-12  rounded-md"
          >
            Our Journey
          </motion.h1>
          <motion.p
            variants={addFadeup}
            className="xl:text-2xl text-base text-justify  Grotesk-Normal xl:text-left text-neutral-400 xl:mb-2 mb-4 p-8 xl:p-0  xl:pr-20"
          >
            <span className="ml-12">In</span> 2016, amateur astronomers in Mumbai embarked on a mission to
            revolutionize education through the wonders of the cosmos.
            Thus, Arc Educators was born, a visionary ed-tech startup dedicated
            to igniting a passion for astronomy in learners of all ages. With a
            shared love for the stars and a desire to make astronomy accessible
            to everyone, they set out to create innovative educational tools and
            resources.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{opacity:1}}
          transition={{ duration: 2.0, ease: "easeIn" }} className=" md:w-[50%] w-full flex items-center justify-end  ">
          <img
            src={BG}
            alt=""
            className=" rounded-[8px] h-fit w-full bg-cover border-4 lg:border-white border-black"
          />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col lg:-mt-24 items-center  justify-center lg:h-[720px] sm:auto -mt-14  w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{opacity:1}}
          transition={{ duration: 2.0, ease: "easeIn" }}
          id="aman"
          className=" md:w-[50%] w-full flex items-center justify-start "
        >
          <img
            src={pic2}
            alt=""
            className=" rounded-[8px] h-fit w-full bg-cover border-4 lg:border-white border-black  md:p-0 md:mt-0 mt-24  md:mb-0 mb-8"
          />
        </motion.div>
        <div className=" md:w-[50%] w-full flex flex-col items-start justify-center md:ml-24">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            className="xl:text-2xl text-base text-justify  Grotesk-Normal xl:text-left text-neutral-400 xl:mb-10 mb-4 p-8 xl:p-0  xl:pr-8"
          >
            Over the years, Arc Educators has grown from a humble startup to a
            leading force in the field of astronomy education, empowering
            students and educators worldwide to explore the universe like never
            before. <br></br>Through interactive online courses, engaging
            workshops, and cutting-edge educational technology, Arc Educators
            continues to inspire curiosity and discovery, fueling the next
            generation of astronomers and space explorers. Join us on our
            journey to unlock the mysteries of the cosmos and reach for the
            stars with Arc Educators.
          </motion.p>
        </div>
      </div>

      <div>
        <div className="mx-auto">
          <h1 className="text-center md:text-6xl text-[30px] rounded-md Grotesk-Normal text-white  md:mt-0 mt-10 mb-8 lg:mb-0" >
            Founders
          </h1>
          <div>
            <div className="flex md:flex-row flex-col md:gap-20 md:-mt-9">
              <div class="flex items-center justify-center md:-mt-5">
                <div class="rounded-md group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/40 mx-1 md:mb-0 -mb-28">
                  <div class="h-[30rem] w-[21rem] ">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={founder1}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="text-3xl font-bold text-white">Nitin</h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      is the co-founder of Arc Educators. He is currently
                      serving as a Senior Product Engineer and working with the
                      field of Optical fibers and Photonics. He has pursued his
                      post-graduation in Physics and currently associated with
                      the Space Application Centre of ISRO for India’s Gaganyaan
                      mission. Being a persistent astronomy observer of more
                      than 6 years, Nitin has an interest in Ancient Astronomy,
                      Astronomy Instrumentation, and Observational Astronomy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}

              <div class="flex min-h-screen items-center justify-center md:-mt-6 md:mb-0 -mb-32">
                <div class="rounded-md group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/40 mx-1">
                  <div class="h-[30rem] w-[21rem]">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={founder2}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="text-3xl font-bold text-white">Sameer</h1>
                    <p class="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      is the co-founder of Arc Educators. Experienced Astronomy
                      Head at Arc Educators, specializing in curriculum
                      development, planetarium shows, hands-on activities, and
                      organizing field trips for school stargazing. Former IBDP
                      & MYP Physics facilitator with over 5 years of R&D
                      expertise in areas like Linear Accelerators, Physics,
                      Astronomy, Microwave, and Ultra High Vacuum. Holds a
                      Master's Degree in Physics from the University of Mumbai
                      and has a strong background in top government institutes
                      and private companies. A dedicated amateur astronomer for
                      the past decade, actively engaging in astronomy outreach
                      through stargazing events and workshops for 8 years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 3 */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" mx-auto mb-24">
          <h1 className="text-center md:text-6xl text-[30px] rounded-md  text-white Grotesk-Normal md:-mt-0  mb-8">
            Our Team
          </h1>
          <div>
            <div class=" flex min-h-screen items-center justify-center mt-24 ">
              <div class=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-y-16 md:gap-y-8 ">
                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={sachin}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">
                      Sachin
                    </h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      is currently doing graduation in Physics from Mumbai
                      University. He is pursuing Astronomy from past 3 years. He
                      also as experience of taking stargazing sessions as well
                      as teaching theortical Astronomy too. His area of interest
                      is Theortical Astronomy and doing sky observation.
                    </p>
                  </div>
                </div>

                {/* <!-- prashant --> */}
                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={prashant}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">
                      Prashant
                    </h1>
                    <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      a passionate astronomer and graduate with a Bachelor of
                      Engineering degree. With an insatiable curiosity about the
                      cosmos, Prashant has spent the past Six years exploring
                      the wonders of the night sky as an amateur astronomer.
                    </p>
                  </div>
                </div>
                {/* <!-- Sai --> */}
                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={sai}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">
                      Sai
                    </h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      works in the Astronomy Cell at HBCSE, which conducts
                      training for students all over the India aspiring to
                      participate in the International Olympiad in Astronomy &
                      Astrophysics. She has completed her Master's in Physics
                      from University of Mumbai. She holds interest in Stellar
                      Physics and Observational Astronomy.
                    </p>
                  </div>
                </div>

                {/* <!--Adib --> */}

                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={adib}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white ">
                      Adib
                    </h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      a Physics graduate, has been passionately pursuing
                      astronomy as a hobby for over six years. Alongside his
                      astronomical pursuits, he possesses expertise in event
                      management. By combining his scientific knowledge and
                      organizational skills, he creates captivating and
                      educational events that showcase his love for astronomy.
                    </p>
                  </div>
                </div>

                {/* <!--Vinayk --> */}

                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={vinayak}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">
                      Vinayak
                    </h1>
                    <p class="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      M.Tech in Electronics AI, data scientist, singer, cook,
                      FIDE-rated chess player, and amateur astronomer. In his
                      free time, he teaches science and astronomy. His
                      insatiable curiosity drives him to explore new frontiers,
                      delve into scientific history, and contemplate the
                      mysteries of the universe, making him a truly
                      multi-disciplinary enthusiast and passionate knowledge
                      seeker.
                    </p>
                  </div>
                </div>

                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={shruti}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">
                      Shruti
                    </h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      is an IT post graduate(MS) specialized in Artificial
                      Intelligence and pursuing astronomy as a hobby for more
                      than 3 years. She is an amateur astronomer and her area of
                      interest includes observational & theoretical astronomy.
                      Universe has always been a fascinating topic for her!
                    </p>
                  </div>
                </div>

                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-96 w-80">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={jigisha}
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">
                      Jigisha
                    </h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      is an HR by profession and an amateur astronomer by
                      passion. Her profound interest in astronomy began when her
                      Geography Mam was teaching the captivating chapter "The
                      Universe." At that very moment, her keen curiosity
                      ignited. She have been interested in astronomy for over
                      10+ years, and this fascination will endure indefinitely
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
