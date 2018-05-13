import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'

import Header from '../components/common/header'
import Footer from "../components/common/footer"
import SiteContainer from "../components/common/site_container";
import './index.css'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <SiteContainer>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
      <Footer siteTitle={data.site.siteMetadata.title} />
    </SiteContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
