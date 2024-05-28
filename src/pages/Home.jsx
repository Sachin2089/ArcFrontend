import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import "../fonts/stylesheet.css";
import { motion } from "framer-motion";

import { LampContainer } from "../ui/lamp";
import { SparklesCore } from "../ui/sparkles";
import { BackgroundBeams } from "../ui/background-beams";
import BG from "../assets/Workshop-Gallery/workshop10.jpg";
import addFadeup from "../animations/Fadeup";
import { IoCalendarOutline } from "react-icons/io5";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Testimonials from "../components/Testimonials";
import planeterium from "../assets/Planeterium/Plt1.jpg";
import workshp from "../assets/Workshops/workshop4.jpg";
import astrocamp from "../assets/Astrocamp/astrocamp9.jpg";
import astroclbs from "../assets/Kamshet/kamshet2.jpg";
import astrolabs from "../assets/Workshops/StoryImage.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const [counterOn, setCounterOn] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="min-h-screen">
      <div className="h-[360px] lg:h-[100vh] flex  px-4 bg-gradient-to-b from-[#32044e] via-[#000005] to-[#030005]">
        <div className="w-full absolute inset-0 flex flex-col items-center lg:justify-center justify-start   pt-32 z-1">
          <motion.div
            initial="hidden"
            animate="show"
            variants={addFadeup}
            className="absolute  flex items-center justify-start flex-col w-full text-center"
          >
            <motion.h1
              variants={addFadeup}
              className="text-[32px] sm:text-[42px]  md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[100px] Grotesk-Black leading-tight md:leading-[93px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text"
            >
              Discover cosmic wonders
              <br /> with the Arc Educators
              <motion.p
                variants={addFadeup}
                className="px-4 lg:w-[60%]  text-[18px] lg:text-[30px] pt-4 mb-8 lg:mb-8 Grotesk-Normal text-justify leading-tight text-neutral-400"
              >
                <span className="ml-8">Dive</span> into the boundless sky where the heavens stretch out
                with the promise of new wonders
                waiting to be explored.
              </motion.p>
              {/* <div className="w-full flex items-center z-10 justify-center">
                <motion.div
                  variants={addFadeup}
                  className="Grotesk-Black w-[200px] text-black text-base lg:text-xl border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md  xl:px-12 px-4 lg:px-5 xl:py-4 py-3 lg:py-2 mr-2 mb-16 xl:mb-0 focus:outline-none"
                >
                  <HashLink to="#main6" smooth>
                    Explore
                  </HashLink>
                </motion.div>
              </div> */}  
            </motion.h1>
          </motion.div>

          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={0.9}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#cecec5"
          />
          <BackgroundBeams />
        </div>
      </div>
      <div
        id="main6"
        className="min-h-screen flex flex-col justify-center items-start md:py-24 xl:px-[220px] lg:px-[150px] md:px-[80px] sm:px-[10px] bg-gradient-to-b from-[#030005] via-[#000005] to-[#32044e]  "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1.5 }}
          className="flex item-start justify-center p-4"
        >
          <img
            className="lg:w-[85%] border-white border-4 rounded-[7px] z-10 "
            src={BG}
          ></img>
        </motion.div>
        <div className="flex items-center lg:mt-16 justify-start flex-col w-full text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeIn" }}
            className="text-[32px]  sm:text-[42px] md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[72px] Grotesk-Black leading-tight md:leading-[72px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text"
          >
            Observe Make Learn
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeIn" }}
              className="px-6 lg:w-[60%]  text-[18px] lg:text-[24px] pt-4 mb-8 lg:mb-8 Grotesk-Normal leading-tight text-justify text-neutral-400 resize-none"
            >
              Embark on a celestial journey with ARC Educators. Our team brings
              innovative teaching methods to nurture young astronomers. Join us
              in shaping a vibrant community of stargazers and exploring the
              wonders of the universe together.
            </motion.p>
          </motion.h1>
        </div>

        <div className="w-full my-8 flex flex-wrap justify-center gap-6 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeIn" }}
            className="w-full sm:w-[360px] md:w-[300px] h-[180px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
          >
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="text-[60px] text-white my-2 Grotesk-Black flex items-center justify-center">
                {counterOn && (
                  <CountUp start={0} end={9} duration={2} delay={0} />
                )}
                <span className="text-4xl ml-2">+</span>
              </h1>
              <h1 className="Grotesk-Normal text-neutral-300 text-xl sm:text-2xl mb-2">
                Years Active
              </h1>
            </ScrollTrigger>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeIn" }}
            className="w-full sm:w-[360px] md:w-[300px] h-[180px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
          >
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="text-[60px] text-white my-2 Grotesk-Black flex items-center justify-center">
                {counterOn && (
                  <CountUp start={100} end={250} duration={2} delay={0} />
                )}
                <span className="text-4xl ml-2">+</span>
              </h1>
              <h1 className="Grotesk-Normal text-neutral-300 text-xl sm:text-2xl mb-2">
                Events Organized
              </h1>
            </ScrollTrigger>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeIn" }}
            className="w-full sm:w-[360px] md:w-[300px] h-[180px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
          >
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="text-[60px]  text-white my-2 Grotesk-Black flex items-center justify-center">
                {counterOn && (
                  <CountUp start={18000} end={20000} duration={1} delay={0} />
                )}
                <span className="text-4xl ml-2">+</span>
              </h1>
              <h1 className="Grotesk-Normal text-center text-neutral-300 text-xl sm:text-2xl mb-2">
                Happy Participants
              </h1>
            </ScrollTrigger>
          </motion.div>
          <div className="flex items-center lg:mt-24 justify-start flex-col w-full text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.0, ease: "easeIn" }}
              className="text-[42px] md:mt-0 mt-8  sm:text-[42px] md:mb-0 mb-4 md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[72px] Grotesk-Black leading-tight md:leading-[72px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text"
            >
              Services
            </motion.h1>
            <div className="w-full md:my-8 my-0 md:py-8 py-0  flex flex-wrap justify-center gap-6 ">
              <Link to="/services/arc-planeterium">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  className="w-full sm:w-[360px] md:w-[300px] p-3   lg:h-[300px]  border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
                >
                  <img
                    src={planeterium}
                    className="h-full w-full rounded-[5px] border border-white"
                  ></img>
                  <h1 className="Grotesk-Normal text-neutral-300 text-2xl sm:text-2xl mt-2">
                    Mobile Planeterium
                  </h1>
                </motion.div>
              </Link>
              <Link to="/services/arc-astronomy-workshop">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  className="w-full sm:w-[360px] md:w-[300px] p-3 lg:h-[300px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
                >
                  <img
                    src={workshp}
                    className="h-full w-full rounded-[5px] border border-white"
                  ></img>
                  <h1 className="Grotesk-Normal text-neutral-300 text-xl sm:text-2xl mt-2">
                    Astronomy Workshops
                  </h1>
                </motion.div>
              </Link>
              <Link to="/services/astrocamp">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  className="w-full sm:w-[360px] md:w-[300px] p-3 lg:h-[300px]  border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
                >
                  <img
                    src={astrocamp}
                    className="h-full w-full rounded-[5px] border border-white"
                  ></img>
                  <h1 className="Grotesk-Normal text-neutral-300 text-xl sm:text-2xl mt-2">
                    Astrocamps
                  </h1>
                </motion.div>
              </Link>
              <Link to="/services/astronomy-club">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  className="w-full sm:w-[360px] md:w-[300px] p-3 lg:h-[300px]  border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
                >
                  <img
                    src={astroclbs}
                    className="h-full w-full rounded-[5px] border border-white"
                  ></img>
                  <h1 className="Grotesk-Normal text-neutral-300 text-xl sm:text-2xl mt-2">
                    Astronomy Clubs
                  </h1>
                </motion.div>
              </Link>

              <Link to="/services/astronomy-labs">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  className="w-full sm:w-[360px] md:w-[300px] p-3 lg:h-[300px]  border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center"
                >
                  <img
                    src={astrolabs}
                    className="lg:h-full h-fit w-full rounded-[7px] border border-white"
                  ></img>
                  <h1 className="Grotesk-Normal text-neutral-300 text-xl sm:text-2xl mt-2">
                    Astronomy Labs
                  </h1>
                </motion.div>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:mt-30 justify-start flex-col w-full text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.0, ease: "easeIn" }}
              className="text-[32px]  sm:text-[42px] md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[72px] Grotesk-Black leading-tight md:leading-[72px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text"
            >
              what people say about us!
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                className="px-6 lg:w-[60%] mt-2  text-[18px] lg:text-[24px] pt-4 mb-8 lg:mb-8 text-justify Grotesk-Normal leading-tight text-neutral-400"
              >
                <span className="ml-8">Dive</span> into a collection of heartfelt stories, glowing reviews,
                and genuine feedback from those who have trusted us. From tales
                of success to moments of delight, explore how our solutions have
                made a positive impact on our clients' lives.
              </motion.p>
            </motion.h1>
          </div>
          <Testimonials />
          <div className="flex flex-col flex-wrap items-center justify-start">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeIn" }}
              className="px-6 lg:w-[60%]  text-[18px] text-justify  -mt-3 lg:text-[24px] pt-4 mb-8 lg:mb-8 Grotesk-Normal leading-tight text-neutral-400"
            >
               <span className="ml-8">Ready</span> to embark on a journey through the cosmos with Arc
              Educators? Contact us today to schedule a workshop for your school
              and inspire the next generation of astronomers, scientists, and
              space explorers. Let's ignite curiosity, foster discovery, and
              reach for the stars together!
            </motion.p>
            <motion.div
              variants={addFadeup}
              className="Grotesk-Black z-10 text-black text-base lg:text-xl border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md  xl:px-12 px-4 lg:px-5 xl:py-4 py-3 lg:py-2 mr-2 mb-16 xl:mb-0 focus:outline-none"
            >
              <Link to="/contact" smooth>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;