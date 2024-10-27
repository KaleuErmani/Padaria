import styled from 'styled-components'

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  background-color: #f0c4c4;
  padding-left: 25%;
  padding-top: 100px;
  padding-bottom: 100px;
`

export const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  margin: 10px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`

export const CardTitle = styled.h3`
  font-size: 24px;
  margin: 20px 0;
  color: #272822;
`

export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`
