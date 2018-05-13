import React from 'react'
import styled from 'react-emotion'

const PageBody = styled.div`
    padding: 0 20px;
    flex-grow: 1;
    border-bottom: 1px dotted ${props => props.theme.black};
    
    h1 {
        color: ${props => props.theme.black};
    }
`

export default PageBody