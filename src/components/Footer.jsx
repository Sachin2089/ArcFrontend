import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import Logo from "../assets/Logo.png";

const LINKS = [
  {
    title: "Events",
    items: [
      { name: "Spiti Valley", path: "/astrocampSpiti" },
      { name: "Rajasthan", path: "/astrocampRajasthan" },
      { name: "Ladakh", path: "/astrocampLadakh" },
      { name: "Sandhan", path: "/astrocampSandhan" },
      { name: "Dahanu", path: "/astrocampDahanu" },
      { name: "Kamshet", path: "/astrocampKamshet" },
      { name: "Kutch", path: "/astrocampKutch" },
    ],
  },
  {
    title: "Gallery",
    items: [
      { name: "Dahanu", path: "/gallery" },
      { name: "Sandhan", path: "/gallery" },
      { name: "Ladakh", path: "/gallery" },
      { name: "Spiti", path: "/gallery" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Arc Planeterium", path: "/services/arc-planeterium" },
      { name: "Astronomy Workshop", path: "/services/arc-atronomy-workshop"},
      { name: "AstroCamp", path: "/services/astrocamp" },
      { name: "Astronomy Club", path: "/services/astronomy-club" },
      { name: "Astronomy Labs", path: "/services/astronomy-labs" },
    ],
  },
];

const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="relative w-full pt-10 border-t border-[#333333] bg-[#1c1d22]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <img src={Logo} className="mr-3  lg:h-32 h-16" alt="Logo" />
          <div className="grid grid-cols-4 justify-center gap-24">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 text-base mr-4 Apercu-Regular opacity-80"
                >
                  {title}
                </Typography>
                {items.map(({ name, path }) => (
                  <li key={name}>
                    <Typography
                      as={Link}
                      to={path}
                      className="text-neutral-500 py-1.5 Apercu-Light transition-colors hover:text-blue-gray-900"
                    >
                      {name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Arc Educators</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
