import React, {  useState } from "react";
import "../style/gallery.css";
import addFadeup from "../animations/Fadeup";

import bg1 from "../assets/Astrophotography/01.jpg";
import bg2 from "../assets/Astrophotography/02.jpg";
import bg3 from "../assets/Astrophotography/03.jpg";
import bg4 from "../assets/Astrophotography/04.jpg";
import bg5 from "../assets/Astrophotography/05.jpg";
import bg6 from "../assets/Astrophotography/06.jpg";
import bg7 from "../assets/Astrophotography/07.jpg";
import bg8 from "../assets/Astrophotography/08.jpg";
import bg9 from "../assets/Astrophotography/09.jpg";
import bg10 from "../assets/Astrophotography/10.jpg";
import bg11 from "../assets/Astrophotography/11.jpg";
import bg12 from "../assets/Astrophotography/12.jpg";
import bg13 from "../assets/Astrophotography/13.jpg";

import astrocamp1 from "../assets/Astrocamp/astrocamp1.jpg";
import astrocamp2 from "../assets/Astrocamp/astrocamp2.jpg";
import astrocamp3 from "../assets/Astrocamp/astrocamp3.jpg";
import astrocamp4 from "../assets/Astrocamp/astrocamp4.jpg";
import astrocamp5 from "../assets/Astrocamp/astrocamp5.jpg";
import astrocamp6 from "../assets/Astrocamp/astrocamp6.jpg";
import astrocamp7 from "../assets/Astrocamp/astrocamp7.jpg";
import astrocamp8 from "../assets/Astrocamp/astrocamp8.jpg";
import astrocamp9 from "../assets/Astrocamp/astrocamp9.jpg";

import workshop1 from "../assets/Workshop-Gallery/workshop1.jpg";
import workshop2 from "../assets/Workshop-Gallery/workshop2.jpg";
import workshop3 from "../assets/Workshop-Gallery/workshop3.jpg";
import workshop4 from "../assets/Workshop-Gallery/workshop4.jpg";
import workshop5 from "../assets/Workshop-Gallery/workshop5.jpg";
import workshop6 from "../assets/Workshop-Gallery/workshop6.jpg";
import workshop7 from "../assets/Workshop-Gallery/workshop7.jpg";
import workshop8 from "../assets/Workshop-Gallery/workshop8.jpg";
import workshop9 from "../assets/Workshop-Gallery/workshop9.jpg";
import workshop10 from "../assets/Workshop-Gallery/workshop10.jpg";

import dahanu1 from "../assets/Dahanu/dahanu1.jpg";
import dahanu2 from "../assets/Dahanu/dahanu2.jpg";
import dahanu3 from "../assets/Dahanu/dahanu3.jpg";
import dahanu4 from "../assets/Dahanu/dahanu4.jpg";
import dahanu5 from "../assets/Dahanu/dahanu5.jpg";
import dahanu6 from "../assets/Dahanu/dahanu6.jpg";
import dahanu7 from "../assets/Dahanu/dahanu7.jpg";
import dahanu8 from "../assets/Dahanu/dahanu8.jpg";
import dahanu9 from "../assets/Dahanu/dahanu9.jpg";

import kamshet1 from "../assets/Kamshet/kamshet1.jpg"
import kamshet2 from "../assets/Kamshet/kamshet2.jpg"
import kamshet3 from "../assets/Kamshet/kamshet3.jpg"
import kamshet4 from "../assets/Kamshet/kamshet4.jpg"
import kamshet5 from "../assets/Kamshet/kamshet5.jpg"
import kamshet6 from "../assets/Kamshet/kamshet6.jpg"

import kutch1 from "../assets/Kutch/kutch1.jpg"
import kutch2 from "../assets/Kutch/kutch2.jpg"
import kutch3 from "../assets/Kutch/kutch3.jpg"
import kutch4 from "../assets/Kutch/kutch4.jpg"
import kutch5 from "../assets/Kutch/kutch5.jpg"
import kutch6 from "../assets/Kutch/kutch6.jpg"

