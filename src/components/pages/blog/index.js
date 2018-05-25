import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import PageBody from '../../common/page_body'
import BlogPostSummary from "../../blog_post_summary"

const BlogList = styled.div`
    padding-top: 20px; 
    border-top: 1px dotted ${props => props.theme.black};
    
    ul {
        padding-left: 0;
    }
`

const BlogPage = ({ data }) => (
    <PageBody>
        { !data.loading ? 
            <Fragment>
                <div dangerouslySetInnerHTML={{ __html: data.page.body.childMarkdownRemark.html }}/>
                <BlogList>
                    <ul>
                        {data.posts && data.posts.edges.map(edge => (
                            <BlogPostSummary key={edge.node.id} node={edge.node} />
                        ))}
                    </ul>
                </BlogList>
            </Fragment>
        : null }
    </PageBody>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery($id: String! ) {
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
    posts: allContentfulBlogPost(sort:{fields:[updatedAt], order:DESC}) {
        edges {
            node {
                id
                postTitle
                slug
                updatedAt
                body {
                    body
                }
            }
        }
    }
  }
`