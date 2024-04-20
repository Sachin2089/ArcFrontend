import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../fonts/stylesheet.css"

const Testimonials = () => {
  // Array of testimonial objects
  const testimonials = [
    {
      name: "Janvi Rajani",
      content:
        "The overall experience was really good especially the guidance in whole camp, from basics to going in depth about several topics everything was close to perfect. the start gazing session in the freezing night was the best part of the camp,the team was cool and friendly",
    },
    {
      name: "James Mondal",
      content:
        "Thank you @arceducators, it was my first solo trip and first stargazing camp and you guys rocked it. The location was a bit far for me cause I hate traveling but that place was definitely worth it, thanks for everything and hope to meet you guys soon for the next holiday",
    },
    {
      name: "Ananya",
      content:
        "Stargazing and camping in Leh Ladakh was absolutely surreal. Arc educators team arranged overnight sessions to explore the night sky and during the day we visited major tourist spots, which made it a perfect package for someone who’s looking to travel and do stargazing at the same time. Big shout out to Sameer Mathe who made the sessions so fun & engaging.",
    },
    {
      name: "Ambika Pandey",
      content:
        "Greaaat experience spending the night with this team of astronomers who make looking at stars and the sky for hours a lot of fun and educational! Would HIGHLY recommend. An absolute 12/10 experience. Go for a date night or with a bunch of your friends, it's gonna be a memorable experience.",
    },
    {
      name: "Rohit Arkoni",
      content:
        "Had a great experience with Arc Educators at their astrocamp in Sandhan Valley. We got to learn a lot about what we see in the sky and also got to observe objects in the sky through their telescopes. Overall a very nice experience, would highly recommend.",
    },
    {
      name: "Anushka Kumbhar",
      content:
        "Enchanting can suffix the total experience. Definitely give it a try either way if you are interested in astronomy or not, bet you will post this experience. Good staff, decent food, and lots of core memory for sure. Thank you ARC Educators for gifting with a beautiful core memory.",
    },
    {
      name: "Tanvi Bangur",
      content:
        "Had the most amazing time travelling with Arc Educators through Leh, Ladakh. The stargazing sessions were super interesting! We were able to see a whole bunch of constellations and some planets with the telescope. All in all it was a wonderful experience. Loved every bit!",
    },
    {
      name: "Gurmit Dharani",
      content:
        "Scintillating experience that will be cherished throughout our life.. Purna Vyas’s energy was so strong and the knowledge of stars was just on the back of her hand… there was no drop moment through out the night.. cherry on the cake was the music session which peeped up our energy.",
    },
  ];

  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      className="w-64 mx-auto mt-3"
    >
      {/* Using map to render testimonials dynamically */}
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <div className=" border border-[#333333] bg-[#1c1d22] rounded-[10px] lg:h-[280px] h-[450px] w-full flex items-center justify-start flex-col  text-white text-center py-8 px-5">
            <h1 className="text-2xl lg:text-3xl Grotesk-Black">{testimonial.name}</h1>
            <p className="my-4 px-4  lg:px-16 Grotesk-Normal text-base  italic lg:text-xl text-neutral-400">{testimonial.content}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
