import React from 'react'
import styled from 'react-emotion'

const PageBody = styled.div`
    padding: 0 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    h1 {
        color: ${props => props.theme.black};
    }
`

export default PageBody