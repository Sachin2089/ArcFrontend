export const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/",
      subRoutes: [
        {
          name: "Arc Mobile Planeterium",
          link: "/services/arc-planeterium",
        },
        {
          name: "Arc Astronomy Workshops",
          link: "/services/arc-astronomy-workshop",
        },
        {
          name: "Astrocamp",
          link: "/services/astrocamp",
        },
        {
          name: "Astronomy Clubs",
          link: "/services/astronomy-club",
        },
        {
          name: "Astronomy Labs",
          link: "/services/astronomy-labs",
        },
      ],
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Events",
      link: "/",
      subRoutes: [
        {
          name: "Astrocamp Dahanu",
          link: "/astrocampDahanu",
        },
        {
          name: "Astrocamp Kutch",
          link: "/astrocampKutch",
        },
        {
          name: "Astrocamp Ladakh",
          link: "/astrocampLadakh",
        },
        {
          name: "Astrocamp Pune",
          link: "/astrocampKamshet",
        },
        {
          name: "Astrocamp Rajasthan",
          link: "/astrocampRajashthan",
        },
        {
          name: "Astrocamp Sandhan",
          link: "/astrocampSandhan",
        },
        {
          name: "Astrocamp Spiti",
          link: "/astrocampSpiti",
        },
      ],
    },
  ];
  