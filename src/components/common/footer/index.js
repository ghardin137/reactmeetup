import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import theme from '../../../theme';

const FooterContainer = styled.footer`
    padding: 20px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.tertiary};

    a {
        color: ${props => props.theme.primary};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.secondary};
        }
    }

    ul {
        list-style-type: none;
        list-style-image: none;
        padding-left: 0;
        margin-bottom: 0;
        display: flex;

        li {
            margin-left: 20px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
    
    div {
        margin-top: 10px;

        span {
            margin-right: 10px;
        }
    }
`;

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <ul>
        <li>
            <Link to="/blog" activeStyle={{color: theme.secondary}}>Blog</Link>
        </li>
        <li>
            <Link to="/live-page" activeStyle={{color: theme.secondary}}>Live Generator</Link>
        </li>
        <li>
            <Link to="/about" activeStyle={{color: theme.secondary}}>About</Link>
        </li>
        <li>
            <Link to="/contact" activeStyle={{color: theme.secondary}}>Contact</Link>
        </li>
    </ul>
    <div>
        <span>&copy; {new Date().getFullYear()}</span>
        <Link to="/">
            {siteTitle}
        </Link>
    </div>
  </FooterContainer>
)

export default Footer