import ladakh1 from "../assets/Ladakh/ladakh1.jpg"
import ladakh2 from "../assets/Ladakh/ladakh2.jpg"
import ladakh3 from "../assets/Ladakh/ladakh3.jpg"
import ladakh4 from "../assets/Ladakh/ladakh4.jpg"
import ladakh5 from "../assets/Ladakh/ladakh5.jpg"
import ladakh6 from "../assets/Ladakh/ladakh6.jpg"
import ladakh7 from "../assets/Ladakh/ladakh7.jpg"
import ladakh8 from "../assets/Ladakh/ladakh8.jpg"
import ladakh9 from "../assets/Ladakh/ladakh9.jpg"
import ladakh10 from "../assets/Ladakh/ladakh10.jpg"
import ladakh11 from "../assets/Ladakh/ladakh11.jpg"
import ladakh12 from "../assets/Ladakh/ladakh12.jpg"

import pune1 from "../assets/Pune/pune1.jpg"
import pune2 from "../assets/Pune/pune2.jpg"
import pune3 from "../assets/Pune/pune3.jpg"
import pune4 from "../assets/Pune/pune4.jpg"
import pune5 from "../assets/Pune/pune5.jpg"
import pune6 from "../assets/Pune/pune6.jpg"
import pune7 from "../assets/Pune/pune7.jpg"
import pune8 from "../assets/Pune/pune8.jpg"

import rajasthan1 from "../assets/Rajasthan/rajasthan1.jpg"
import rajasthan2 from "../assets/Rajasthan/rajasthan2.jpg"
import rajasthan3 from "../assets/Rajasthan/rajasthan3.jpg"
import rajasthan4 from "../assets/Rajasthan/rajasthan4.jpg"
import rajasthan5 from "../assets/Rajasthan/rajasthan5.jpg"
import rajasthan6 from "../assets/Rajasthan/rajasthan6.jpg"

import sandhan1 from "../assets/Sandhan/sandhan1.jpg"
import sandhan2 from "../assets/Sandhan/sandhan2.jpg"
import sandhan3 from "../assets/Sandhan/sandhan3.jpg"
import sandhan4 from "../assets/Sandhan/sandhan4.jpg"
import sandhan5 from "../assets/Sandhan/sandhan5.jpg"
import sandhan6 from "../assets/Sandhan/sandhan6.jpg"
import sandhan7 from "../assets/Sandhan/sandhan7.jpg"
import sandhan8 from "../assets/Sandhan/sandhan8.jpg"
import sandhan9 from "../assets/Sandhan/sandhan9.jpg"
import sandhan10 from "../assets/Sandhan/sandhan10.jpg"

import spiti1 from "../assets/Spiti/spiti1.jpg"
import spiti2 from "../assets/Spiti/spiti2.jpg"
import spiti3 from "../assets/Spiti/spiti3.jpg"
import spiti4 from "../assets/Spiti/spiti4.jpg"
import spiti5 from "../assets/Spiti/spiti5.jpg"
import spiti6 from "../assets/Spiti/spiti6.jpg"
import spiti7 from "../assets/Spiti/spiti7.jpg"
import spiti8 from "../assets/Spiti/spiti8.jpg"
import spiti9 from "../assets/Spiti/spiti9.jpg"
import spiti10 from "../assets/Spiti/spiti10.jpg"

import trip1 from "../assets/Trips/trip1.jpg"
import trip2 from "../assets/Trips/trip2.jpg"
import trip3 from "../assets/Trips/trip3.jpg"
import trip4 from "../assets/Trips/trip4.jpg"
import trip5 from "../assets/Trips/trip5.jpg"
import {  motion }from "framer-motion"

