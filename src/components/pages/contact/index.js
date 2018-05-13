import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import PageBody from '../../common/page_body'


const ContactPage = ({ data }) => (
    <PageBody>
        { !data.loading ? 
            <Fragment>
                <h1>{data.page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.page.body.childMarkdownRemark.html }}/>
            </Fragment>
        : null }
    </PageBody>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
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