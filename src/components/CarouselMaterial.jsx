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
            className="h-full w-full object-cover filter brightness-[1.02] contrast-[1.05]"
          />
          <div className="absolute inset-0 flex items-center h-full w-full">
            <div className="w-full px-6 md:px-10 lg:px-16 flex flex-col items-center lg:items-end absolute bottom-24">
              <section className="wrap-call-action bg-white/50 rounded-md px-4 py-2 lg:px-8 lg:py-4">
                <Typography
                  variant="lead"
                  color="black"
                  className="text-[60px] lg:text-[5rem] leading-[80px] lg:leading-[100px] font-cinzel tracking-[10px] text-center lg:text-right text-black/90"
                >
                  {card.tipo}
                </Typography>
                <div className="mt-0">
                  <section className="link-braces flex justify-center items-center">
                    <a
                      className="text-[25px] uppercase font-cinzel font-medium"
                      href={card.verMas}
                    >
                      Leer más
                    </a>
                  </section>
                </div>
              </section>
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
