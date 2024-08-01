import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  kafka,
  docker,
  european,
  aristotle,
  carrent,
  jobit,
  tripguide,
  threejs,
  spring,
  oracle,
  postgres,
  java,
  android,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "kafka",
    icon: kafka,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "android",
    icon: android,
  },
];

const experiences = [
  {
    title: "Computer Science",
    company_name: "Aristotle University of Thessaloniki",
    icon: aristotle,
    iconBg: "#383E56",
    date: "Oct 2018 - Oct 2023",
    points: [
      "Focused on backend development using Spring Boot and Oracle DB.",
      "Participated in migrations of legacy enterprise applications.",
      "Implemented robust RESTful APIs, ensured data integrity, and optimized database queries for performance improvements.",
      "Used Talend ETL in conjunction with Azure Databricks for various data operations across multiple projects.",
      "Expanded role to include frontend development using ReactJS with TypeScript and Tailwind CSS.",
      "Joined a new project for the state's general chemistry, developing dynamic and responsive web interfaces.",
      "Collaborated with designers to implement design mockups.",
      "Integrated frontend components with backend services.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "European Dynamics",
    icon: european,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Focused on backend development using Spring Boot and Oracle DB.",
      "Participated in migrations of legacy enterprise applications.",
      "Implemented robust RESTful APIs, ensured data integrity, and optimized database queries for performance improvements.",
      "Used Talend ETL in conjunction with Azure Databricks for various data operations across multiple projects.",
      "Expanded role to include frontend development using ReactJS with TypeScript and Tailwind CSS.",
      "Joined a new project for the state's general chemistry, developing dynamic and responsive web interfaces.",
      "Collaborated with designers to implement design mockups.",
      "Integrated frontend components with backend services.",
    ],
  },
];

const projects = [
  {
    name: "Traddiction",
    description:
      "Web-based platform that allows users to gather and exchange items like clothes, PC hardware, and more , providing a convenient and efficient solution for reducing waste , discovering new treasures and contributing to a greener planet.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sarmatas00/TRADdiction",
  },
  {
    name: "Synergia",
    description:
      "An online conference platform that enhances user engagement and telecollaboration, by real-time voice processing and statistical information, face expressions analysis and group chat messaging.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sarmatas00/Synergia",
  },
  {
    name: "Budget",
    description:
      "A native Android application that serves as a tool for users to manage their daily economics through registering their spendings and track their expenses overtime.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Maven",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sarmatas00/Android-project",
  },
  {
    name: "Personal Portfolio",
    description:
      "My personal website portfolio, where I showcase my past projects, experience and skills, while providing a direct way for communication ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sarmatas00/Portfolio/tree/master",
  },
];

export { services, technologies, experiences, projects };
