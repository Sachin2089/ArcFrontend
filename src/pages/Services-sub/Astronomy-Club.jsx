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
import StayTuned from "../../assets/StayTuned.jpg";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const images = [`${StayTuned}`];

function AstronomyClub() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="min-h-screen xl:px-[220px] mb-16 py-32 flex items-center justify-center columns-3 flex-wrap gap-4">
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
            Astronomy Club
          </motion.h1>
          <motion.p
            variants={addFadeup}
            className="xl:text-2xl text-base text-justify  Grotesk-Normal xl:text-left text-neutral-400 xl:mb-10 mb-4 p-8 xl:p-0  xl:pr-20"
          >
            It's a unique idea in which Arc Educators will coordinate with your
            School to form Astronomy club and maintain regular activities in
            club throughout the year. We believe in collective learning, an
            astronomy club will be excellent platform for students to learn
            technical, observational and computational skills. It will also be
            an amazing opportunity for students to showcase their Intelligence,
            hard work, leadership and team work.
          </motion.p>
          <motion.div
            variants={addFadeup}
            className="Grotesk-Black text-black text-base lg:text-xl border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md  xl:px-12 px-4 lg:px-5 xl:py-4 py-3 lg:py-2 mr-2 mb-16 xl:mb-0 focus:outline-none"
          >
            <HashLink to="#main4" smooth>
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
      <div id="main4">
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
                    Experts Sessions for students
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
                    In school observation of moon and Sun
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Foster curiosity through hands-on learning experiences about
                    celestial bodies.
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
                    Software training
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Equip students with software skills regarding various
                    astronomy platforms.
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
                    Teachers Training & Doubt solving.
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                  Empower educators with effective teaching methods and timely support.
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
                    Email support for teachers.
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Provide accessible assistance to educators for seamless
                    teaching experiences.
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
                    Intra and Inter school Astronomy Competitions.
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Stimulate interest in astronomy through friendly
                    competitions and collaboration.
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
                    Participation in Asteroid search campaign
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Join a global effort to contribute to scientific research
                    and discovery.
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
                    Additional discounts on Astro camp.
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Reward students with exclusive savings on enriching
                    astrological experiences.
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
                    Membership Certificate.
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Recognize participation and dedication with a formal
                    certificate of membership.
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

export default AstronomyClub;
