import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { format, parse } from 'date-fns'

const BlogPostSummaryContainer = styled.li`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

    a {
        color: ${props => props.theme.black};
        text-decoration: none;
    }

    h2 {
        margin-bottom: 5px;
        line-height: 1em;
    }

    cite {
        font-size: .8em;
    }
`;

const BlogPostSummary = ({ node }) => (
  <BlogPostSummaryContainer>
    <h2><Link to={`/blog/${format(parse(node.updatedAt), "YYYY-MM-DD")}/${node.slug}`}>{node.postTitle}</Link></h2>
    <cite>{format(parse(node.updatedAt), "MMMM DD, YYYY")}</cite>
    <div>{node.body.body.split("\n")[0]}</div>
    <Link to={`/blog/${format(parse(node.updatedAt), "YYYY-MM-DD")}/${node.slug}`}>Read More &raquo;</Link>
  </BlogPostSummaryContainer>
)

export default BlogPostSummary
