import {
  ror,
  backend,
  react,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  ruby,
  git,
  figma,
  postsql,
  lewagon,
  maisonneuve,
  freelance,
  rogers,
  photography,
  codex,
  mapt,
  landingpage
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Ruby on Rails Developer",
    icon: ror,
  },
  {
    title: "Back-End Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ruby on Rails",
    icon: ruby,
  },
  {
    name: "PostgreSQL",
    icon: postsql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Le Wagon - Web Development",
    info: "On-site",
    icon: lewagon,
    iconBg: "#fd1015",
    date: "Apr 2023 - Jun 2023",
    points: [
      "Learned software fundamentals, databases, front-end development, and web design through Figma, including key frameworks like Ruby on Rails and StimulusJS.",
      "Gained experience in deploying complete web applications and adopting best-in-class development workflows, including collaboration on GitHub and automated testing.",
      "Built an app designed to help individuals make an educated and responsible decisions when it comes to relocating or finding a new place to stay, with Ruby on Rails, while collaborating in a team.",
    ],
  },
  {
    title: "Collège de Maisonneuve - Introduction to JavaScript",
    info: "Online",
    icon: maisonneuve,
    iconBg: "#9ad7dc",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Learned about basic JavaScript, ES6, regular expressions, Object Oriented Programming, and functional programming. ",
      "Covered fundamental concepts of algorithms and basic data structures.",
      "Development of the skills needed to design an IT solution that responds to common problems.",
    ],
  },
  {
    title: "Web Development",
    info: "Freelance",
    icon: freelance,
    iconBg: "#29e788",
    date: "June 2023 - present",
    points: [
      "Developing a responsive landing page for a pressure washing business using React, demonstrating proficiency in front-end web development and design to my first client.",
      "Crafting a dynamic portfolio website using a variety of technologies, including React, CanvasLoader, Drei, and Vertical Timeline.",
      "Highlighting a commitment to learning and adapting to new technologies and tools by incorporating cutting-edge technologies like Three.js and Framer Motion into my portfolio.",
    ],
  },
  {
    title: "Photography",
    info: "Events | Portraits | Landscape",
    icon: photography,
    iconBg: "#f7c37a",
    date: "Dec 2019 - present",
    points: [
      "Captured memorable moments at various events, ensuring high-quality photographs that met client expectations.",
      "Conducted portrait sessions, demonstrating strong interpersonal skills to create a comfortable and enjoyable environment for subjects.",
      "Utilized self-directed learning to continuously improve technical skills and stay updated with industry trends.",
    ],
  },
  {
    title: "Credit Analyst",
    info: "Rogers Communications Inc.",
    icon: rogers,
    iconBg: "#ae171d",
    date: "Jan 2014 - Dec 2019",
    points: [
      "Successfully proposed solutions and negotiated payment terms, resulting in improved customer relationships and reduced late payments.",
      "Offered sustainable solutions to improve the customer experience and strengthen loyalty.",
      "Played an advisory role with customers, guiding them through the products and services available to effectively meet their needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Gilles Bombardier",
    designation: "Financial Advisor",
    company: "Laurentian Bank",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Alexandre Pilon",
    designation: "Retail Sales",
    company: "Loto-Québec",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Juan Carlos Pinto",
    designation: "Business Owner",
    company: "NPE",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mapping Web Application",
    description:
      "Discover mApt, a platform designed to empower users in making informed decisions when searching for a new place to live. With the use of a map and pinpoints, users can easily compare distances and commute times to their, helping them assess how a prospective location fits their lifestyle preferences. Explore how this innovative tool streamlines the search for the perfect place to call home.",
    tags: [
      {
        name: "rubyonrails",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: mapt,
    source_code_link: "https://github.com/ndy-lopez/mApt",
  },
  {
    name: "ChatGPT Clone",
    description:
      "This project showcases my implementation of a ChatGPT clone, powered by OpenAI's API. With this application, I've harnessed ChatGPT's capabilities to create an interactive chatbot experience. Explore how I integrated OpenAI's technology into this app.",
    tags: [
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "openai_API",
        color: "orange-text-gradient",
      },
    ],
    image: codex,
    source_code_link: "https://github.com/ndy-lopez/node_OpenAI_Codex",
  },
  {
    name: "Business Landing Page",
    description:
      "This project represents my work for my first freelance client. It involves the creation of an online platform designed to highlight the client's commitment to maintaining clean and safe kitchen environments in restaurants. The platform also serves as a showcase for the client's pricing structure and the range of services they offer. Explore this project to see how I brought their vision to life.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrapcss",
        color: "blue-text-gradient",
      },
    ],
    image: landingpage,
    source_code_link: "https://github.com/ndy-lopez/nvp-landing-page",
  },
];

export { services, technologies, experiences, testimonials, projects };
