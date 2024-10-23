import { motion } from "framer-motion";

const TimeLineComponent = () => {
  return (
    <>
      <div className="mt-32 flex flex-col items-center py-2">
        <h1 className="intro font-bold text-center text-[26px] lg:text-[32px] py-8">
          Biografía de la vida y obra de Octavio Marulanda Morales
        </h1>
        <div className="container 5">
          <motion.div className="main-timeline">
            {/* 1st section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1921</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Nacimiento</h5>
                <p className="description">
                  Nace el 7 de octubre en Manizales, en el Barrio Hoyo Frio.
                </p>
              </div>
            </motion.div>
            {/* 1st section*/}
            {/* 2nd section*/}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1924</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Contacto con la música</h5>
                <p className="description">
                  A los 3 nos tiene contacto con la música en una radiola RSZ
                  Víctor que compa su padre. Empieza a escuchar música popular y
                  la sonata de Tanege interpretada por Andrés Segovia.
                </p>
              </div>
            </motion.div>
            {/* 2nd section*/}
            {/* 3st section*/}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1927</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Inicios</h5>
                <p className="description">
                  Estudia en el Colegio de Cristo en Manizales la primaria y el
                  bachillerato (1927 – 1939)
                </p>
              </div>
            </motion.div>
            {/* 3st section*/}
            {/* 4nd section*/}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1938</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Bogotá</h5>
                <p className="description">
                  Tenia 17 anos cuando tuvo que trasladar a la mama a Bogotá
                  para internarla en el psiquiátrico de Sibaté donde murió. Le
                  tomo 3 días en llegar a Bogotá.
                </p>
              </div>
            </motion.div>
            {/* 4nd section*/}
            {/* 5st section*/}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1944</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Casamiento</h5>
                <p className="description">
                  El 22 de mayo se casa con Berenice Arbeláez y tienen 5 hijos.
                  Entra a trabajar en la emisora Electra Cultural en Cali.
                </p>
              </div>
            </motion.div>
            {/* 5st section*/}
            {/* 6nd section*/}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1945</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Cali</h5>
                <p className="description">
                  Se traslada con la familia a vivir a Cali. <br />
                  Trabaja en la emisora Electra Cultural.
                </p>
              </div>
            </motion.div>
            {/* 6nd section*/}
            {/* 7st section*/}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.1,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1950</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Instituo de cultura</h5>
                <p className="description">
                  Se incorpora al Instituto Popular de Cultura. y crea la
                  Escuela de Teatro Artistas del Pueblo, la primera escuela de
                  teatro del país. (1950 – 1965)
                </p>
              </div>
            </motion.div>
            {/* 7st section*/}
            {/* 8nd section*/}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.3,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1953</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Instituto Popular de Cultura
                </h5>
                <p className="description">
                  Crea en el Instituto Popular de Cultura el grupo de teatro
                  “Los Artistas del Pueblo”
                </p>
              </div>
            </motion.div>
            {/* 8nd section*/}
            {/* 9st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1955</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Periódico</h5>
                <p className="description">
                  En el Instituto Popular de Cultura crea el periódico “Paginas
                  de Cultura”
                </p>
              </div>
            </div>
            {/* 9st section*/}
            {/* 10nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1956</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Premio</h5>
                <p className="description">
                  Profesor de Historia del Teatro Universal y de Colombia en el
                  Instituto Popular de Cultura y la Escuela Departamental de
                  Teatro de Bellas Artes en Cali (1956 – 1976). Obtiene el
                  premio Presidencia de la Republica en el Festival Nacional de
                  Teatro.
                </p>
              </div>
            </div>
            {/* 10nd section*/}
            {/* 11st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1959</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Festival de las Naciones
                </h5>
                <p className="description">
                  En el Instituto popular de Cultura crea el Departamento de
                  Investigaciones Folclóricas (1959 -1972) Como homenaje a Tomas
                  Carrasquilla y con la obra “En la diestra de Dios padre”
                  recorren el país, la obra se estrena en Cali el 23 de abril de
                  1959 haciendo el papel de “San Pedro” con esta obre recorren
                  todo el país y se presentan en Paris (Francia) en el Festival
                  de las Naciones y obtienen el segundo lugar.
                </p>
              </div>
            </div>
            {/* 11st section*/}
            {/* 12nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1960</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Vinculo a Bellas Artes</h5>
                <p className="description">
                  Se vincula a Bellas Artes en Cali como profesor en la Escuela
                  de Teatro
                </p>
              </div>
            </div>
            {/* 12nd section*/}
            {/* 13st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1963</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Subdirector de Bellas Artes
                </h5>
                <p className="description">
                  Realizo Investigación folclórica en Guapi Cauca. Ocupa el
                  cargo de subdirector de la Escuela Departamental de Teatro en
                  Bellas Artes de Cali.
                </p>
              </div>
            </div>
            {/* 13st section*/}
            {/* 14nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1967</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Director editorial</h5>
                <p className="description">
                  Director editorial del libro “La música colonial en Colombia”
                  de Robert Stevenson, Editorial América de Cali
                </p>
              </div>
            </div>
            {/* 14nd section*/}
            {/* 15st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1969</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Estudio</h5>
                <p className="description">
                  Estudia en Incolda Administración Financiera (1969 a 1970)
                </p>
              </div>
            </div>
            {/* 15st section*/}
            {/* 16nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1971</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Directo del Teatro de Bellas Artes
                </h5>
                <p className="description">
                  Con motivo de los Juegos Panamericanos de Cali dicta un ciclo
                  de conferencias a profesionales sobre la cultura colombiana en
                  la Universidad del Valle. Ocupa el cargo de director de la
                  Escuela Departamental de Teatro de Bellas Artes (1971 a 1976)
                </p>
              </div>
            </div>
            {/* 16nd section*/}
            {/* 17st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1973</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">20 años</h5>
                <p className="description">
                  Cumple 20 anos dirigiendo la escuela de teatro del Instituto
                  Popular de Cultura. Publica el libro Folclor y Cultura General
                  con el Instituto Popular de Cultura.
                </p>
              </div>
            </div>
            {/* 17st section*/}
            {/* 18nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1974</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Funmúsica</h5>
                <p className="description">
                  Se vincula al concurso Mono Núñez y elabora los reglamentos y
                  estatutos de la Fundación Promusica Nacional de Ginebra,
                  Funmúsica. Miembro del comité técnico permanente de la
                  Fundación y creador del Centro de Documentación Musical
                  “Hernán Restrepo Duque”.
                </p>
              </div>
            </div>
            {/* 18nd section*/}
            {/* 19st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1975</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Retiro</h5>
                <p className="description">
                  Se retira de Bellas Artes después de laborar por 13 años y 11
                  meses.
                </p>
              </div>
            </div>
            {/* 19st section*/}
            {/* 20nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1978</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Incolballet</h5>
                <p className="description">
                  Miembro fundador y asesor folclórico y pedagógico del
                  Instituto Colombiano de Ballet Clásico de Cali (Incolballet)
                  Director de la sección de Folclore y Festivales del Centro de
                  documentación musical de Colcultura, Bogotá (1978 – 1980)
                </p>
              </div>
            </div>
            {/* 20nd section*/}
            {/* 21st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1979</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Trimalca</h5>
                <p className="description">
                  En Colcultura en Bogotá hizo un álbum de 3 discos sobre el
                  folclor del Litoral Pacifico, realizado el primer encuentro
                  nacional de Rondas Infantiles en Armero (Tolima). Coordino por
                  Colombia la primera Tribula Latinoamericana (Trimalca), primer
                  encuentro de música de América Latina convocado por la Unesco.
                  <br />
                  Realizo el evento Apoteosis Colombia.
                </p>
              </div>
            </div>
            {/* 21st section*/}
            {/* 22nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1980</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Artestudio</h5>
                <p className="description">
                  Se vincula a la oficina de diseño especializado de caligrafía
                  clásica de Gladys González Arévalo (Artestudio). En Funmúsica
                  entra a integrar el comité técnico permanente.
                  <br />
                  Profesor de folclore en el Centro de Orientación Musical
                  Francisco Cristancho, Bogotá 1980-1993
                </p>
              </div>
            </div>
            {/* 22nd section*/}
            {/* 23st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1981</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Libro para Funmúsica</h5>
                <p className="description">
                  Escribe para Funmúsica el libro “Historia de un hombre que se
                  convirtió en símbolo”
                </p>
              </div>
            </div>
            {/* 23st section*/}
            {/* 24nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1983</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Venezuela</h5>
                <p className="description">
                  Representante por Colombia en el primer Congreso
                  Interamericano de Etnomusicología y Folclor (Inidef) en
                  Caracas Venezuela.
                </p>
              </div>
            </div>
            {/* 24nd section*/}
            {/* 25st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1984</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Publicación en Artestudio
                </h5>
                <p className="description">
                  En Artestudio editores publica el libro “ El Folclor de
                  Colombia, Practica de la identidad cultural”
                </p>
              </div>
            </div>
            {/* 25st section*/}
            {/* 26nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1985</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  45 Congreso de Americanistas
                </h5>
                <p className="description">
                  Representante por Colombia y relator del 45 Congreso de
                  Americanistas, Universidad de los Andes, Bogotá. Recolección
                  de rondas y juegos infantiles en el plan de incorporación de
                  la cultura popular a la educación para la “Escuela Nueva” del
                  Ministerio de educación, OEA y Museo de Artes y Tradiciones
                  populares.
                </p>
              </div>
            </div>
            {/* 26nd section*/}
            {/* 27st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1987</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Instituto Universitario de Historia
                </h5>
                <p className="description">
                  Profesor de folclore Instituto Universitario de Historia,
                  Bogotá 1987 - 1993
                </p>
              </div>
            </div>
            {/* 27st section*/}
            {/* 28nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1988</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">70 homenajes en 2 años</h5>
                <p className="description">
                  Se vincula al Instituto Distrital de Cultura y Turismo en
                  Bogotá. En la sala Oriol Rangel hace un ciclo de homenajes a
                  compositores (70 homenajes en 2 años). Con la secretaria
                  ejecutiva del Convenio Andrés Bello publica el libro “Las
                  Rondas y los Juegos Infantiles -Folclor y Educación”
                </p>
              </div>
            </div>
            {/* 28nd section*/}
            {/* 29st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1989</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Lecturas de música colombiana
                </h5>
                <p className="description">
                  Director de la Colección “Lecturas de música colombiana” del
                  Instituto Distrital de Cultura y Turismo de Bogotá (Tomos del
                  1 al 4) (1989-1991).
                </p>
              </div>
            </div>
            {/* 29st section*/}
            {/* 30nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1990</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Apoteosis Colombiana</h5>
                <p className="description">
                  Director de la revista “Huella y memoria” y director de
                  “Apoteosis Colombiana” del Instituto Distrital de Cultura y
                  Turismo de Bogotá.
                </p>
              </div>
            </div>
            {/* 30nd section*/}
            {/* 31st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1991</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Multiple labores</h5>
                <p className="description">
                  En Funmusica organiza el Centro de Documentación Musical e
                  inicia la publicación de libros sobre compositores
                  colombianos. Elabora programas especiales de Apreciación
                  Musical para las emisoras culturales de la Universidad
                  Javeriana de Antioquia y Cauca. Realizo talleres de
                  Apreciación e Historia de la música colombiana en Casa de la
                  Cultura de Buga, Palmira, El Cerrito y Ginebra en el Valle del
                  Cauca, 1991 - 1997
                </p>
              </div>
            </div>
            {/* 31st section*/}
            {/* 32nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1993</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Funmusica - Libros I</h5>
                <p className="description">
                  En Funmusica escribe el libro “Hernando Sinisterra Gómez,
                  huella y memoria” Tomo I de la Colección Nuestra Música y el
                  libro Álvaro Romero Sánchez – Una partitura sin fin, Tomo II.
                </p>
              </div>
            </div>
            {/* 32nd section*/}
            {/* 33st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1994</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Funmusica - Libros II</h5>
                <p className="description">
                  En Funmusica escribe el libro “Un concierto que dura 20 anos”
                  con motivo de sus 20 años. Es el Tomo III y el libro Pedro
                  Morales Pino – Gloria recobrada, el Tomo IV de la Colección
                  Nuestra Música.
                </p>
              </div>
            </div>
            {/* 33st section*/}
            {/* 34nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1995</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Funmusica - Libros III</h5>
                <p className="description">
                  Con Funmusica publica el folleto “Palabras sonoras,
                  vocabulario de música” Johannio le realiza una entrevista y
                  publica el folleto “Una vida dedicada a la cultura colombiana”
                </p>
              </div>
            </div>
            {/* 34nd section*/}
            {/* 35st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1994</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Festivalito</h5>
                <p className="description">
                  Con la Fundación Armonía de Santander participa en el
                  Festivalito.
                </p>
              </div>
            </div>
            {/* 35st section*/}
            {/* 34nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1997</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Partida</h5>
                <p className="description">
                  Muere el 10 de febrero a los 76 años, estaba trabajando para
                  Funmusica.
                </p>
              </div>
            </div>
            {/* 34nd section*/}
          </motion.div>
        </div>
        <br />
      </div>
    </>
  );
};

export default TimeLineComponent;
