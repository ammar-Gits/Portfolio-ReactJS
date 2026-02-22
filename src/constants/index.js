import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/proj6.png";
export const HERO_CONTENT = `I’m a passionate software developer specializing in Artificial Intelligence, with a focus on training AI models, optimizing ANNs, and applying NLP and Computer Vision for real-world solutions. Alongside AI, I build dynamic, scalable web apps using the MERN stack. I’m skilled in solving complex problems using data structures, algorithms, and MySQL. My goal is to create efficient, intelligent, and impactful tech solutions.`

export const ABOUT_TEXT = `I am passionate about designing intelligent systems that move beyond traditional automation into autonomous decision-making workflows. My work focuses on multi-agent AI architectures, model optimization, and real-world AI integrations that solve practical problems. With strong foundations in both AI and full-stack development, I enjoy building scalable systems from model training to deployment. I continuously explore emerging technologies to push the boundaries of agentic and applied AI.`
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
    technologies: ["Physics", "Computer Science", "Math", "Grade: A"],
  },
  {
    year: "2018 - 2020",
    role: "Matriculation",
    company: "Radiant School",
    technologies: ["Physics", "Chemistry", "Computer", "Math", "Grade: A+"],
  },
];

export const EXPERIENCES = [
  {
    year: "March 2025 - May Present",
    role: "AI/ML Intern",
    company: "DevelopersHub Corporation",
    description: `Built and deployed AI chatbots for health queries, sentiment analysis, and fake news detection using NLP models like LSTM and Transformers. Worked with real-world datasets for classification and anomaly detection, and developed end-to-end ML pipelines using Flask, FastAPI, and Streamlit. Applied CNNs and LSTM/Prophet for image classification and time-series forecasting.`,
    technologies: ["Python", "AI", "Machine Learning", "Natural language processing"],
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
    title: "AI-Powered Text-to-Image System",
    image: project6,
    description:
      "Developed a deep learning-based Image Generation System using Stable Diffusion (v1.5) and AUTOMATIC1111 Web UI, enabling high-quality text-to-image synthesis. Integrated a custom gRPC API for automated image generation with prompt validation and local file storage. Deployed the system using Docker with NVIDIA GPU support, tested via Postman, and optimized for performance under concurrent load. Used Python, Protobuf, and CUDA for scalable deployment.",
    technologies: ["Image processing", "AI", "Deep learning", "gRPC", "Postman"],
  },
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
    title: "Netflix Clone",
    image: project5,
    description:
      "Developed a Netflix Clone using React.js and Tailwind CSS, replicating the platform’s UI with a responsive and modern design. The project features a sleek homepage, dynamic content sections, and an intuitive user interface. It showcases frontend development skills, focusing on design consistency and smooth user experience.",
    technologies: ["Javascript", "Vite", "ReactJS", "TailwindCSS"],
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
