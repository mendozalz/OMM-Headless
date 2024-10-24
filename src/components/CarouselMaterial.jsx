import { Carousel, Typography, Button } from "@material-tailwind/react";

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
            className="h-full w-full lg:object-contain object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-full lg:w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 -mt-6 lg:mt-20">
              <Typography
                variant="h1"
                color="black"
                className="text-[75px] lg:text-[5rem] lg:leading-[80px] leading-[80px] font-normal uppercase text-black/80 text-center lg:text-left md:mt-[60%] lg:mt-0 font-cinzel"
              >
                {card.title}
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="lg:pl-4 lg:text-[4rem] text-[35px] lg:leading-[60px] leading-[30px] lg:font-normal text-black/80 lg:text-left text-center font-irregardless tracking-[10px] font-semibold mb-[20px] lg:mb-0"
              >
                {card.parrafo}
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="lg:pl-4 lg:text-[2rem] text-[35px] lg:leading-[50px] leading-[30px] lg:font-normal text-black/80 lg:text-left text-center tracking-[10px] font-semibold mb-[100px] lg:mb-0"
              >
                {card.tipo}
              </Typography>
              <div className="w-full px-4 lg:max-w-[200px] lg:mt-4 mt-0">
                <Button className="bg-verde-oscuro text-white w-full px-4 py-1 rounded-2xl text-[25px] uppercase">
                  <a href={card.verMas}>Leer más</a>
                </Button>
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
