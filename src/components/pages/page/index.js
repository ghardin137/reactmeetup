import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import PageBody from '../../common/page_body'


const Page = ({ data }) => (
    <PageBody>

    </PageBody>
)

export default Page

export const pageQuery = graphql`
  query BasicPageQuery($id: String! ) {
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