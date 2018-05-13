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
  ],
}
