import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.png";
import p5 from "../assets/project-5.png";
import p6 from "../assets/project-6.png";
import p7 from "../assets/project-7.png";
import cartify from "../assets/cartify-preview.png"
import fayntrix from "../assets/fayntrix-preview.png"
import recipes from "../assets/Recieps-preview.png"
import daniels from "../assets/Daniels-preview.png"
import Mealify from "../assets/Mealify-preview.png"
import Yummy from "../assets/Yummy-preview.png"
import Weather from "../assets/weather-preview.png"
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  tech: string[];
  tools: string[];
  features: { title: string; desc: string }[];
  img: string;
  preview: string;
  live: string;
  github: string;
  category: "React" | "Next.js" | "UI/UX" | "Full Stack";
};
export const projects: Project[] = [
  {
    slug: "cartify-ecommerce",
    title: "Cartify",
    subtitle: "E-COMMERCE PLATFORM",
    desc: "Modern e-commerce web application with smooth animations, product filtering, dark mode, and real API integration.",
    longDesc:
      "Built a fully responsive e-commerce platform using React with dynamic product browsing, API integration, and interactive user experience. Implemented dark mode support, animated UI transitions with Framer Motion, product filtering, and a reviews system where users can write and display reviews. Focused on clean UI, performance, and reusable component architecture.",
    tech: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    tools: ["Formik", "Yup", "REST APIs", "Vite"],
    features: [
      {
        title: "Dark Mode",
        desc: "Seamless light/dark theme switching with a modern and responsive UI experience."
      },
      {
        title: "Product Filtering",
        desc: "Dynamic filtering system to help users quickly browse and find products."
      },
      {
        title: "API Integration",
        desc: "Fetched and managed real-time product data using external REST APIs."
      },
      {
        title: "Reviews System",
        desc: "Users can write, submit, and display product reviews interactively."
      },
    ],
    img: p1,
    preview: cartify,
    live: "https://cartify-shopp.vercel.app/",
    github: "https://github.com/YasmeenMuhammed/-Cartify",
    category: "React",
  },
  {
    slug: "fayntrix",
    title: "Fayntrix",
    subtitle: "CINEMATIC PRODUCTION PLATFORM",

    desc: "Modern cinematic photography and videography platform with immersive galleries, multilingual support, and smooth interactive experiences.",

    longDesc:
      "Designed and developed a cinematic production website for a photography and filmmaking brand focused on visual storytelling and premium presentation. Built a fully responsive platform featuring immersive Framer Motion animations, elegant page transitions, fullscreen media sections, and interactive gallery sliders for showcasing photography collections and cinematic projects. Implemented bilingual support using i18next with a language switcher for seamless transitions between English and Arabic, creating a more accessible and engaging experience for users. The platform also includes embedded video showcases, downloadable PDF portfolios for clients, and smooth scrolling interactions to deliver a modern cinematic browsing experience across all devices.",

    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Framer Motion"
    ],

    tools: [
      "Swiper.js",
      "Framer Motion",
      "Tailwind CSS",
      "React Icons",
      "i18next",
      "react-i18next",
      "PDF Download",
      "Video Embeds",
      "Vite"
    ],

    features: [
      {
        title: "Bilingual Support",
        desc: "Implemented multilingual support using i18next and react-i18next with seamless Arabic and English language switching."
      },
      {
        title: "Interactive Gallery Slider",
        desc: "Modern cinematic slider for showcasing photography collections and featured visual projects."
      },
      {
        title: "Motion Animations",
        desc: "Smooth page transitions and scroll-triggered animations powered by Framer Motion."
      },
      {
        title: "Video & PDF Showcase",
        desc: "Embedded cinematic videos alongside downloadable PDF portfolios and media presentations."
      },
      {
        title: "Custom UI/UX Design",
        desc: "Fully designed and crafted by me with a cinematic visual direction, premium typography, and immersive user experience."
      },
    ],

    img: p2,
    preview: fayntrix,
    live: "https://fayntrix.vercel.app/",
    github: "https://github.com/YasmeenMuhammed/Fayntrix",
    category: "React",
  },
  {
    slug: "recipes",
    title: "Recipes Explorer",
    subtitle: "FOOD DISCOVERY PLATFORM",

    desc: "Interactive recipe discovery platform with meal filtering, detailed recipes, and real-time food data integration.",

    longDesc:
      "Built a responsive recipe discovery application using React and React Router, powered by a Food API for fetching real-time meal data. Users can browse meals by category or region, explore detailed recipe pages, view ingredients and cooking instructions, and access external recipe sources and video tutorials. Implemented dynamic routing for seamless navigation between pages and focused on delivering a clean, user-friendly experience with fast performance and responsive design.",

    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "REST API"
    ],

    tools: [
      "Food API",
      "React Router",
      "Tailwind CSS",
      "Axios",
      "Vite"
    ],
    features: [
      {
        title: "Meal Categories",
        desc: "Browse and filter meals by categories such as Seafood, Beef, Chicken, Dessert, and more."
      },
      {
        title: "Regional Filtering",
        desc: "Explore recipes based on different cuisines and regions from around the world."
      },
      {
        title: "Recipe Details",
        desc: "View complete meal information including ingredients, measurements, cooking instructions, and meal images."
      },
      {
        title: "Video Tutorials",
        desc: "Access cooking tutorial videos and external recipe resources directly from each meal page."
      },
      {
        title: "Dynamic Routing",
        desc: "Implemented React Router for seamless navigation between meal lists, categories, regions, and recipe details."
      },
      {
        title: "API Integration",
        desc: "Fetched and managed real-time recipe data from a Food API with optimized user experience and responsive layouts."
      }
    ],

    img: p3,
    preview: recipes,
    live: "https://recieps-mu.vercel.app/",
    github: "https://github.com/YasmeenMuhammed/Recieps",
    category: "React"
  },
  {
    slug: "daniels",
    title: "Daniels",
    subtitle: "PERSONAL PORTFOLIO WEBSITE",

    desc: "Fully responsive personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap, featuring smooth interactions and modern UI.",

    longDesc:
      "Developed a modern personal portfolio website from scratch using HTML5, CSS3, JavaScript, and Bootstrap. The project showcases professional information, skills, services, portfolio work, testimonials, and contact details through a clean and responsive design. Implemented smooth scrolling navigation, animated typing effects in the hero section, interactive portfolio filtering, and responsive layouts optimized for all screen sizes. This project helped strengthen core Frontend development skills including DOM manipulation, responsive design principles, CSS animations, user interaction handling, and component-based thinking using reusable page sections. Special attention was given to performance, accessibility, visual consistency, and creating an engaging user experience without relying on modern JavaScript frameworks.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap"
    ],

    tools: [
      "Bootstrap 5",
      "Font Awesome",
      "Typed.js",
      "CSS Animations",
      "Responsive Design"
    ],

    features: [
      {
        title: "Fully Responsive Design",
        desc: "Optimized layouts and components that adapt seamlessly across mobile, tablet, and desktop devices."
      },
      {
        title: "Typing Animation",
        desc: "Dynamic typing effect in the hero section using Typed.js to create an engaging first impression."
      },
      {
        title: "Smooth Navigation",
        desc: "Implemented smooth scrolling and active navbar highlighting for intuitive user navigation."
      },
      {
        title: "Portfolio Filtering",
        desc: "Interactive project filtering system that allows users to browse portfolio categories efficiently."
      },
      {
        title: "CSS Animations & Effects",
        desc: "Utilized modern CSS3 transitions, hover effects, and animations to enhance the visual experience."
      },
      {
        title: "DOM Manipulation",
        desc: "Built interactive behaviors and dynamic UI elements using pure JavaScript without external frameworks."
      },
      {
        title: "Modern UI Design",
        desc: "Designed with a clean visual hierarchy, balanced spacing, and professional presentation using Bootstrap and custom CSS."
      },
      {
        title: "Performance & Accessibility",
        desc: "Semantic HTML5 structure, optimized assets, and user-friendly navigation for improved usability and performance."
      }
    ],

    img: p4,
    preview: daniels,
    live: "https://yasmeenmuhammed.github.io/Daniels/",
    github: "https://github.com/YasmeenMuhammed/Daniels",
    category: "UI/UX",
  },
  {
    slug: "mealify",
    title: "Mealify",
    subtitle: "RESTAURANT LANDING PAGE",

    desc: "Modern restaurant landing page built with pure HTML and CSS, featuring dark mode, responsive layouts, and clean user experience.",

    longDesc:
      "Developed a modern restaurant landing page from scratch using only HTML5 and CSS3 without relying on frameworks or UI libraries. The project focuses on creating a visually appealing and responsive user experience through clean layouts, modern design principles, and well-structured code. Implemented a dark mode theme switcher, responsive navigation, interactive hover effects, smooth section transitions, and mobile-first design techniques. The project demonstrates strong fundamentals in semantic HTML, advanced CSS styling, Flexbox, CSS Grid, responsive design, and theme management while maintaining performance and accessibility across different devices and screen sizes.",

    tech: [
      "HTML5",
      "CSS3"
    ],

    tools: [
      "Flexbox",
      "CSS Grid",
      "CSS Variables",
      "Media Queries",
      "Responsive Design"
    ],

    features: [
      {
        title: "Dark Mode",
        desc: "Implemented a complete light and dark theme switching experience using CSS variables and custom styling."
      },
      {
        title: "Fully Responsive Design",
        desc: "Built with a mobile-first approach to ensure seamless viewing across phones, tablets, and desktops."
      },
      {
        title: "Pure HTML & CSS",
        desc: "Developed entirely without Bootstrap, Tailwind, or external UI frameworks to strengthen core frontend fundamentals."
      },
      {
        title: "Modern Layout System",
        desc: "Utilized Flexbox and CSS Grid to create clean, scalable, and maintainable page layouts."
      },
      {
        title: "Interactive UI Elements",
        desc: "Enhanced user experience through hover effects, transitions, animations, and engaging visual feedback."
      },
      {
        title: "Semantic HTML Structure",
        desc: "Applied HTML5 semantic elements to improve accessibility, maintainability, and SEO readiness."
      },
      {
        title: "Performance Optimized",
        desc: "Lightweight implementation with minimal dependencies, fast loading times, and efficient styling techniques."
      },
      {
        title: "Clean UI Design",
        desc: "Designed with modern typography, balanced spacing, and visually appealing sections to create a professional restaurant website."
      }
    ],

    img: p5,
    preview: Mealify,
    live: "https://yasmeenmuhammed.github.io/Mealify/",
    github: "https://github.com/YasmeenMuhammed/Mealify",
    category: "UI/UX",
  },
  {
    slug: "yummy",
    title: "Yummy",
    subtitle: "MEAL DISCOVERY PLATFORM",

    desc: "Interactive meal discovery application powered by Food API with meal search, categories, areas filtering, and detailed recipe pages.",

    longDesc:
      "Developed a dynamic meal discovery web application using pure HTML5, CSS3, and JavaScript. Integrated a Food API to fetch and display meal data in real time, allowing users to search for meals, browse categories, explore meals by geographic areas, and access detailed recipe pages. Implemented a loading screen to improve user experience during API requests and created dynamic navigation between different sections of the application. The platform also features client-side form validation with real-time feedback, ensuring that users can only submit forms when all required fields are completed correctly. This project demonstrates strong skills in API integration, asynchronous JavaScript, DOM manipulation, form validation, and responsive web development without relying on frontend frameworks.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "REST API"
    ],

    tools: [
      "Food API",
      "Fetch API",
      "JavaScript Validation",
      "DOM Manipulation",
      "Responsive Design"
    ],

    features: [
      {
        title: "Meal Search",
        desc: "Search for meals dynamically using Food API data with instant search results."
      },
      {
        title: "Area Filtering",
        desc: "Browse and discover meals based on different countries and regions around the world."
      },
      {
        title: "Meal Categories",
        desc: "Explore meals through organized categories for a better browsing experience."
      },
      {
        title: "Recipe Details",
        desc: "Access dedicated meal pages containing ingredients, instructions, images, and recipe information."
      },
      {
        title: "Loading Screen",
        desc: "Implemented loading states and animations to enhance user experience while fetching API data."
      },
      {
        title: "Form Validation",
        desc: "Real-time validation for user inputs with clear feedback and error handling."
      },
      {
        title: "Smart Submit Button",
        desc: "Submit button remains disabled until all required fields are completed and validated successfully."
      },
      {
        title: "DOM Manipulation",
        desc: "Built dynamic user interactions and content rendering using pure JavaScript."
      }
    ],

    img: p6,
    preview: Yummy,
    live: "https://yasmeenmuhammed.github.io/Yummy/",
    github: "https://github.com/YasmeenMuhammed/Yummy",
    category: "UI/UX",
  },
  {
    slug: "weather",
    title: "Weather App",
    subtitle: "WEATHER FORECAST PLATFORM",

    desc: "Responsive weather application powered by Weather API with city search, current conditions, and multi-day forecasts.",

    longDesc:
      "Developed a responsive weather forecasting application using HTML5, CSS3, and JavaScript. Integrated a Weather API to provide real-time weather information, allowing users to search for any city worldwide and instantly view current weather conditions. The application displays temperature, weather status, humidity, wind details, and forecasts for the upcoming two days. Focused on delivering a clean user interface, responsive layouts, fast API data fetching, and a seamless user experience across desktop and mobile devices. The project demonstrates practical experience with API integration, asynchronous JavaScript, DOM manipulation, and dynamic content rendering.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "REST API"
    ],

    tools: [
      "Weather API",
      "Fetch API",
      "DOM Manipulation",
      "Responsive Design",
      "Async JavaScript"
    ],

    features: [
      {
        title: "City Search",
        desc: "Search for any city worldwide and instantly retrieve accurate weather information."
      },
      {
        title: "Current Weather",
        desc: "Display real-time weather conditions including temperature, weather status, humidity, and wind speed."
      },
      {
        title: "3-Day Forecast",
        desc: "Provide weather forecasts for today and the next two days with detailed weather information."
      },
      {
        title: "API Integration",
        desc: "Connected to a Weather API to fetch and display live weather data dynamically."
      },
      {
        title: "Responsive Design",
        desc: "Optimized layouts for a seamless experience across desktop, tablet, and mobile devices."
      },
      {
        title: "Dynamic UI Updates",
        desc: "Updated weather information instantly using JavaScript without requiring page reloads."
      },
      {
        title: "DOM Manipulation",
        desc: "Built interactive user experiences and rendered API data dynamically using pure JavaScript."
      },
      {
        title: "Error Handling",
        desc: "Handled invalid searches and API responses gracefully to improve usability."
      },
      {
        title: "Weather Visualization",
        desc: "Displayed weather conditions using dynamic icons, temperature metrics, and forecast summaries for better user experience."
      }
    ],

    img: p7,
    preview: Weather,
    live: "https://yasmeenmuhammed.github.io/Weather-Api/",
    github: "https://github.com/YasmeenMuhammed/Weather-Api",
    category: "UI/UX",
  }
];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);