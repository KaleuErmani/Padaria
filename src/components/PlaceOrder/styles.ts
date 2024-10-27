import styled from 'styled-components'

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #272822;
  align-items: center;
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #f26709;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #ce5c14;
  }
`
export const PlaceOrder = styled.h1`
  color: #f26709;
  margin-bottom: 20px;
`
