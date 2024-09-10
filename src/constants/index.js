import { table } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  jupyter,
  pandas,
  powerbi,
  python,
  sklearn,
  tensorflow,
  git,
  numpy,
  opencv,
  keras,
  pytorch,
  tableau,
  mcit,
  fcih,
  rafiki,
  nti,
  excel,
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
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "AI Algorithms",
    icon: mobile,
  },
  {
    title: "Python Development",
    icon: backend,
  },
  {
    title: "Computer Vision",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Scikit-Learn",
    icon: sklearn,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyter,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Summer Training: Software Engineering",
    company_name: "Ministry of Communications and Technology",
    icon: mcit,
    iconBg: "#383E56",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Hands-on experience in Power BI for data visualization and reporting.",
      "Learned advanced software engineering practices, including system architecture, diagrams and design patterns.",
      "Introduced to .NET development, building foundational knowledge in backend systems.",
    ],
  },
  {
    title: "Summer Training: Data Analysis Track",
    company_name: "National Technology Institute (NTI)",
    icon: nti,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Comprehensive training in data analytics, utilizing tools such as SQL, Excel, Power BI, Power Query, Tableau, Python, Pandas, R, and statistics.",
      "Completed practical projects involving statistical analysis and reporting using industry-standard tools.",
      "Received dedicated training on freelancing strategies and professional development in soft skills.",
    ],
  },
  {
    title: "Natural Language Processing Project",
    company_name: "HU",
    icon: fcih,
    iconBg: "#383E56",
    date: "Apr 2024 - May 2024",
    points: [
      "Developed an Arabic auto-correct system using AraBERT and neural networks to improve linguistic accuracy.",
    ],
  },
  {
    title: "AI/ML Member",
    company_name: "Rafiki",
    icon: rafiki,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Collaborated in a student-led initiative to create a chatbot for the Rafiki partner system, enhancing user engagement.",
    ],
  },
  {
    title: "Machine Learning Project",
    company_name: "HU",
    icon: fcih,
    iconBg: "#383E56",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Applied KNN and Linear Regression for numerical datasets and K-means and Logistic Regression for image datasets.",
    ],
  },
  {
    title: "Artificial Intelligence Project",
    company_name: "HU",
    icon: fcih,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Implemented genetic algorithms to solve complex JSP problems, optimizing search and solution paths.",
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
    name: "Deep Learning",
    description:
    "Developed a system for MRI classification to identify brain tumors, utilizing Artificial Neural Networks (ANN) and Support Vector Machines (SVM). With GUI",
    tags: [
      {
        name: "Keras",
        color: "blue-text-gradient",
      },
      {
        name: "SVM",
        color: "green-text-gradient",
      },
      {
        name: "ANN",
        color: "pink-text-gradient",
      },
    ],
    image: keras,
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
    image: excel,
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
    image: excel,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };