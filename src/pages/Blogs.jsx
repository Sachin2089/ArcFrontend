import React from "react";
import "../fonts/stylesheet.css";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import bg from "../assets/Bg.jpg";
import { motion } from "framer-motion";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.substr(0, maxLength);
  return (
    truncatedText.substr(
      0,
      Math.min(truncatedText.length, truncatedText.lastIndexOf(" "))
    ) + " ..."
  );
}

const blogData = [
  {
    id: 1,
    title: "Exploring the Enchanting Spiti Valley",
    content:
      "Nestled amidst the rugged terrains of the Himalayas lies the enchanting Spiti Valley, a destination that beckons adventurers and nature enthusiasts alike. With its surreal landscapes, ancient monasteries, and vibrant culture, Spiti offers a once-in-a-lifetime experience. Trekking through its remote villages, encountering friendly locals, and witnessing the majestic snow-capped peaks make for unforgettable memories. Whether you're a thrill-seeker or a soul-searcher, Spiti Valley promises an adventure like no other.",
  },
  {
    id: 2,
    title: "Unraveling the Mysteries of Machu Picchu",
    content:
      "Perched high in the Andes Mountains of Peru, Machu Picchu stands as a testament to the ingenuity of the ancient Inca civilization. This UNESCO World Heritage Site, shrouded in mystery and surrounded by breathtaking scenery, captivates visitors with its awe-inspiring architecture and mystical ambiance. Exploring the terraced fields, temples, and stone ruins transports you back in time to a bygone era, where secrets whisper in the mountain breeze. Machu Picchu isn't just a destination; it's a journey through history and wonder.",
  },
  {
    id: 3,
    title: "Sailing the Turquoise Waters of the Maldives",
    content:
      "Imagine waking up to the gentle sound of waves lapping against the hull of your private yacht, surrounded by endless stretches of crystal-clear waters and powder-white beaches. Welcome to the Maldives, a tropical paradise like no other. Whether you're snorkeling among vibrant coral reefs, indulging in a romantic sunset cruise, or simply lounging on the deck with a cocktail in hand, the Maldives offers the ultimate luxury escape. With its serene beauty and warm hospitality, it's no wonder why this Indian Ocean gem is a dream destination for travelers worldwide.",
  },
  {
    id: 4,
    title: "Discovering the Rich Cultural Heritage of Kyoto",
    content:
      "Step into a world where tradition meets modernity, where ancient temples coexist with bustling city streets – welcome to Kyoto, Japan's cultural heart. Home to over 2,000 temples and shrines, Kyoto is a treasure trove of history and heritage. Whether you're strolling through the iconic bamboo groves of Arashiyama, participating in a traditional tea ceremony, or admiring the breathtaking architecture of Kinkaku-ji, Kyoto offers a glimpse into Japan's rich cultural tapestry. With each step, you'll find yourself immersed in a realm of beauty and serenity.",
  },
  {
    id: 5,
    title: "Journeying Through the Scottish Highlands",
    content:
      "Venture into the untamed beauty of the Scottish Highlands, where rugged mountains, mysterious lochs, and ancient castles await. Whether you're hiking along the windswept cliffs of the Isle of Skye, tracing the footsteps of legendary warriors at Eilean Donan Castle, or savoring a wee dram of Scotch whisky by a crackling fire, the Highlands enchant with their wild allure and timeless charm. With every mist-covered glen and jagged peak, you'll discover a piece of Scotland's rich history and natural splendor.",
  },
  {
    id: 6,
    title: "Embarking on an African Safari Adventure",
    content:
      "Experience the thrill of the wild as you embark on an African safari adventure across the vast savannas and dense jungles of the continent. From witnessing the Great Migration in the Serengeti to tracking gorillas in the misty mountains of Rwanda, Africa offers a safari experience like no other. As you traverse the untamed wilderness in search of the Big Five and other exotic wildlife, you'll be immersed in a world of raw beauty and primal energy. With each safari drive, you'll forge unforgettable memories and gain a deeper appreciation for the wonders of the natural world.",
  },
  {
    id: 7,
    title: "Savoring the Flavors of Italy's Amalfi Coast",
    content:
      "Indulge your senses in the culinary delights and coastal splendor of Italy's Amalfi Coast, where every twist and turn reveals a new culinary treasure or breathtaking vista. Whether you're sipping limoncello overlooking the azure waters of the Mediterranean, feasting on freshly caught seafood in a quaint trattoria, or wandering through the lemon-scented streets of Positano, the Amalfi Coast captivates with its intoxicating blend of flavors and scenery. With each dish, each sunset, you'll fall more deeply in love with the charm and romance of this Italian gem.",
  },
  {
    id: 8,
    title: "Exploring the Wonders of Petra, Jordan",
    content:
      "Journey to the ancient city of Petra, hidden away in the desert canyons of Jordan, and discover a world of wonder carved from rose-colored stone. As you pass through the towering Siq and emerge into the grandeur of the Treasury, you'll be transported back in time to a civilization lost to the sands of history. Whether you're marveling at the intricately carved facades, hiking to the Monastery atop the cliffs, or simply soaking in the mystical ambiance of this UNESCO World Heritage Site, Petra leaves an indelible mark on all who wander its ancient streets.",
  },
  {
    id: 9,
    title: "Immersing Yourself in the Vibrant Culture of Barcelona",
    content:
      "Experience the vibrant energy and cultural richness of Barcelona, where every corner reveals a new artistic masterpiece or culinary delight. From the whimsical architecture of Antoni Gaudí to the bustling markets of La Boqueria, Barcelona enchants with its eclectic blend of old-world charm and modern flair. Whether you're exploring the winding streets of the Gothic Quarter, lounging on the sun-kissed beaches of Barceloneta, or savoring tapas and sangria late into the night, Barcelona invites you to lose yourself in its infectious joie de vivre.",
  },
];

function Blogs() {
  return (
    <div className="min-h-screen px-[220px] bg-[#0B0B0F] py-40 flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="Grotesk-Black text-[54px] text-white">
          Journey Journals
        </h1>
        <p className="text-2xl Grotesk-Normal text-center text-neutral-400 mb-24">
          Dive into a world of adventure and discovery with our travel blogs.
          <br></br>From remote mountain villages to bustling city streets, each
          blog invites you<br></br>on a journey to uncover the hidden gems
          around the country.
        </p>
      </div>
      
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="h-[600px] w-[420px] border border-[#333333] bg-[#181D23] rounded-[10px] p-2 flex flex-col items-center justify-start m-2"
        >
          <div className="h-[240px] w-full  rounded-[7px] p">
            <img src={bg} className="h-full rounded-[7px]"></img>
          </div>
          <div className="h-[280px] w-full p-2 text-white overflow-hidden ">
            <h1 className="Apercu-Regular text-2xl my-2">
              {truncateText(blog.title, 70)}
            </h1>
            <p className="text-base Apercu-Regular text-neutral-500">
              {truncateText(blog.content, 390)}
            </p>
          </div>
          <div className="h-[70px] w-full flex items-center justify-between pl-2">
            <button className="mr-4 h-[40px] text-neutral-900 w-[120px] bg-yellow-400 rounded-[7px] Apercu-Medium">
              Read More
            </button>
            <div className="h-[45px] text-white  text-2xl w-[230px] flex items-center justify-end px-4 text-end">
              <Link>
                <FiShare2 />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
