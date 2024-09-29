import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from './components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { Header } from './components/header'
import { Footer } from './components/footer'


import './App.css'
import { Contatos } from './components/contatos'


function App() {

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <>
      <div className='content'>
        <Header />
        <div>
          <h1>Bem-vindo ao Reforço Mente Liberta</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque, accusamus ipsum reiciendis, animi, fugit voluptatem vitae incidunt non nemo perferendis iure veniam error ducimus. Suscipit cupiditate molestias non minus.</p>
        </div>
        <div className='carousel'>
          <h2>Confira um pouco do nosso espaço! Lembre-se que um bom local de estudos é a base para a aprendizagem do seu filho!</h2>
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              loop: true,
            }}
            title='Carrossel'
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
                          src={`../src/assets/reforcoImages/imagem${index + 1}.jpg`}
                          alt={`Imagem ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Contatos />
        <Footer />
      </div>
    </>
  )
}

export default App
