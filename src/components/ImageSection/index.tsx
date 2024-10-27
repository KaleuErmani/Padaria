import { ImageSectionContainer, ImageGrid, ImageItem } from './styles'
import image1 from '../../Assets/salgados/image1.jpg'
import image2 from '../../Assets/doces/image2.jpg'
import image3 from '../../Assets/doces/image3.jpg'
import image4 from '../../Assets/salgados/image4.jpg'
import image5 from '../../Assets/salgados/image5.jpg'
import image6 from '../../Assets/salgados/image6.jpg'

export function ImageSection() {
  return (
    <ImageSectionContainer>
      <ImageGrid>
        <ImageItem src={image1} alt="Imagem 1" />
        <ImageItem src={image2} alt="Imagem 2" />
        <ImageItem src={image3} alt="Imagem 3" />
        <ImageItem src={image4} alt="Imagem 4" />
        <ImageItem src={image5} alt="Imagem 5" />
        <ImageItem src={image6} alt="Imagem 6" />
      </ImageGrid>
    </ImageSectionContainer>
  )
}