const image = [
  {
    url: bg1,
    category: "Astrophotography",
  },
  {
    url: bg2,
    category: "Astrophotography",
  },
  {
    url: bg3,
    category: "Astrophotography",
  },
  {
    url: bg4,
    category: "Astrophotography",
  },
  {
    url: bg5,
    category: "Astrophotography",
  },
  {
    url: bg6,
    category: "Astrophotography",
  },
  {
    url: bg7,
    category: "Astrophotography",
  },
  {
    url: bg8,
    category: "Astrophotography",
  },
  {
    url: bg9,
    category: "Astrophotography",
  },
  {
    url: bg10,
    category: "Astrophotography",
  },
  {
    url: bg11,
    category: "Astrophotography",
  },
  {
    url: bg12,
    category: "Astrophotography",
  },
  {
    url: bg13,
    category: "Astrophotography",
  },
  {
    url: astrocamp1,
    category: "Astrocamp",
  },
  {
    url: astrocamp2,
    category: "Astrocamp",
  },
  {
    url: astrocamp3,
    category: "Astrocamp",
  },
  {
    url: astrocamp4,
    category: "Astrocamp",
  },
  {
    url: astrocamp5,
    category: "Astrocamp",
  },
  {
    url: astrocamp6,
    category: "Astrocamp",
  },
  {
    url: astrocamp7,
    category: "Astrocamp",
  },
  {
    url: astrocamp8,
    category: "Astrocamp",
  },
  {
    url: astrocamp9,
    category: "Astrocamp",
  },
  {
    url: workshop1,
    category: "Workshop",
  },
  {
    url: workshop2,
    category: "Workshop",
  },
  {
    url: workshop3,
    category: "Workshop",
  },
  {
    url: workshop4,
    category: "Workshop",
  },
  {
    url: workshop5,
    category: "Workshop",
  },
  {
    url: workshop6,
    category: "Workshop",
  },
  {
    url: workshop7,
    category: "Workshop",
  },
  {
    url: workshop8,
    category: "Workshop",
  },
  {
    url: workshop9,
    category: "Workshop",
  },
  {
    url: workshop10,
    category: "Workshop",
  },
  {
    url: dahanu1,
    category: "Dahanu",
  },

  {
    url: dahanu2,
    category: "Dahanu",
  },
  {
    url: dahanu3,
    category: "Dahanu",
  },
  {
    url: dahanu4,
    category: "Dahanu",
  },

  {
    url: dahanu6,
    category: "Dahanu",
  },
  {
    url: dahanu7,
    category: "Dahanu",
  },
  {
    url: dahanu8,
    category: "Dahanu",
  },
  {
    url: dahanu9,
    category: "Dahanu",
  },
  {
    url: dahanu5,
    category: "Dahanu",
  },
  {
    url: kamshet1,
    category: "Kamshet",
  },
  {
    url: kamshet2,
    category: "Kamshet",
  },
  {
    url: kamshet3,
    category: "Kamshet",
  },
  {
    url: kamshet4,
    category: "Kamshet",
  },
  {
    url: kamshet5,
    category: "Kamshet",
  },
  {
    url: kamshet6,
    category: "Kamshet",
  },
  {
    url: kutch1,
    category: "Kutch",
  },
  {
    url: kutch2,
    category: "Kutch",
  },
  {
    url: kutch3,
    category: "Kutch",
  },
  {
    url: kutch4,
    category: "Kutch",
  },
  {
    url: kutch5,
    category: "Kutch",
  },
  {
    url: kutch6,
    category: "Kutch",
  },
  {
    url: ladakh1,
    category: "Ladakh",
  },
  {
    url: ladakh2,
    category: "Ladakh",
  },
  {
    url: ladakh3,
    category: "Ladakh",
  },
  {
    url: ladakh4,
    category: "Ladakh",
  },
  {
    url: ladakh5,
    category: "Ladakh",
  },
  {
    url: ladakh6,
    category: "Ladakh",
  },
  {
    url: ladakh7,
    category: "Ladakh",
  },
  {
    url: ladakh8,
    category: "Ladakh",
  },
  {
    url: ladakh9,
    category: "Ladakh",
  },
  {
    url: ladakh10,
    category: "Ladakh",
  },
  {
    url: ladakh11,
    category: "Ladakh",
  },
  {
    url: ladakh12,
    category: "Ladakh",
  },
  {
    url: pune1,
    category: "Pune",
  },
  {
    url: pune2,
    category: "Pune",
  },
  {
    url: pune3,
    category: "Pune",
  },
  {
    url: pune4,
    category: "Pune",
  },
  {
    url: pune5,
    category: "Pune",
  },
  {
    url: pune6,
    category: "Pune",
  },
  {
    url: pune7,
    category: "Pune",
  },
  {
    url: pune8,
    category: "Pune",
  },
  {
    url: rajasthan1,
    category: "Rajasthan",
  },
  {
    url: rajasthan2,
    category: "Rajasthan",
  },
  {
    url: rajasthan3,
    category: "Rajasthan",
  },
  {
    url: rajasthan4,
    category: "Rajasthan",
  },
  {
    url: rajasthan5,
    category: "Rajasthan",
  },
  {
    url: rajasthan6,
    category: "Rajasthan",
  },
  {
    url: sandhan1,
    category: "Sandhan",
  },
  {
    url: sandhan2,
    category: "Sandhan",
  },
  {
    url: sandhan3,
    category: "Sandhan",
  },
  {
    url: sandhan4,
    category: "Sandhan",
  },
  {
    url: sandhan5,
    category: "Sandhan",
  },
  {
    url: sandhan6,
    category: "Sandhan",
  },
  {
    url: sandhan7,
    category: "Sandhan",
  },
  {
    url: sandhan8,
    category: "Sandhan",
  },
  {
    url: sandhan9,
    category: "Sandhan",
  },
  {
    url: sandhan10,
    category: "Sandhan",
  },
  {
    url: spiti1,
    category: "Spiti",
  },
  {
    url: spiti2,
    category: "Spiti",
  },
  {
    url: spiti3,
    category: "Spiti",
  },
  {
    url: spiti4,
    category: "Spiti",
  },
  {
    url: spiti5,
    category: "Spiti",
  },
  {
    url: spiti6,
    category: "Spiti",
  },
  {
    url: spiti7,
    category: "Spiti",
  },
  {
    url: spiti8,
    category: "Spiti",
  },
  {
    url: spiti9,
    category: "Spiti",
  },
  {
    url: spiti10,
    category: "Spiti",
  },
  {
    url: trip1,
    category: "Trips",
  },
  {
    url: trip2,
    category: "Trips",
  },
  {
    url: trip3,
    category: "Trips",
  },
  {
    url: trip4,
    category: "Trips",
  },
  {
    url: trip5,
    category: "Trips",
  },
];

