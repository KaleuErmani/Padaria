import styled from 'styled-components'

export const ImageSectionContainer = styled.section`
  margin-top: 54px;
  width: 100%;
`

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
`

export const ImageItem = styled.img`
  min-width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 0;
  display: block;
`
