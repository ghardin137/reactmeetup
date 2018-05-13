import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import PageBody from '../../common/page_body'

const BlogPost = ({ data }) => (
    <PageBody>
        { !data.loading ? 
            <Fragment>
                <h1>{data.post.postTitle}</h1>
                <div>{data.post.author.name}</div>
                { data.post.postImage ?
                    <img src={data.post.postImage.file.url} />
                : null }
                <div dangerouslySetInnerHTML={{ __html: data.post.body.childMarkdownRemark.html }}/>
            </Fragment>
        : null }
    </PageBody>
)
export default BlogPost

export const pageQuery = graphql`
  query PostQuery($id: String!, $next: String, $prev: String) {
    post: contentfulBlogPost(id: { eq: $id }) {
      postTitle
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        slug
        email
      }
      updatedAt
      postImage {
        file {
          url
        }
      }
    }
    next: contentfulBlogPost(id: { eq: $next }) {
        slug
        postTitle
    }
    prev: contentfulBlogPost(id: { eq: $prev }) {
        slug
        postTitle
    }
  }
`
