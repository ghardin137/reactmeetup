import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import PageBody from '../../common/page_body'


const HomePage = ({ data }) => (
    <PageBody>
        { !data.loading ? 
            <div dangerouslySetInnerHTML={{ __html: data.page.body.childMarkdownRemark.html }}/>
        : null }
    </PageBody>
)

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      callout {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`