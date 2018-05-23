import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import theme from '../../../theme';
import Logo from '../icons/logo'

const HeaderContainer = styled.header`
    padding: 20px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.tertiary};

    a {
        color: ${props => props.theme.primary};
        text-decoration: none;
        display: flex;
        align-items: center;

        span {
            font-size: 30px;
            margin-left: 10px;
        }

        svg {
            fill: ${props => props.theme.primary}
        }

        &:hover {
            color: ${props => props.theme.secondary};

            svg {
                fill: ${props => props.theme.secondary};
            }
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
        }
    }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
        <Logo color={theme.primary} /> 
        <span>{siteTitle}</span>
    </Link>
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
  </HeaderContainer>
)

export default Header
