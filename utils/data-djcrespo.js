export const djcrespoInfo = {
  name: "Didier Crespo Castilla",
  bio: "<p>¡Hola! Soy <strong>Didier Crespo</strong>, un apasionado de la tecnología y un entusiasta del aprendizaje continuo. Siempre estoy buscando nuevas oportunidades para adquirir conocimientos y mejorar mis habilidades, y disfruto que cada detalle funcione a la perfección. Además, me gusta compartir lo que aprendo con quienes lo necesiten.</p>",
  age: 27,
  residence: "USA",
  freelance: true,
  address: "New York, USA",
  typeingAnimation: [
    "Front-End developer",
    "Back-End developer",
    "Full-Stack developer",
  ],
  socialLinks: [
    {
      id: 1,
      icons: "fa fa-linkedin-square",
      link: "https://www.linkedin.com/in/didier-crespo/",
    },
    {
      id: 2,
      icons: "fa fa-github-square",
      link: "https://github.com/djcrespo",
    }
  ],
  experiences: [
    {
      id: 1,
      jobTitle: "Desarrollador FullStack",
      company: "ParamQ",
      dec: [
        "Desarrollo de soluciones personalizadas para clientes utilizando tecnologías de frontend y backend como Vue.js, Ionic Framework, Node.js, Django y PostgreSQL.",
        "Integración de otras APIs de terceros en proyectos como pasarelas de pago (OpenPay).",
        "Implementación de despliegues automáticos con Github Actions en proyectos internos de la empresa."
      ],
      date: "Octubre 2021 - Actual",
    },
    {
      id: 2,
      jobTitle: "Desarrollador FullStack",
      company: "Autónomo",
      dec: [
        "Desarrollo de páginas web a medida para empresas",
        "Implementación de herramientas de terceros en las páginas",
        "Despliegue y alojamiento de las páginas en hostinger, con despliegue automático con GitHub"
      ],
      date: "Agosto 2019 - 2023",
    },
    {
      id: 3,
      jobTitle: "Presidente estudiantil",
      company: "AAAI Student Chapter México",
      dec: [
        "Lider del equipo de desarrollo de proyectos internos",
        "Ponente en varios talleres y conferencias.",
        "Lider de la división de Software."
      ],
      date: "2014 - 2023",
    },
  ],
  lenguages: {
    title: "Lenguajes",
    icons: "fa fa-code",
    items: [
      { id: 1, text: "JavaScript" },
      { id: 2, text: "Python" }
    ],
  },
  frameworks: {
    title: "Frameworks",
    icons: "fa fa-list",
    items: [
      { id: 1, text: "Django" },
      { id: 2, text: "Vue" },
      { id: 3, text: "Ionic" }
    ],
  },
  cloud: {
    title: "Nube",
    icons: "fa fa-cloud",
    items: [
      { id: 1, text: "AWS" },
      { id: 2, text: "Hostinger" }
    ],
  },
  devops: {
    title: "DevOps",
    icons: "fa fa-code-fork",
    items: [
      { id: 1, text: "Docker" },
      { id: 2, text: "GitHub Actions" }
    ],
  },
  educations: [
    {
      id: 1,
      date: "2018 - 2024",
      name: "Instituto Tecnológico de Mérida",
      address: "Campus poniente - Yucatán",
      dec: "Ing. en Sistemas Computacionales",
    },
    {
      id: 2,
      date: "2014 - 2018",
      name: "Universidad Autónoma de Yucatán",
      address: "Preparatoria 2 - Yucatán",
      dec: "Bachillerato - Técnico en social media manager",
    }
  ],
  services: [
    {
      id: 1,
      icon: "fa fa-microphone",
      title: "Lead Vocal",
      desc: "The lead vocalist in popular music is typically the member of a group.",
    },
    {
      id: 2,
      icon: "fa fa-music",
      title: "Record Guitars",
      desc: "Music copying, writing, creating, transcription, arranging and composition services.",
    },
    {
      id: 3,
      icon: "fa fa-soundcloud",
      title: "Soundcloud Mix",
      desc: "Made a great new DJ mix and you want to get it online and out to the world",
    },
    {
      id: 4,
      icon: "fa fa-gamepad",
      title: "Music for Games, Apps",
      desc: "Developing tracks and unique music for android, ios and video games.",
    },
  ],
  pricing: {
    basic: {
      icon: "fa fa-volume-down",
      price: 22,
      details: [
        { id: 1, title: "Lead Vocal", disable: false, new: false },
        { id: 2, title: "Record Guitars", disable: false, new: false },
        { id: 3, title: "Soundcloud Mix", disable: false, new: false },
        { id: 4, title: "Music for Games", disable: true, new: true },
        { id: 5, title: "Music for Apps", disable: true, new: true },
      ],
    },
    pro: {
      icon: "fa fa-volume-up",
      price: 48,
      details: [
        { id: 1, title: "Lead Vocal", disable: false, new: false },
        { id: 2, title: "Record Guitars", disable: false, new: false },
        { id: 3, title: "Soundcloud Mix", disable: false, new: false },
        { id: 4, title: "Music for Games", disable: false, new: true },
        { id: 5, title: "Music for Apps", disable: false, new: true },
      ],
    },
  },
  clients: [
    { id: 1, img: "/images/clients/client_1.png" },
    { id: 2, img: "/images/clients/client_2.png" },
    { id: 3, img: "/images/clients/client_3.png" },
    { id: 4, img: "/images/clients/client_4.png" },
  ],
  porgressBar: {
    title: "Design",
    icon: "fa fa-paint-brush",
    skills: [
      { id: 1, name: "Motivation / Determination", value: 90 },
      { id: 2, name: "Violin Expertise", value: 65 },
      { id: 3, name: "Creativity", value: 75 },
      { id: 4, name: "Guitar Expertise", value: 85 },
    ],
  },
  porgressCircle: {
    title: "Read Music",
    icon: "fa fa-music",
    skills: [
      { id: 1, name: "Chords", value: 90 },
      { id: 2, name: "Intervals", value: 75 },
      { id: 3, name: "Melody", value: 85 },
      { id: 4, name: "Pitch", value: 95 },
    ],
  },
};

export const projects = [
  {
    id: 6,
    img: "/images/djcrespo/projects/garvi.png",
    title: "Skidha",
    description: "",
    technologies: []
  },
  {
    id: 7,
    img: "/images/djcrespo/projects/garvi.png",
    title: "Go-Agent",
    description: "",
    technologies: []
  },
  {
    id: 8,
    img: "/images/djcrespo/projects/garvi.png",
    title: "Garvi",
    description: "",
    technologies: []
  },
  {
    id: 9,
    img: "/images/djcrespo/projects/garvi.png",
    title: "MAIA",
    description: "",
    technologies: []
  },
  {
    id: 1,
    img: "/images/djcrespo/projects/jarkol.png",
    title: "Jarkol",
    description: "",
    technologies: []
  },
  {
    id: 2,
    img: "/images/djcrespo/projects/grupo_imper.png",
    title: "Grupo Imper",
    description: "",
    technologies: []
  },
  {
    id: 3,
    img: "/images/djcrespo/projects/recudec.png",
    title: "Recudec",
    description: "",
    technologies: []
  },
  {
    id: 4,
    img: "/images/djcrespo/projects/anmcapital.png",
    title: "ANM Capital",
    description: "",
    technologies: []
  },
  {
    id: 5,
    img: "/images/djcrespo/projects/najaal.png",
    title: "Naajal",
    description: "",
    technologies: []
  }
];