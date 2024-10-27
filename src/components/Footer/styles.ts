import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #272822;
  color: white;
  display: flex;
  padding: 2rem 5rem;

  bottom: 0px;
  width: 100%;
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #f26709;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }
`

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  margin-left: 13rem;

  h3 {
    color: #f26709;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }
`
