import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { CardSection } from '../components/Card/styles'
import image1 from '../Assets/salgados/image1.jpg'
import image2 from '../Assets/salgados/image2.jpg'
import image3 from '../Assets/salgados/image3.jpg'
import image4 from '../Assets/salgados/image4.jpg'
import image5 from '../Assets/salgados/image5.jpg'
import image6 from '../Assets/salgados/image6.jpg'

export function Salgados() {
  return (
    <>
      <Header></Header>
      <CardSection>
        <Card
          title="Mini pizza"
          image={image1}
          description="Mini pizzas deliciosas com uma combinação de queijos derretidos e ingredientes frescos."
        />
        <Card
          title="Pastel"
          image={image2}
          description="Pastéis crocantes e recheados com ingredientes frescos, perfeitos para qualquer lanche ou refeição."
        />
        <Card
          title="Panqueca"
          image={image3}
          description="Panquecas macias e recheadas com sabores irresistíveis, ideais para qualquer refeição do dia."
        />
        <Card
          title="Pão frances"
          image={image4}
          description="Pães fresquinhos e aromáticos, com crosta dourada e miolo macio, perfeitos para qualquer refeição."
        />
        <Card
          title="Salgados"
          image={image5}
          description="Salgados variados e irresistíveis, com recheios saborosos, perfeitos para um lanche a qualquer hora."
        />
        <Card
          title="Coxinha"
          image={image6}
          description="Coxinhas crocantes por fora e recheadas com frango desfiado, um clássico que nunca sai de moda!"
        />
      </CardSection>
      <Footer></Footer>
    </>
  )
}
