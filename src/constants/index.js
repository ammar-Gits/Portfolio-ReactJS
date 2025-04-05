import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I’m a passionate software developer specializing in Artificial Intelligence, with a focus on training AI models, optimizing ANNs, and applying NLP and Computer Vision for real-world solutions. Alongside AI, I build dynamic, scalable web apps using the MERN stack. I’m skilled in solving complex problems using data structures, algorithms, and MySQL. My goal is to create efficient, intelligent, and impactful tech solutions.`

export const ABOUT_TEXT = `Driven by a passion for AI-driven solutions and full-stack development, I thrive in collaborative environments where innovation and creativity take center stage. I actively engage in hands-on projects, refining my skills in debugging, performance optimization, and real-world application development.
I am committed to continuous learning and staying updated with emerging trends in AI and software development. My goal is to leverage my knowledge and expertise to build impactful solutions that drive technological advancement and solve meaningful challenges.`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    role: "BS Artificial Intelligence",
    company: "FAST NUCES Islamabad",
    technologies: ["Python", "C++", "AI", "Machine Learning"],
  },
  {
    year: "2020 - 2022",
    role: "ICS (Intermediate in Computer Science)",
    company: "Fauji Foundation College",
    technologies: ["Physics", "Computer Science", "Math"],
  },
  {
    year: "2018 - 2020",
    role: "Matriculation",
    company: "Radiant School",
    technologies: ["Physics", "Chemistry", "Computer", "Math"],
  },
];

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "AI/ML Engineer",
    company: "DevelopersHub Corporation",
    description: `Developed and deployed machine learning models for NLP tasks like chatbot systems, sentiment analysis, and fake news detection. I implemented text classification and clustering techniques, optimized model performance, and deployed solutions using Flask and Streamlit.`,
    technologies: ["Python", "AI", "Machine Learning", "Model training"],
  },
  {
    year: "2025 - Present",
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    description: `As machine learning intern, I am developing a Music Recommendation System that predicts song replays using machine learning and user listening history. Additionally, I am working on Image Recognition, applying AI to analyze digital images for tasks like face recognition and identity verification, showcasing its real-world applications.`,
    technologies: ["Python", "Flask", "Machine Learning", "Image Processing"],
  },
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Fiverr",
    description: `Developing dynamic, responsive, and scalable web applications using the MERN stack while integrating RESTful APIs and GraphQL for efficient communication. Building optimized backend architectures with Node.js and Express.js, ensuring high-performance APIs and seamless data flow. Implementing secure authentication using JWT, OAuth, and session-based methods for robust user access control.`,
    technologies: ["MongoDB", "TailwindCSS", "React.js", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Interactive Chatbot System",
    image: project1,
    description:
      "An AI-powered system for mobile product analysis and interactive chatbot support, built using Flask and SQLAlchemy. It scrapes data from Daraz.pk to provide real-time mobile specifications, pricing, and recommendations. The chatbot allows users to engage in conversations, ask questions, and receive instant assistance for mobile-related queries.",
    technologies: ["HTML", "CSS", "Flask", "Python", "SQLAlchemy"],
  },
  {
    title: "Hotel Reservation App",
    image: project2,
    description:
      "HotelEase is a desktop app built using C# .NET with MySQL backend. Designed to streamline hotel operations, the system enhances efficiency, reduces manual errors, and improves guest experiences. Developed following the Software Development Life Cycle (SDLC) in four iterations.",
    technologies: ["C#", ".NET", "MySQL", "Visual Studio"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website using React and Tailwind CSS. The website showcases an introduction, education, experiences, projects, and contact information in a visually appealing and responsive design. It serves as a professional online presence to highlight skills and accomplishments.",
    technologies: ["Javascript", "Vite", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Netflix Clone",
    image: project5,
    description:
      "Developed a Netflix Clone using React.js and Tailwind CSS, replicating the platform’s UI with a responsive and modern design. The project features a sleek homepage, dynamic content sections, and an intuitive user interface. It showcases frontend development skills, focusing on design consistency and smooth user experience.",
    technologies: ["Javascript", "Vite", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Currency Converter",
    image: project6,
    description:
      "A simple and responsive Currency Converter web application built using HTML, CSS, and JavaScript, which fetches real-time exchange rates through a Currency Converter API. Users can select currencies, enter an amount, and get the converted value instantly.",
    technologies: ["JavaScript", "FetchAPI", "HTML", "CSS"],
  },
  {
    title: "Flight Prediction System",
    image: project4,
    description:
      "It is a machine learning-based solution designed to analyze historical flight and weather data to predict departure delays. By leveraging advanced classification and regression models, the system helps airlines and passengers anticipate delays, improving operational efficiency and customer satisfaction.",
    technologies: ["Python", "Machine Learning", "Model Training", "Regression Analysis"],
  },
];

export const CONTACT = {
  address: "Islamabad, Pakistan ",
  phoneNo: "+92 318 5669848",
  email: "muhammadammar4460@gmail.com",
};
