import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { CardSection } from '../components/Card/styles'
import image1 from '../Assets/doces/image1.jpg'
import image2 from '../Assets/doces/image2.jpg'
import image3 from '../Assets/doces/image3.jpg'
import image4 from '../Assets/doces/image4.jpg'
import image5 from '../Assets/doces/image5.jpg'
import image6 from '../Assets/doces/image6.jpg'

export function Doces() {
  return (
    <>
      <Header></Header>
      <CardSection>
        <Card
          title="Bolo"
          image={image1}
          description="Bolo simples e fofinho, perfeito para acompanhar o café ou chá da tarde, sempre um clássico."
        />
        <Card
          title="Cueca-virada"
          image={image2}
          description="Cueca virada crocante, polvilhada com açúcar e canela, um doce tradicional que derrete na boca."
        />
        <Card
          title="Chineca"
          image={image3}
          description="Chineca saborosa, frita até dourar, recheada com doces ou salgados, perfeita para qualquer hora."
        />
        <Card
          title="Cuca doce"
          image={image4}
          description="Cuca doce com camadas de massa fofinha e frutas frescas, ideal para um lanche gostoso e aconchegante."
        />
        <Card
          title="Pudim"
          image={image5}
          description="Pudim cremoso e suave, coberto com calda de caramelo, um doce que agrada a todos os paladares."
        />
        <Card
          title="Sonho"
          image={image6}
          description="Sonho doce recheado com creme e polvilhado com açúcar, uma delícia que traz nostalgia em cada mordida."
        />
      </CardSection>
      <Footer></Footer>
    </>
  )
}
