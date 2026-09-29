// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Neitan96', // Your GitHub org/user name. (This is the only required config)
  },
  about: {
    tagline: 'Back-end · Python · RPA', // Shown under the name when the GitHub bio is empty.
    // To hide the `Sobre mim` section, keep it empty.
    paragraphs: [
      'Olá 👋, sou o Nathan, mas pode me chamar de Neitan. Sou desenvolvedor back-end em Extrema-MG e comecei a programar aos 16 anos, escrevendo plugins em Java para servidores de Minecraft.',
      'Depois disso passei por PHP, SQL, C e MQL5, quase sempre em projetos pessoais e sempre no Linux. Hoje estudo e construo automações com Python: RPA, integração com o SAP GUI e controle de impressoras Zebra.',
      '⚡ Fato curioso: Java é ótimo.',
    ],
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projetos no GitHub',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Neitan96/neitan96.github.io', 'Neitan96/Neitan96'], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Neitan96/SAPFlowSavvy',
          'Neitan96/Py-ZPL-Commander',
          'Neitan96/SimpleCalendar',
          'Neitan96/ClockSchedulerAPI',
          'Neitan96/BukkitDevelyBR',
          'Neitan96/Plukkit',
          'Neitan96/NaskerLib',
          'Neitan96/Naylot',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Meus Projetos',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Nathan Almeida',
    description:
      'Portfólio de Nathan Almeida, desenvolvedor back-end focado em Python, automações e RPA.',
    imageURL: '',
  },
  social: {
    linkedin: 'neitan96',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'neitan96',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nathanalmeidadev@outlook.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'RPA',
    'SAP GUI Scripting',
    'Java',
    'PHP',
    'C',
    'MQL5',
    'SQL',
    'MySQL',
    'Git',
    'Linux',
    'HTML',
    'CSS',
  ],
  // Sections below are hidden while empty.
  experiences: [],
  certifications: [],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'neitan',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
      'neitan',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Feito com <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
