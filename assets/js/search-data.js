// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-short-cv",
          title: "short cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "projects-3d-print",
          title: '3d print',
          description: "designing &amp; printing funtional parts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3dprint/";
            },},{id: "projects-embedded-systems",
          title: 'embedded systems',
          description: "micro:bit &amp; raspberry pi",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chipset/";
            },},{id: "projects-electrospinning",
          title: 'electrospinning',
          description: "nanofibers from polymer solutions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electrospinning/";
            },},{id: "projects-industrial-robotics",
          title: 'industrial robotics',
          description: "early steps in automation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/industrial-robotics/";
            },},{id: "projects-project-management",
          title: 'project management',
          description: "event organization &amp; management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-management/";
            },},{id: "projects-website-design",
          title: 'website design',
          description: "with dynamic layouts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/website-design/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6D%65%65%6B%76%61%74%73@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shameekvats", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3724-7974", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xbwnYzYAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
