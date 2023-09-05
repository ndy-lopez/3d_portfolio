import {
  ror,
  backend,
  react,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  lewagon,
  maisonneuve,
  videotron,
  rogers,
  freelance,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
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
    title: "Freelancer",
    info: "Web Development (In Progress)",
    icon: freelance,
    iconBg: "#29e788",
    date: "Jun 2023 - present",
    points: [
      "Developing a responsive landing page for a pressure washing business using React, demonstrating proficiency in front-end web development and design to my first client.",
      "Crafting a dynamic portfolio website using a variety of technologies, including React, CanvasLoader, Drei, and Vertical Timeline.",
      "Highlighting a commitment to learning and adapting to new technologies and tools by incorporating cutting-edge technologies like Three.js and Framer Motion into my portfolio.",
    ],
  },
  {
    title: "Tech Specialist Consultant",
    info: "Vidéotron (Part-Time)",
    icon: videotron,
    iconBg: "#ffd200",
    date: "Jan 2020 - present",
    points: [
      "Efficiently manage incoming calls, diagnosing customer technical problems and proposing appropriate solutions.",
      "Demonstrate active listening to understand customer needs and to provide appropriate recommendations.",
      "Promote various products and services, resulting in increased customer satisfaction and revenue growth.",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
