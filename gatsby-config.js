const config = require("dotenv").config();
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID ? process.env.CONTENTFUL_SPACE_ID : config.parsed.CONTENTFUL_SPACE_ID;
const CONTENTFUL_API_KEY = process.env.CONTENTFUL_API_KEY ? process.env.CONTENTFUL_API_KEY : config.parsed.CONTENTFUL_API_KEY;
const CONTENTFUL_PREVIEW_KEY = process.env.CONTENTFUL_PREVIEW_KEY ? process.env.CONTENTFUL_PREVIEW_KEY : config.parsed.CONTENTFUL_PREVIEW_KEY;
const BRANCH = process.env.BRANCH | "DEVELOP";
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: BRANCH === 'master' ? CONTENTFUL_API_KEY : CONTENTFUL_PREVIEW_KEY,
        host: BRANCH !== 'master' ? "preview.contentful.com" : "cdn.contentful.com"
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
            },
          },
        ],
      },
    },
  ],
}
