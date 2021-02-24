/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "arthurolg.com",
  title: "Hola, mi nombre es Arturo",
  subTitle: emoji("Soy Desarrollador Full Stack 🚀 tengo la experiencia y habilidad para crear, diseñar y desplegar proyectos enfocados a la web con diversas tecnologias como Grails, SpringBoot, NextJS, ReactJS, Laravel y otros frameworks."),
  resumeLink:
    "https://arthurolg.com/assets/files/perfil-profesional-arturo-lopez.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lgzarturo",
  linkedin: "https://www.linkedin.com/in/lgzarturo",
  gmail: "me@arthurolg.com",
  gitlab: "https://gitlab.com/lgzarturo",
  facebook: "https://www.facebook.com/lgzarturo",
  instagram: 'https://www.instagram.com/lgzarturo/',
  twitter: 'https://twitter.com/lgzarturo',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "A que me dedico",
  subTitle: "ME GUSTA EXPLORAR LA TECNOLOGÍA QUE ME AYUDE A SER MAS PRODUCTIVO",
  skills: [
    emoji("⚡ Desarrollo y diseño de interfaces de usuario responsivas y eficientes"),
    emoji("⚡ Programación de microservicios, sdk y rest api."),
    emoji("⚡ Integración de servicios y consumo de API's para mejorar los proyectos."),
    emoji("⚡ Administración de servidores y despliegue en plataformas cloud.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Frontend / Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Inbound Marketing",
      progressPercentage: "70%"
    },
    {
      Stack: "Ads Ecommerce", 
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desarrollador Backend",
      company: "Revenatium",
      companylogo: require("./assets/images/logo-revenatium.png"),
      date: "2019 – Actual",
      desc: "Desarrollo de soluciones de marketing, programación backend de micro servicios con lenguajes Java, Groovy y Kotlin."
    },
    {
      role: "Eccommerce & Programador Grails",
      company: "Grupo Argos",
      companylogo: require("./assets/images/logo-grupoargos.png"),
      date: "2012 – 2019",
      desc: "Desarrollo de estrategias de marketing digital, líder de proyecto, planeación de productos e implementación de herramientas para los departamentos de la compañía."
    },
    {
      role: "Programador Java",
      company: "Sunset World",
      companylogo: require("./assets/images/logo-sunset.png"),
      date: "2009 – 2012",
      desc: "Arquitecto de software para el desarrollo de un CRM, Sistema de Reservaciones y herramientas de control de archivos."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lgzarturo", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Hablo sobre temas de programación, tecnología y marketing.",

  blogs: [
    {
      url: "https://webdeveloperhints.com/posts/buenas-practicas-de-programacion/",
      title: "Buenas prácticas de programación",
      description:
        "Cuando desarrollamos software es importante incluir el proceso de documentar al momento de escribir el código, cuando las ideas aún están frescas."
    },
    {
      url: "https://webdeveloperhints.com/posts/las-4-etapas-del-desarrollo/",
      title: "4 Etapas para el desarrollo de software",
      description:
        "No existe el tiempo idóneo, desde mi experiencia es mejor trabajar basándonos en objetivos y que el cliente se involucre para que pueda revisar los avances."
    },
    {
      url: "https://webdeveloperhints.com/posts/sitios-web-responsivos/",
      title: "¿Qué es el diseño responsivo?",
      description:
        "Muchos consideran el diseño responsivo como una tendencia que nació debido al crecimiento en el uso de aplicaciones para dispositivos móviles."
    },
    {
      url: "https://webdeveloperhints.com/posts/seo-aplicado-en-sitios-web/",
      title: "Ideas para mejorar el posicionamiento web",
      description:
        "Un sitio en línea puede ser la puerta de entrada a un mercado digital, funcionando las 24 horas del día, los 365 días del año."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle: "Hablemos sobre proyectos y tecnología",
  number: "",
  email_address: "me@arthurolg.com"
};

// Twitter Section

const twitterDetails = {
  userName: "lgzarturo", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
