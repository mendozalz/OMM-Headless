import { Carousel, Typography } from "@material-tailwind/react";

const CarouselMaterial = () => {
  return (
    <Carousel
      className="rounded-xl carruselMaterial mt-14 2xl:mt-10"
      navigation={false}
      autoplay={true}
      loop={true}
      autoplayDelay={700000}
    >
      {cards.map((card) => (
        <div
          className="relative h-[80vh] lg:h-[70vh] 2xl:h-[100vh] w-ful"
          key={card.id}
        >
          <img
            src={card.url}
            alt={card.title}
            className="h-full w-full lg:object-contain object-cover filter brightness contrast-100"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-full lg:w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 -mt-6 lg:mt-0">
              <Typography
                variant="lead"
                color="black"
                className="lg:pl-4 lg:text-[5rem] text-[60px] lg:leading-[100px] leading-[80px] lg:font-normal text-black/80 lg:text-left text-center tracking-[10px] font-medium lg:mb-0 lg:font-cinzel font-serif"
              >
                {card.tipo}
              </Typography>
              <div className="w-full px-4 lg:max-w-[200px] lg:mt-4 mt-0">
                <section className="link-braces flex justify-center items-center lg:justify-start">
                  <a
                    className="text-[25px] uppercase lg:font-bold font-medium"
                    href={card.verMas}
                  >
                    Leer más
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMaterial;

const cards = [
  {
    url: "/hero/omm_banner_teatro.webp",
    title: "Octavio",
    parrafo: "Marunlanda Morales",
    id: 1,
    tipo: "Teatro",
    verMas: "/teatro",
  },
  {
    url: "/hero/omm_banner_folclor.webp",
    title: "Octavio",
    parrafo: "Marunlanda Morales",
    id: 2,
    tipo: "Folclor",
    verMas: "/folclor",
  },
  {
    url: "/hero/omm_banner_musica.webp",
    title: "Octavio",
    parrafo: "Marunlanda Morales",
    id: 3,
    tipo: "Música",
    verMas: "/musica",
  },
];
