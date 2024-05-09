'use client';

import Image from "next/image";
import HeroFront from "@/assets/images/hero_front.jpg";
import HeroBack from "@/assets/images/hero_back.jpg";
import { lilita } from "./lilita";
import { Paw } from "@/components/icons/Paw";
import TheJack from "@/assets/images/TheJack.png";
import Arsene from "@/assets/images/Arsene.png";
import Mask from "@/assets/images/Mask.png";
import useEmblaCarousel from 'embla-carousel-react'

import F1 from "@/assets/images/f1.webp";
import F2 from "@/assets/images/f2.webp";
import F3 from "@/assets/images/f3.webp";
import F4 from "@/assets/images/f4.webp";
import { useCallback } from "react";
import { ChevronLeft } from "@/components/icons/ChevronLeft";
import { ChevronRight } from "@/components/icons/ChevronRight";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <section>
        <div className="app-container gap-12 | grid lg:grid-cols-2 grid-rows-2 py-8 my-8" style={{ 'gridTemplateRows': "min-content" }}>
          <div className="hero__container">
            <div className="hero | flex flex-col gap-4 mx-auto sm:mx-none">
              <div>
                <h1 className={`fade-in | text-primary text-4xl ${lilita.className}`} style={{ '--delay': '250ms' } as React.CSSProperties}>Canil Ponta do Recreio</h1>
                <p className="fade-in | text-xl font-medium font-sans" style={{ '--delay': '400ms' } as React.CSSProperties}>Paixão, carinho e dedicação</p>
              </div>
              <article>
                <p className="fade-in | text-xl font-light font-sans" style={{ '--delay': '400ms' } as React.CSSProperties}>Canil especializado em Jack Russel com mais de 10 anos de experiência.</p>
                {/* <p className="fade-in | text-xl font-light font-sans" style={{ '--delay': '400ms' }}>Pelo duro, Liso ou outro. O que o seu coração mandar.</p> */}
              </article>
              <article>
                <h3 className={`fade-in | flex flex-col text-5xl ${lilita.className}`} style={{ '--delay': '650ms' } as React.CSSProperties}><span className={"font-sans text-2xl font-bold"}>Temos</span> <span className="mt-2">O Jack Russel</span></h3>
                <div className="md:flex gap-2 mt-4 items-end">
                  <h2 className="fade-in | text-primary text-5xl items-end font-sans font-bold text-shadow" style={{ '--delay': '1100ms' } as React.CSSProperties}>perfeito</h2>
                  <p className="fade-in | text-xl font-sans" style={{ '--delay': '510ms' } as React.CSSProperties}>para a sua</p>
                  <h2 className={"fade-in | text-primary text-5xl font-sans font-bold text-shadow"} style={{ '--delay': '900ms' } as React.CSSProperties}>família</h2>
                </div>
              </article>

              <button style={{ '--delay': '500ms' }} className="fade-in shake | flex gap-2 items-center justify-center bg-primary mt-5 px-6 py-3 rounded transition-all duration-300 text-white text-2xl font-bold hover:brightness-75 hover:shadow-md">
                Quero o meu!
                <Paw />
              </button>
            </div>
          </div>
          <div className="row-start-1 lg:col-start-2">
            <div className="mx-auto">
              <Image className="fade-in | hero__image hero__image-back" src={HeroFront} alt="Banner" style={{ '--delay': '250ms' } as React.CSSProperties} />
              <Image className="fade-in | hero__image hero__image-front" src={HeroBack} alt="Banner" style={{ '--delay': '500ms' } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <h2 className={`fade-in | text-secondary text-4xl text-center ${lilita.className}`} style={{ '--delay': '250ms' } as React.CSSProperties}>O Jack Russel</h2>
        <div className=" app-container | grid md:grid-cols-9 mt-6">
          <aside className="fade-in | col-span-5 px-5" style={{ '--delay': '250ms' } as React.CSSProperties}>
            <p className="text-xl font-light">Um companheiro cheio de energia e personalidade. O Jack Russell Terrier é o cão perfeito para quem busca um amigo leal e cheio de vitalidade. Com sua saúde robusta, esse cãozinho está sempre pronto para qualquer aventura ao seu lado.</p>
            <p className="mt-2 text-xl font-light">O temperamento do Jack Russell é único. Eles são sociáveis, companheiros e adoram estar perto de seus donos. </p>
            <p className="mt-2 text-xl font-light">Originado como um caçador, ele mantém suas habilidades de alerta e agilidade, tornando-o perfeito para atividades ao ar livre e treinamento.</p>
            <p className="mt-2 text-xl font-light">Ter um Jack Russell Terrier é mais do que ter um animal de estimação, é ganhar um companheiro para a vida toda. </p>
          </aside>
          <div className="flex flex-col sm:col-span-4 col-span-5 justify-between" >
            <Image className="fade-in | mt-4 lg:mt-0 w-full" src={TheJack} alt="Jack Russel brincando com a bola" style={{ '--delay': '500ms' } as React.CSSProperties} />
            <button style={{ '--delay': '500ms' } as React.CSSProperties} className="fade-in shake | mt-4 flex gap-2 items-center justify-center bg-primary lg:my-auto px-6 py-3 rounded transition-all duration-300 hover:brightness-75 text-white text-2xl font-bold hover:shadow-md">
              Quero o meu!
              <Paw />
            </button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className={`scroll-fade | text-primary text-center text-4xl ${lilita.className}`}>Artista de cinema</h2>
        <div className="app-container">
          <div className="grid grid-cols-9 mt-8 flex-reverse">
            <div className="sm:col-span-5 col-span-6 col-start-5 flex flex-col gap-1">
              <h4 className={`scroll-fade | text-xl font-bold text-secondary`}>Le complice de Lupin (Série da Netflix)</h4>
              <p className={`scroll-fade | text-xl font-light text-secondary`}>Fiel companheiro do personagem Assane Diop, interpretado por Omar Sy. </p>
              <p className={`scroll-fade | text-xl font-light text-secondary`}>Esse cãozinho enérgico e cheio de personalidade acompanha Assane em suas aventuras</p>
              <p className={`scroll-fade | text-xl font-light text-secondary`}>Uma das cenas memoráveis é quando o Jack Russell Terrier, ao ouvir o nome de Pelegrini, o arqui-inimigo de Assane, late, como resposta negativa ao nome.</p>
            </div>
            <div className="sm:col-span-2 col-span-3 col-start-1 row-start-1">
              <Image className="sticky top-0 scroll-fade" src={Arsene} alt="Jack Russel brincando com a bola" />
            </div>
          </div>

          <div className="grid grid-cols-9 mt-8">
            <div className="sm:col-span-5 col-span-6 sm:col-start-3 col-start-1 flex flex-col gap-1">
              <h4 className={`scroll-fade | text-xl font-bold text-secondary text-end`}>O Máskara</h4>
              <p className={`scroll-fade | text-xl font-light text-secondary`}>Aparição inesquecível como o fiel companheiro de Stanley Ipkiss, interpretado por Jim Carrey.</p>
              <p className={`scroll-fade | text-xl font-light text-secondary`}>O cãozinho, chamado Milo, desempenha um papel fundamental na história, ao lado de Stanley, que acaba se transformando no icônico super-herói verde.</p>
              <p className={`scroll-fade | text-xl font-light text-secondary`}>Uma das cenas mais memoráveis é quando Milo usa a máscara por acidente e se transforma em um cão superpoderoso, exibindo habilidades incríveis e causando confusão por onde passa.</p>
            </div>
            <div className="sm:col-span-2 col-span-3 flex items-end">
              <Image className="sticky bottom-0 scroll-fade" src={Mask} alt="Jack Russel brincando com a bola" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className={`px-4 text-secondary text-4xl text-center ${lilita.className}`}>Filhotes para chamar de seu</h2>
        <div className="mt-6" style={{ 'maxWidth': "960px", "marginInline": "auto" }}>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide ml-2">
                  <Image src={F1} alt="filhote de Jack Russel" className="rounded-lg" style={{ height: "290px" }} />

                  <h4 className="text-secondary font-medium text-lg mt-2">CADU PONTA DO RECREIO</h4>

                  <div className="flex justify-between my-2">
                    <span className="font-light">Macho</span>
                    <span className="font-light">Branco e Marrom</span>
                  </div>

                  <button className="flex gap-2 items-center justify-center bg-primary w-full my-auto px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-white text-xl font-medium hover:shadow-md">
                    Eu quero esse artista
                  </button>

                  <button className="flex gap-2 items-center justify-center w-full border border border-secondary mt-2 px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-secondary text-xl font-medium hover:shadow-md">
                    me conta mais
                  </button>
                </div>
                <div className="embla__slide">
                  <Image src={F3} alt="filhote de Jack Russel" className="rounded-lg" style={{ height: "290px", objectFit: 'cover' }} />

                  <h4 className="text-secondary font-medium text-lg mt-2">DIVA PONTA DO RECREIO</h4>

                  <div className="flex justify-between my-2">
                    <span className="font-light">Fêmea</span>
                    <span className="font-light">Branco e Marrom</span>
                  </div>

                  <button className="flex gap-2 items-center justify-center bg-primary w-full my-auto px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-white text-xl font-medium hover:shadow-md">
                    Eu quero esse artista
                  </button>

                  <button className="flex gap-2 items-center justify-center w-full border border border-secondary mt-2 px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-secondary text-xl font-medium hover:shadow-md">
                    me conta mais
                  </button>
                </div>
                <div className="embla__slide">
                  <Image src={F4} alt="filhote de Jack Russel" className="rounded-lg" style={{ height: "290px", objectFit: 'cover' }} />

                  <h4 className="text-secondary font-medium text-lg mt-2">DORA PONTA DO RECREIO</h4>

                  <div className="flex justify-between my-2">
                    <span className="font-light">Fêmea</span>
                    <span className="font-light">Branco e Preto</span>
                  </div>

                  <button className="flex gap-2 items-center justify-center bg-primary w-full my-auto px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-white text-xl font-medium hover:shadow-md">
                    Eu quero esse artista
                  </button>

                  <button className="flex gap-2 items-center justify-center w-full border border border-secondary mt-2 px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-secondary text-xl font-medium hover:shadow-md">
                    me conta mais
                  </button>
                </div>
                <div className="embla__slide ">
                  <Image src={F2} alt="filhote de Jack Russel" className="rounded-lg" style={{ height: "290px", objectFit: 'cover' }} />

                  <h4 className="text-secondary font-medium text-lg mt-2">CADU PONTA DO RECREIO</h4>

                  <div className="flex justify-between my-2">
                    <span className="font-light">Macho</span>
                    <span className="font-light">Branco e Marrom</span>
                  </div>

                  <button className="flex gap-2 items-center justify-center bg-primary w-full my-auto px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-white text-xl font-medium hover:shadow-md">
                    Eu quero esse artista
                  </button>

                  <button className="flex gap-2 items-center justify-center w-full border border border-secondary mt-2 px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-secondary text-xl font-medium hover:shadow-md">
                    me conta mais
                  </button>
                </div>
                <div className="embla__slide">
                  <Image src={F2} alt="filhote de Jack Russel" className="rounded-lg" style={{ height: "290px", objectFit: 'cover' }} />

                  <h4 className="text-secondary font-medium text-lg mt-2">CADU PONTA DO RECREIO</h4>

                  <div className="flex justify-between my-2">
                    <span className="font-light">Macho</span>
                    <span className="font-light">Branco e Marrom</span>
                  </div>

                  <button className="flex gap-2 items-center justify-center bg-primary w-full my-auto px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-white text-xl font-medium hover:shadow-md">
                    Eu quero esse artista
                  </button>

                  <button className="flex gap-2 items-center justify-center w-full border border border-secondary mt-2 px-6 py-2 rounded transition-all duration-300 hover:brightness-75 text-secondary text-xl font-medium hover:shadow-md">
                    me conta mais
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="embla__prev rounded-full border-2 mt-2" onClick={scrollPrev}>
                <ChevronLeft />
              </button>
              <button className="embla__next border-2 rounded-full ml-3 mt-2" onClick={scrollNext}>
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-surface pt-7">
        <div className="app-container | grid lg:grid-cols-2 grid-rows-2">
          <div className={"flex flex-col items-center sm:items-start"}>
            <h4 className="mb-4 text-2xl">Contato</h4>
            <span className="">+55 (21) 999550581</span>
            <span>pontadorecreio@gmail.com</span>
            <span>Rio de Janeiro - RJ</span>
          </div>
        </div>
      </section>
    </>
  );
}
