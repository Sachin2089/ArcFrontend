import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../style/index.css";
import bg from "../../assets/Bg.jpg";
import { Link } from "react-router-dom";
import Workshop1 from "../../assets/Workshops/workshop1.jpg";
import Workshop2 from "../../assets/Workshops/workshop2.jpg";
import Workshop3 from "../../assets/Workshops/workshop3.jpg";
import Workshop4 from "../../assets/Workshops/workshop4.jpg";
import Workshop5 from "../../assets/Workshops/workshop5.jpg";
import Workshop6 from "../../assets/Workshops/workshop6.jpg";
import Workshop7 from "../../assets/Workshops/workshop7.jpg";
import Workshop8 from "../../assets/Workshops/workshop8.jpg";
import Workshop9 from "../../assets/Workshops/workshop9.jpg";
import Workshop10 from "../../assets/Workshops/workshop10.jpg";
import { motion } from "framer-motion";
import addFadeup from "../../animations/Fadeup";
import Carousel from "../../components/Carousel";
import { HashLink } from "react-router-hash-link";
import CarouselCC from "../../components/Carousel";
import { useEffect } from "react";
const images = [
  `${Workshop1}`,
  `${Workshop2}`,
  `${Workshop3}`,
  `${Workshop4}`,
  `${Workshop5}`,
  `${Workshop6}`,
  `${Workshop7}`,
  `${Workshop8}`,
  `${Workshop9}`,
  `${Workshop10}`,
];

function ArcWorkshop() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="min-h-screen mb-16 xl:px-[220px] py-32 flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:h-[720px] sm:auto w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={addFadeup}
          className="h-full xl:w-[50%] flex flex-col items-center xl:items-start  justify-center "
        >
          <motion.h1
            variants={addFadeup}
            className="Grotesk-Black text-[28px] xl:text-[54px] xl:mb-4 mb text-white"
          >
            Arc Astronomy Workshop
          </motion.h1>
          <motion.p
            variants={addFadeup}
            className="xl:text-2xl text-base text-justify  Grotesk-Normal xl:text-left text-neutral-400 xl:mb-10 mb-4 p-8 xl:p-0  xl:pr-20"
          >
            At Arc Educators, we believe that the wonders of the universe are
            not just confined to textbooks or distant images on a screen. <br />
            We bring the vastness of space directly to your school through our
            engaging and interactive astronomy workshops.
            <br />
            Our programs cater to students of all ages and levels, inspiring a
            lifelong passion for astronomy and science.
          </motion.p>
          <motion.div
            variants={addFadeup}
            className="Grotesk-Black text-black text-base lg:text-xl border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md  xl:px-12 px-4 lg:px-5 xl:py-4 py-3 lg:py-2 mr-2 mb-16 xl:mb-0 focus:outline-none"
          >
            <HashLink to="#main1" smooth>
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
      <div id="main1">
        <section class="content lg:mt-20 mt-0">
          <div class="row">
            <div class="col">
              <div class="text-block">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeIn" }}
                  class="Grotesk-Black text-center lg:text-left"
                >
                  Why Choose Arc Educators
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
                    Hands-On Learning
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl  text-neutral-400">
                    Our workshops are designed to be interactive and hands-on,
                    allowing students to actively engage with the concepts of
                    astronomy. From building model solar systems to conducting
                    simulated space missions, we ensure that every student is
                    fully immersed in the learning experience.
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
                    Customized Curriculum
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Whether you're teaching kindergarteners or high school
                    seniors, we tailor our workshops to suit the needs and
                    curriculum of each grade level. Our experienced educators
                    work closely with teachers to align our activities with
                    classroom learning objectives, ensuring a seamless
                    integration of astronomy into the curriculum.
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
                    State-of-the-Art Equipment
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Explore the cosmos like never before with our cutting-edge
                    telescopes and observation tools. Students have the
                    opportunity to observe celestial objects up close, from the
                    phases of the moon to spots on sun, fostering a deeper
                    appreciation for the wonders of the universe.
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
                    Expert Guidance
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Explore the cosmos like never before with our cutting-edge
                    Our team of educators comprises passionate astronomers and
                    science communicators who are dedicated to inspiring the
                    next generation of space explorers. With their expertise and
                    enthusiasm, they ignite curiosity and foster critical
                    thinking skills in students, empowering them to ask
                    questions and seek answers about the universe.
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
                  Our Workshop Levels
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
                    1. Astro-Wonderers
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Perfect for grade 1 & 2 learners, this workshop introduces
                    basic concepts such as the Earth, Sun , Moon and solar
                    system through engaging activities and storytelling.
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
                    2. Astro-Explorers
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Designed for grade 3 & 4 school students, this workshop
                    delves deeper into topics like solar system, terrestrial &
                    gaseous planets, eclipse & Constellations.
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
                    3. Astro-Discoverers
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Secondary school students from grade 5 to 7 with a passion
                    for science can delve into intermediate topics such as Space
                    Missions, Rockets, Life of Astronaut, Internation Space
                    Station & Telescopes
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
                    4. Astro-Researchers
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    Higher secondary students from grades 8 to 12 with a hunger
                    for research in Astronomy can delve into advanced topics
                    such as Space debris, Optics of Telescopes, Stellar
                    Evolution, Blackholes & Exoplanets.
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
                    Teachers Training
                  </h3>
                  <div class="card_text Grotesk-Normal text-xl text-neutral-400">
                    We also offer professional development workshops for
                    educators, equipping them with the knowledge and resources
                    to incorporate astronomy into their teaching practices
                    effectively.
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

export default ArcWorkshop;
