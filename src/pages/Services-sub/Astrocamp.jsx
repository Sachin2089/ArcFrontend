import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../style/index.css";
import bg from "../../assets/Bg.jpg";
import { Link } from "react-router-dom";
import Astrocamp1 from "../../assets/Astrocamp/astrocamp1.jpg";
import Astrocamp2 from "../../assets/Astrocamp/astrocamp2.jpg";
import Astrocamp3 from "../../assets/Astrocamp/astrocamp3.jpg";
import Astrocamp4 from "../../assets/Astrocamp/astrocamp4.jpg";
import Astrocamp5 from "../../assets/Astrocamp/astrocamp5.jpg";
import Astrocamp6 from "../../assets/Astrocamp/astrocamp6.jpg";
import Astrocamp7 from "../../assets/Astrocamp/astrocamp7.jpg";
import Astrocamp8 from "../../assets/Astrocamp/astrocamp8.jpg";
import Astrocamp9 from "../../assets/Astrocamp/astrocamp9.jpg";
import { useEffect } from "react";
import { motion } from "framer-motion";
import addFadeup from "../../animations/Fadeup";
import Carousel from "../../components/Carousel";
import { add } from "date-fns";
import { HashLink } from "react-router-hash-link"; 

const images = [
  `${Astrocamp1}`,
  `${Astrocamp2}`,
  `${Astrocamp3}`,
  `${Astrocamp4}`,
  `${Astrocamp5}`,
  `${Astrocamp6}`,
  `${Astrocamp7}`,
  `${Astrocamp8}`,
  `${Astrocamp9}`,
];

function Astrocamp() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="mb-16 min-h-screen xl:px-[220px] py-32 flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:h-[720px] sm:auto w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={addFadeup}
          className="h-full xl:w-[50%] flex flex-col items-center xl:items-start  justify-center "
        >
          <motion.h1
            variants={addFadeup}
            className="Grotesk-Black text-[30px] xl:text-[54px] xl:mb-4 mb text-white"
          >
            Astrocamp
          </motion.h1>
          <motion.p
            variants={addFadeup}
            className="xl:text-2xl text-base text-justify  Grotesk-Normal xl:text-left text-neutral-400 xl:mb-10 mb-4 p-8 xl:p-0  xl:pr-20"
          >
            We all know that a pole star shows north direction, but do you know
            which star is a pole star?
            <br />
            With this program, we fulfill the excitement of looking at the Night
            Sky with overnight Stargazing and camping where ARC Astronomers take
            everyone on a guided tour to the heavens above. Students get to know
            about bright stars and their nomenclature, constellations and
            mythological stories, zodiacs, and nakshatras, and observe planets,
            clusters, nebulae, binary stars, and galaxies with our best-in-class
            Telescopes.
          </motion.p>
          <motion.div
            variants={addFadeup}
            className="Grotesk-Black text-black text-base lg:text-xl border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md  xl:px-12 px-4 lg:px-5 xl:py-4 py-3 lg:py-2 mr-2 mb-16 xl:mb-0 focus:outline-none"
          >
            <HashLink to="#main2" smooth>
              Explore
            </HashLink>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeIn" }}
          className=" xl:w-[50%] w-[90%] flex p-4 items-center justify-end"
        >
          <Carousel images={images} />
        </motion.div>
      </div>
      <div id="main2">
        <section class="content xl:mt-20 mt-0">
          <div class="row">
            <div class="col">
              <div class="text-block">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  class="Grotesk-Black text-center xl:text-left"
                >
                  Our Objectives
                </motion.h2>
              </div>
            </div>

            <div class="col">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] xl:my-4 my-1"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2 ">
                    Immersive Learning
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl  text-neutral-400">
                    To provide an immersive learning experience about astronomy
                    and the wonders of the universe.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8 flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Learn about celestial bodies
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    To allow students to observe celestial bodies through
                    telescopes and learn from experienced astronomers.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Develop curiosity
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    To cultivate a sense of scientific inquiry and curiosity
                    among students.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Teamwork and Collabration
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    To encourage teamwork and collaboration through various
                    stargazing activities.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section class="content xl:mt-40 mt-0">
          <div class="row">
            <div class="col">
              <div class="text-block">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  class="Grotesk-Black text-center lg:text-left"
                >
                  What all is included?
                </motion.h2>
              </div>
            </div>

            <div class="col">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Telescopes
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Setting up telescopes for students to observe planets,
                    stars, and other celestial objects.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Sky Sessions
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Sky Sessions by astronomers, educating students about the
                    solar system, constellations, and space exploration.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Group Activities
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Activities such as constellation mapping, telescope
                    handling, and discussions on the significance of space
                    exploration.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeIn" }}
                class="card bg-[#1c1d22] my-4"
              >
                <div class="card_header py-12 px-8  flex items-start flex-col justify-center">
                  <h3 className="text-2xl xl:text:3xl text-neutral-100 Grotesk-Black text-left mb-2">
                    Accomodation
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Tent (Optional) , Evening Snacks, Dinner, and Breakfast at
                    the Venue.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Astrocamp;
