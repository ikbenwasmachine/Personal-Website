export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "/images/logos_zusters/logo-bartosz.svg",
      name: "Bartosz",
      description: "Placeholder beschrijving voor Bartosz.",
      link: "#",
    },
    {
      id: 2,
      image: "/images/logos_zusters/logo-detesters.svg",
      name: "De Testers",
      description: "Placeholder beschrijving voor De Testers.",
      link: "#",
    },
    {
      id: 3,
      image: "/images/logos_zusters/logo-ptwee-simple.svg",
      name: "PTwee Simple",
      description: "Placeholder beschrijving voor PTwee Simple.",
      link: "#",
    },
    {
      id: 4,
      image: "/images/logos_zusters/logo-squerist.svg",
      name: "Squerist",
      description: "Placeholder beschrijving voor Squerist.",
      link: "#",
    },
    {
      id: 5,
      image: "/images/logos_zusters/logo-techchamps.webp",
      name: "TechChamps",
      description: "Placeholder beschrijving voor TechChamps.",
      link: "#",
    },
    {
      id: 6,
      image: "/images/logos_zusters/logo-testcoders.svg",
      name: "TestCoders",
      description: "Placeholder beschrijving voor TestCoders.",
      link: "#",
    }
  ];
  res.status(200).json(data);
};
