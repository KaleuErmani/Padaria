import { Button } from '../PlaceOrder/styles'
import { CardProps } from './CardProps'
import { CardContainer, CardDescription, CardImage, CardTitle } from './styles'

export function Card({ title, image, description }: CardProps) {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button>Pedir</Button>
    </CardContainer>
  )
}
