import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const HeaderContainer = styled.header`
    padding: 20px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${props => props.theme.primary};
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        list-style-image: none;
        padding-left: 0;
        margin-bottom: 0;
        display: flex;

        li {
            margin-left: 20px;
        }
    }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div>
      <h4>
        <Link to="/">
          {siteTitle}
        </Link>
      </h4>
    </div>
    <ul>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
  </HeaderContainer>
)

export default Header
