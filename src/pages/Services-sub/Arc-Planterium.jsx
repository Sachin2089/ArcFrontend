import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../style/index.css";
import bg from "../../assets/Bg.jpg";
import { Link } from "react-router-dom";
import Plt1 from "../../assets/Planeterium/Plt1.jpg";
import Plt2 from "../../assets/Planeterium/Plt2.jpg";
import { motion } from "framer-motion";
import addFadeup from "../../animations/Fadeup";
import Carousel from "../../components/Carousel";
import { add } from "date-fns";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
const images = [`${Plt1}`, `${Plt2}`];
function ArcPlaneterium() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="min-h-screen xl:px-[220px] py-32 flex items-center justify-center columns-3 flex-wrap gap-4 mb-16">
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
            Arc Mobile Planetarium
          </motion.h1>
          <motion.p
            variants={addFadeup}
            className="xl:text-2xl text-base text-justify  Grotesk-Normal xl:text-left text-neutral-400 xl:mb-10 mb-4 p-8 xl:p-0  xl:pr-20"
          >
            Introducing Arc Mobile Planetariums, where we transport the marvels
            of the cosmos to you through our Digital Mobile Planetarium. <br />
            Our revolutionary planetarium provides an immersive and hands-on
            educational setting, crafted to spark curiosity and enhance
            comprehension of astronomy and related fields.
          </motion.p>
          <motion.div
            variants={addFadeup}
            className="Grotesk-Black text-black text-base lg:text-xl border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md  xl:px-12 px-4 lg:px-5 xl:py-4 py-3 lg:py-2 mr-2 mb-16 xl:mb-0 focus:outline-none"
          >
            <HashLink to="#main" smooth>
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
      <div id="main">
        <section class="content xl:mt-20 mt-0">
          <div class="row">
            <div class="col">
              <div class="text-block">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  class="Grotesk-Black text-center lg:text-left"
                >
                  Key Feautures
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
                    Inflatable Dome
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl  text-neutral-400">
                    Our planetarium is housed in an inflatable dome, making it
                    easy to set up and transport to different locations.
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
                    Hemisphere Screen
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    The dome is equipped with a high-quality hemisphere screen
                    that provides a seamless and immersive viewing experience.
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
                    360° Projection System
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Our planetarium features a state-of-the-art 360° projection
                    system that projects a realistic night sky, complete with
                    stars, planets, and other celestial objects.
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
                  Educational Benefits
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
                    Hands-On Learning
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Arc Mobile Planetariums provide experiential learning that
                    complement classroom teachings, helping students visualize
                    and understand complex concepts.
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
                    Interactive Sessions
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    The planetarium sessions are interactive, allowing students
                    to ask questions and engage with the content, making
                    learning fun and engaging.
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
                    Multi-Sensory Experience
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    The immersive nature of our planetarium provides a
                    multi-sensory experience, enhancing retention and
                    understanding of the subject matter.
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

export default ArcPlaneterium;
