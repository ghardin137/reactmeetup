import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import tinycolor from 'tinycolor2';

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
        color: ${props => tinycolor(props.theme.primary).darken(15).toHexString()};
        text-decoration: none;
        display: flex;
        align-items: center;

        span {
            font-size: 30px;
            margin-left: 10px;
            color: ${props => props.theme.primary};
        }

        svg {
            fill: ${props => props.theme.primary}
        }

        &:hover {
            color: ${props => props.theme.primary};

            svg {
                fill: ${props => tinycolor(props.theme.primary).darken(15).toHexString()};
            }

            span {
                color: ${props => tinycolor(props.theme.primary).darken(15).toHexString()};
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
            <Link to="/blog" activeStyle={{color: theme.primary}}>Blog</Link>
        </li>
        <li>
            <Link to="/live-page" activeStyle={{color: theme.primary}}>Live Generator</Link>
        </li>
        <li>
            <Link to="/about" activeStyle={{color: theme.primary}}>About</Link>
        </li>
        <li>
            <Link to="/contact" activeStyle={{color: theme.primary}}>Contact</Link>
        </li>
    </ul>
  </HeaderContainer>
)

export default Header