import { useEffect } from "react";
function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(image);
  const filters = [
    "All",
    "Dahanu",
    "Kamshet",
    "Kutch",
    "Ladakh",
    "Pune",
    "Rajasthan",
    "Sandhan",
    "Spiti",
    "Astrocamp",
    "Astrophotography",
    "Trips",
    "Workshop",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilter(selectedCategory);
  };

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredItems(image);
    } else {
      const tempItems = image.filter(
        (item) => item.category === selectedFilter
      );
      setFilteredItems(tempItems);
    }
  }, [selectedFilter]);

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#32044e] via-[#000005] to-[#030005] xl:px-[220px] py-32 lg:px-[150px] md:px-[80px] sm:px-[10px] bg-[#0B0B0F] xl:py-40 lg:py-32  flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-[32px] mb-4 sm:text-[42px] md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[72px] Grotesk-Black leading-tight md:leading-[72px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
          Explore the Cosmos
        </h1>
        <p className="text-xl lg:text-2xl Grotesk-Normal text-center text-neutral-400 mb-24 px-8 lg:px-96">
          Behold stunning images of captured celestial wonders. Embark on
          a visual journey beyond the stars and discover the magic of
          night sky.
        </p>
      </div>
      <div>
        {filters.map((category, idx) => (
          <button
            key={`filters-${idx}`}
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilter === category ? "active" : ""
            } px-4 py-2 Grotesk-Normal text-xl`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="w-full">
        <div  className="columns-1 gap-4 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {filteredItems.map((item, idx) => (
            <img 
              key={`image-${idx}`}
              className="border-white border-4 rounded-[7px]"
              src={item.url}
              alt={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
