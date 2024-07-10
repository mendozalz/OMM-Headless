/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_l2lp8Qud.mjs';
import 'kleur/colors';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { $ as $$Layout } from './Layout_CDz0Dnkk.mjs';

const TimeLineComponent = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-32 flex flex-col items-center py-2", children: [
    /* @__PURE__ */ jsx("h1", { className: "intro font-bold text-center text-[26px] lg:text-[32px] py-8", children: "Biografía de la vida y obra de Octavio Marulanda Morales" }),
    /* @__PURE__ */ jsx("div", { className: "container 5", children: /* @__PURE__ */ jsxs(motion.div, { className: "main-timeline", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1921" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Nacimiento" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "Nace el 7 de octubre en Manizales, en el Barrio Hoyo Frio." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1927" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Inicios" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "Estudia en el Colegio de Cristo en Manizales la primaria y el bachillerato (1927 – 1939)" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1924" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Contacto con la música" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "A los 3 nos tiene contacto con la música en una radiola RSZ Víctor que compa su padre. Empieza a escuchar música popular y la sonata de Tanege interpretada por Andrés Segovia." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1938" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Bogotá" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "Tenia 17 anos cuando tuvo que trasladar a la mama a Bogotá para internarla en el psiquiátrico de Sibaté donde murió. Le tomo 3 días en llegar a Bogotá." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1944" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Casamiento" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "El 22 de mayo se casa con Berenice Arbeláez y tienen 5 hijos. Entra a trabajar en la emisora Electra Cultural en Cali." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1945" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Cali" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "Se traslada con la familia a vivir a Cali." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 1.1,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1952" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Instituo de cultura" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "Se incorpora al Instituto Popular de Cultura. Crea la primera escuela de teatro del país, Artistas del Pueblo y el periódico Paginas Culturales." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 1.3,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          },
          className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1958" }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
            /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
              /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Festival de las Naciones" }),
              /* @__PURE__ */ jsx("p", { className: "description", children: "Con el grupo de teatro y la obra “A la diestra de Dios padre” se presentan en Paris (Francia) en el Festival de las Naciones y obtienen el 2 lugar." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1959" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Homenaje" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Como homenaje a Tomas Carrasquilla y con la obra “Al a diestra de Dios padre” recorren el país. Se vincula al Bellas Artes en Cali, a la escuela de teatro." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1960" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Vinculo a Bellas Artes" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se vincula a Bellas Artes en Cali como profesor en la Escuela de Teatro." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1963" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Subdirector de Bellas Artes" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Realizo Investigación folclórica en Guapi Cauca. Ocupa el cargo de subdirector de la Escuela Departamental de Teatro en Bellas Artes de Cali." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1969" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Incolda" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Estudia en Incolda Administración Financiera (1069 a 1970)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1971" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Director de Bellas Artes" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Con motivo de los Juegos Panamericanos de Cali dicta un ciclo de conferencias a profesionales sobre la cultura colombiana en la Universidad del Valle. Ocupa el cargo de director de la Escuela Departamental de Teatro de Bellas Artes." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1973" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "20 años" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Cumple 20 anos dirigiendo la escuela de teatro del Instituto Popular de Cultura. Publica el libro Folclor y Cultura General." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1971" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Director de Bellas Artes" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Con motivo de los Juegos Panamericanos de Cali dicta un ciclo de conferencias a profesionales sobre la cultura colombiana en la Universidad del Valle. Ocupa el cargo de director de la Escuela Departamental de Teatro de Bellas Artes." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1973" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "20 años" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Cumple 20 anos dirigiendo la escuela de teatro del Instituto Popular de Cultura. Publica el libro Folclor y Cultura General." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1974" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Mono Núñez" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se vincula al concurso Mono Núñez y elabora los reglamentos y estatutos." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1975" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Retiro" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se retira de Bellas Artes después de laborar por 13 años y 11 meses." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1976" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Funmusica" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se crea la Fundación de Música de Ginebra (Funmusica)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1979" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Colcultura" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se vincula a Colcultura en Bogotá para dirigir la oficina de Folclor y Festival. Allí hizo un álbum de 3 discos sobre el folclor del Litoral Pacifico, realizado el primer encuentro nacional de Rondas Infantiles en Armero (Tolima). Participo en el primer encuentro de música de América Latina convocado por la Unesco. Realizo el evento Apoteosis Colombia." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1980" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Artestudio" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se vincula a la oficina de diseño especializado de caligrafía clásica de Gladys González Arévalo (Artestudio). En Funmusica entra a integrar el comité técnico permanente." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1985" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Publicación" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Publica el libro “Las rondas y los juegos infantiles”" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1988" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Vinculo al Instituto Distrital de Cultura y Turismo en Bogotá" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Se vincula al Instituto Distrital de Cultura y Turismo en Bogotá. En la sala Oriol Rangel hace un ciclo de homenajes a compositores (70 homenajes en 2 años). Publica el libro Colección de Lectura de Música Colombiana." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1989" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Cuba" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Visita a Cuba con la Carifiesta." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1991" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Centro de Documentación Musical" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "En Funmusica organiza el Centro de Documentación Musical e inicia la publicación de libros sobre compositores colombianos." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1993" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: 'Libro “Hernando Sinisterra"' }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "En Funmusica escribe el libro “Hernando Sinisterra Gomez, huella y memoria”" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1994" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Séptimo libro" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Escribe el libro “Un concierto que dura 20 anos” con motivo de los 20 años de Funmusica (su séptimo libro)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1995" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: 'Palabras sonoras"' }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Con Funmusica publica el folleto “Palabras sonoras, vocabulario de música” Johannio le realiza una entrevista y publica el folleto “Una vida dedicada a la cultura colombiana”." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1996" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Séptimo libro" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Escribe el libro “Un concierto que dura 20 anos” con motivo de los 20 años de Funmusica (su séptimo libro)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "date-content order-1b", children: /* @__PURE__ */ jsx("div", { className: "date-outer", children: /* @__PURE__ */ jsx("span", { className: "date", children: /* @__PURE__ */ jsx("p", { className: "year pt-2", children: "1997" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "icon order-2" }),
        /* @__PURE__ */ jsxs("div", { className: "timeline-content order-3 md:w-1/2 p-3", children: [
          /* @__PURE__ */ jsx("h5", { className: "title pt-4 font-bold", children: "Fallecimiento" }),
          /* @__PURE__ */ jsx("p", { className: "description", children: "Muere el 10 de febrero a los 76 años, estaba trabajando para Funmusica." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("br", {})
  ] }) });
};

const $$Biografia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Biografia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TimeLineComponent", TimeLineComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TimeLineComponent", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/biografia.astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/biografia.astro";
const $$url = "/biografia";

export { $$Biografia as default, $$file as file, $$url as url };
