const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Lima',
    description: 'Servicios de Limpieza y mantenimiento.',
    contact: {
      phone: '5531735414',
      email: 'hola@servicioslima.com',
    },
    menuLinks: [
      {
        name: 'Servicios',
        link: '/servicios',
      },
      {
        name: 'covid-19',
        link: '/covid-19',
      },
      // {
      //   name: 'Testimoniales',
      //   link: '/testimonials',
      // },
      {
        name: 'Contacto',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'udim8wmse5z6',
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options:{
        id: 'GTM-PPPN5T4',
        includeInDevelopment: false,
        
      }
    }
  ],
};
