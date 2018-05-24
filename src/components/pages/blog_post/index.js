import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import css from 'emotion'
import PageBody from '../../common/page_body'
import { parse, format } from 'date-fns'

const onClick = (e) => console.log(e.target);

const BlogPost = ({ data }) => (
    <PageBody>
        { !data.loading ? 
            <Fragment>
                <h1>{data.post.postTitle}</h1>
                <div css={{marginBottom: 20}}>{data.post.author.name} - {format(parse(data.post.updatedAt),"MMMM DD, YYYY")}</div>
                { data.post.postImage ?
                    <img src={data.post.postImage.file.url} />
                : null }
                <div css={{flexGrow: 1}} dangerouslySetInnerHTML={{ __html: data.post.body.childMarkdownRemark.html }}/>
                <div css={{display: "flex", justifyContent: "space-around", marginBottom:20}}>
                {data.prev ? <Link to={`/blog/${format(parse(data.prev.updatedAt), "YYYY-MM-DD")}/${data.prev.slug}`}>&laquo; Newer: {data.prev.postTitle}</Link> : <span/> }
                {data.next ? <Link to={`/blog/${format(parse(data.next.updatedAt), "YYYY-MM-DD")}/${data.next.slug}`}>Older: {data.next.postTitle} &raquo;</Link> : null }
                </div>
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
        updatedAt
        postTitle
    }
    prev: contentfulBlogPost(id: { eq: $prev }) {
        slug
        updatedAt
        postTitle
    }
  }
`
