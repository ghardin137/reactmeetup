import styled from 'react-emotion'

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: ${props => props.theme.bodyFont};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  overflow-x: hidden;
  position: relative;
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  align-items: stretch;
`

export default SiteContainer
