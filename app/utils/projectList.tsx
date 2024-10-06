import {
  JspSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "Cadmius",
    subtitle: "Handwriting and Text Converison Website",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      
      {
        name: "MongoDB",
        icon: (
          <MongoDBSVG
            color="#000000"
            size={16}
          />
        ),
      },

      {
        name: "CSS",
        icon: (
          <CSSSVG
            color="#000000"
            size={16}
          />
        ),
      },
      
    ],
    description:
      "This website lets you easily convert your handwriting into a personalized font and also transforms digital text into lifelike handwriting. Perfect for adding a personal touch to documents and designs!",
    imgUrl: "/videos/cad.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Nightshade2003",
    websiteUrl: "https://github.com/Nightshade2003/Handwriting-and-Text-Conversion-Website.git",
  },
  {
    icon: <ShopApiSVG />,
    title: "Hospital Management System",
    subtitle: "Inventory and Scheduling System",
    technologies: [
      {
        name: "CSS Modules",
        icon: (
          <CSSSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
      {
        name: "Jsp",
        icon: (
          <JspSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
    ],
    description:
      "HIMS is a streamlined hospital inventory and scheduling management system designed to optimize resource tracking and staff coordination for healthcare facilities",
    imgUrl: "/videos/hims.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Nightshade2003",
    websiteUrl: "https://github.com/Nightshade2003/Hospital-Inventory-and-Scheduling-Management-System/blob/main/README.md",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "Respika",
    subtitle: "Cooking Website",
    technologies: [
    ],
    description:
      "Respika is your go-to recipe generator, offering a sleek, modern design that inspires culinary creativity. Input your available ingredients and preferences to generate personalized meal ideas, complete with clear instructions and vibrant visuals. Enjoy an effortless cooking experience on any device!",
    imgUrl: "/videos/food.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Nightshade2003",
    websiteUrl: "https://www.figma.com/design/MJF5FwfDscs0OeXaxrEROo/Recipe-Generator-Website?m=auto&t=UyUFQi3gUmfRMZrV-6",
  },
  {
    icon: <ShopApiSVG />,
    title: "Finance App",
    subtitle: "Finance App",
    technologies: [
    ],
    description:
      "Introducing Finance App, your personal finance companion designed for simplicity and efficiency. Track your expenses, set budgets, and monitor your investments with a sleek, intuitive interface. Our app provides insightful analytics, helping you make informed financial decisions while keeping your data secure. Manage your money effortlessly, anytime, anywhere!",
    imgUrl: "/videos/finance.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Nightshade2003",
    websiteUrl: "https://www.figma.com/design/IECgG3epziE0xUxTvHYfmI/Finance-App-rework?m=auto&t=LwhwrM3p422xkBag-6",
  },

  {
    icon: <ShopApiSVG />,
    title: "Finance App",
    subtitle: "Finance App",
    technologies: [
    ],
    description:
      "Introducing Finance App, your personal finance companion designed for simplicity and efficiency. Track your expenses, set budgets, and monitor your investments with a sleek, intuitive interface. Our app provides insightful analytics, helping you make informed financial decisions while keeping your data secure. Manage your money effortlessly, anytime, anywhere!",
    imgUrl: "/videos/finance.webp",
    videoUrl: "",
    githubUrl: "https://github.com/Nightshade2003",
    websiteUrl: "https://www.figma.com/design/IECgG3epziE0xUxTvHYfmI/Finance-App-rework?m=auto&t=LwhwrM3p422xkBag-6",
  },
];
