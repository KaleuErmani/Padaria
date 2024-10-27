import { OrderButton } from '../components/PlaceOrder'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ImageSection } from '../components/ImageSection'

export function Home() {
  return (
    <>
      <Header></Header>
      <ImageSection></ImageSection>
      <OrderButton></OrderButton>
      <Footer></Footer>
    </>
  )
}
