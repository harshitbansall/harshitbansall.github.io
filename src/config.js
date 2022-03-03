module.exports = {
  siteTitle: 'Harshit Bansal | Software Developer |',
  siteDescription:
    'Harshit Bansal',
  siteKeywords:
    'Harshit Bansal',
  siteUrl: 'https://harshitbansall.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Harshit Bansal',
  location: 'New Delhi, India',
  email: 'harshitbansal587@gmail.com',
  github: 'https://github.com/harshitbansall',
  twitterHandle: '@harshitbansall',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/harshitbansall',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/harshitbansall/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/harshitbansall',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/harshitbansall',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#ff666',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
