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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  google,
  amazon,
  netflix,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Specialist",
    icon: backend,
  },
  {
    title: "Technical Writer",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Google",
    icon: google,
    iconBg: "#F7C223",
    date: "March 2020 - April 2021",
    points: [
      "Collaborated with design teams to build scalable UI components.",
      "Optimized web pages for performance and accessibility.",
      "Wrote reusable code for large-scale projects.",
      "Participated in agile sprint meetings and provided regular updates.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#FF9900",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designed and implemented RESTful APIs for e-commerce applications.",
      "Maintained and upgraded legacy systems for better performance.",
      "Handled database architecture and schema migrations.",
      "Worked closely with DevOps to ensure system reliability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Netflix",
    icon: netflix,
    iconBg: "#E50914",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed core features for a high-traffic streaming platform.",
      "Integrated third-party services for enhanced functionality.",
      "Built responsive interfaces using React and Tailwind CSS.",
      "Mentored junior developers and reviewed pull requests.",
    ],
  },
  {
    title: "Technical Consultant",
    company_name: "Meta",
    icon: meta,
    iconBg: "#1877F2",
    date: "Jan 2023 - Present",
    points: [
      "Provided technical advice for social media platform innovations.",
      "Developed tools to analyze user data for insights.",
      "Collaborated with cross-functional teams to achieve project goals.",
      "Delivered presentations on emerging web technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This developer brought our vision to life with professionalism and creativity.",
    name: "Jane Doe",
    designation: "CEO",
    company: "Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    testimonial:
      "An exceptional team player who went above and beyond to meet our requirements.",
    name: "John Smith",
    designation: "Project Manager",
    company: "Innovate Corp",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    testimonial:
      "Thanks to their work, our project was a huge success, exceeding all expectations.",
    name: "Emily Clark",
    designation: "Product Owner",
    company: "NextGen Inc",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

const projects = [
  {
    name: "E-Shop",
    description:
      "An online shopping platform offering users a seamless experience to browse and purchase products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job Finder",
    description:
      "A platform where job seekers can search for opportunities and employers can post vacancies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Companion",
    description:
      "A travel app that helps users discover destinations, book trips, and manage itineraries.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
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
