import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ubiratan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ubiratan',
  subtitle: "I'm a React Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: "Graduated in Mechatronics in 2007, working for several years in this segment. Also graduated in International Relations in 2015, having international experience through exchange done between 2014/2015. Started a new graduation  in 2018, this time in Information Systems, where I seeked to fit in the current market, by increasing my knowledge in IT. But what triggered a old passion for IT, especially for develop software that could make people's lives better.",
  paragraphTwo: "I'm a very friendly person, who loves sports and animals, especially dogs. I have one called 'No Choke'. He is a beautiful American Bully pocket. I also practice Jiu-Jitsu, that is my therapy, and where I can relax and get the stress out.",
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'letmeask.png',
    title: 'Letme Ask',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'podcastr.png',
    title: 'Podcastr',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proffy.jpeg',
    title: 'Proffy',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ubiratan-da-rosa-rodrigues-b1a717157/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/birarr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
