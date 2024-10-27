import { FooterContainer, FooterSection, FooterAddress } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <h3>Contato</h3>
        <p>Telefone: (51) 1234-5678</p>
        <p>Email: padaria@exemplo.com</p>
      </FooterSection>
      <FooterAddress>
        <h3>Endereço</h3>
        <p>Rua das Padarias, 123</p>
        <p>São leopoldo, Rio grande do sul</p>
      </FooterAddress>
    </FooterContainer>
  )
}
