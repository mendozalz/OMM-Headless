import { motion } from "framer-motion";

const TimeLineComponent = () => {
  return (
    <>
      <div className="mt-32 flex flex-col items-center py-2">
        <h1 className="intro font-bold text-center text-[26px] lg:text-[32px] py-8">
          Cronología de vida y obra de Octavio Marulanda Morales
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
                <p className="description">
                * Nació el 7 de octubre, en el Barrio Hoyo Frío de Manizales (Caldas). Fue el mayor de los hermanos.
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
                <p className="description">
                * A los 3 años tiene contacto con la música en una radiola RCA Víctor que compra su padre. Empieza a escuchar música popular colombiana y algunas piezas clásicas como la sonata de Tanege interpretada por Andrés Segovia.
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
                <p className="description">
                * Comienza su escolarización primaria en el "Colegio de Cristo" de los Hermanos Maristas en Manizales, donde se gradúa de bachiller (1927 – 1939).
                </p>
                <p className="description">
                * A sus 17 años hizo su primer viaje fuera de Manizales, ya que fue el responsable de trasladar a su madre a Bogotá para internarla en el psiquiátrico de Sibaté, donde murió en 1938. Le tomó 3 días llegar a Bogotá, y fue la última vez que la vió.
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
                    <p className="year pt-2">1944</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * El 22 de mayo, se casa con la Manizalita Berenice Arbeláez Ospina. De esta unión nacieron 5 hijos: Johanio, Ivanov, Lirian, Oneida y Janine, nombres que seleccionó él mismo, entre sus clásicos de literatura universal.
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
                    <p className="year pt-2">1945</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * Se traslada con su esposa a vivir a Cali, ciudad que vió nacer a sus hijos y en la vivió gran parte de su vida. 
                </p>
                <p className="description">
                * Comienza a trabajar en la emisora Electra Cultural.
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
                    <p className="year pt-2">1950</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * Se incorpora al Instituto Popular de Cultura (1950 – 1965).
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
                    <p className="year pt-2">1953</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * Crea en el Instituto Popular de Cultura, el grupo de teatro "Los Artistas del Pueblo". la primera escuela de teatro del país.
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
                    <p className="year pt-2">1955</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * En el Instituto Popular de Cultura crea el periódico "Páginas de Cultura".
                </p>
              </div>
            </motion.div>
            {/* 8nd section*/}
            {/* 9st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1956</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * Profesor de Historia del Teatro Universal y de Colombia, en el Instituto Popular de Cultura y la Escuela Departamental de Teatro de Bellas Artes en Cali (1956 – 1976).
                </p>
                <p className="description">
                * Obtiene el premio "Presidencia de la República", en el Festival Nacional de Teatro.
                </p>
              </div>
            </div>
            {/* 9st section*/}
            {/* 10nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1958</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                * Obtienen el premio nacional Agudelo de Teatro con el grupo "los Artistas del Pueblo".
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
                <p className="description">
                * En el Instituto popular de Cultura crea el Departamento de Investigaciones Folclóricas (1959 -1972).
                </p>
                <p className="description">
                * Como homenaje a Tomás Carrasquilla, montan la obra de teatro "En la diestra de Dios padre" con la que recorren el país. La obra se estrena en Cali el 23 de abril de 1959, y interpreta el papel de "San Pedro".  Esta obra se convirtió en un importante capítulo de la historia del teatro en Colombia, ninguna otra ha sido tan representada. Gracias a su calidad, se presenta en Paris (Francia), en el Festival de las Naciones y obtienen el segundo lugar. 
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
                <p className="description">
                * Se vincula a Bellas Artes y Extensión Cultural del Valle, en Cali, desde el 1 enero, como profesor en la Escuela de Teatro.
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
                <p className="description">
                * Realizó Investigación folclórica en Guapi- Cauca. 
                </p>
                <p className="description">
                * Ocupa el cargo de subdirector de la Escuela Departamental de Teatro en Bellas Artes de Cali. 
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
                <p className="description">
                * Director editorial del libro "La música colonial en Colombia" de Robert Stevenson, Editorial América de Cali.
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
                <p className="description">
                * Estudia en Incolda , Administración Financiera (1969 a 1970).
                </p>
                <p className="description">
                * Comienza a dictar clases de historia del teatro en Bellas Artes.
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
                <p className="description">
                * Con motivo de los Juegos Panamericanos de Cali, dicta un ciclo de conferencias a profesionales sobre la cultura colombiana en la Universidad del Valle.
                </p>
                <p className="description">
                * Ocupa el cargo de director de la Escuela Departamental de Teatro de Bellas Artes (1971 a 1975).
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
                <p className="description">
                * Cumple 20 años dirigiendo la escuela de teatro del Instituto Popular de Cultura.
                </p>
                <p className="description">
                * Publica el libro Folclor y Cultura General con el Instituto Popular de Cultura.
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
                <p className="description">
                * Se vincula al concurso Mono Núñez.
                </p>
                <p className="description">
                * Fue coescritor de los reglamentos y estatutos de la Fundación Promúsica Nacional de Ginebra, FUNMUSICA.
                </p>
                <p className="description">
                * Miembro del comité técnico permanente de la Fundación y creador del Centro de Documentación Musical "Hernán Restrepo Duque".
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
                <p className="description">
                * Se retira de Bellas Artes después de laborar para la institución 13 años y 11 meses.
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
                <p className="description">
                * Miembro fundador y asesor folclórico y pedagógico del Instituto Colombiano de Ballet Clásico de Cali (Incolballet).
                </p>
                <p className="description">
                * Director de la sección de Folclore y Festivales del Centro de documentación musical de Colcultura, Bogotá (1978 – 1980).
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
                <p className="description">
                * Ingresa a Colcultura Bogotá, como director de la sección de "Folclor y Festivales".
                </p>
                <p className="description">
                * Realizó un álbum de 3 discos sobre el folclor del Litoral Pacífico.
                </p>
                <p className="description">
                * Hizo el primer encuentro nacional de Rondas Infantiles en Armero (Tolima).
                </p>
                <p className="description">
                * Realizó el Festival de la Cumbiamba.
                </p>
                <p className="description">
                * Coordinó por Colombia, la primera Tribuna Latinoamericana (Trimalca), primer encuentro de música de América Latina convocado por la Unesco.
                </p>
                <p className="description">
                * Realizó el evento Apoteosis Colombia.
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
                <p className="description">
                * Se vincula a la oficina de diseño especializado de caligrafía clásica de Gladys González Arévalo (Artestudio).
                </p>
                <p className="description">
                * Entra a integrar el comité técnico permanente de Funmúsica.
                </p>
                <p className="description">
                * Profesor de folclore en el Centro de Orientación Musical Francisco Cristancho, Bogotá 1980-1993.
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
                <p className="description">
                * Escribe para Funmúsica el libro "Historia de un hombre que se convirtió en símbolo".
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
                <p className="description">
                * Representante por Colombia en el primer Congreso Interamericano de Etnomusicología y Folclor (Inidef) en Caracas Venezuela.
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
                <p className="description">
                * En Artestudio editores, publica el libro "El Folclor de Colombia", Práctica de la identidad cultural.
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
                <p className="description">
                * Representante por Colombia y relator del 45 Congreso de Americanistas, Universidad de los Andes, Bogotá.
                </p>
                <p className="description">
                * Recolección de rondas y juegos infantiles para el plan de incorporación de la cultura popular a la educación de la "Escuela Nueva" del Ministerio de educación, OEA y Museo de Artes y Tradiciones populares.
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
                <p className="description">
                * Profesor de folclore Instituto Universitario de Historia, Bogotá 1987 - 1993.
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
                <p className="description">
                * Se vincula al Instituto Distrital de Cultura y Turismo en Bogotá.
                </p>
                <p className="description">
                * En la sala Oriol Rangel realiza un ciclo de homenajes a compositores (70 homenajes en 2 años).
                </p>
                <p className="description">
                * En colaboración con la secretaria ejecutiva del Convenio Andrés Bello, publica el libro "Las Rondas y los Juegos Infantiles -Folclor y Educación".
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
                <p className="description">
                * Director de la Colección "Lecturas de música colombiana" del Instituto Distrital de Cultura y Turismo de Bogotá (Tomos del 1 al 4) (1989-1991).
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
                <p className="description">
                * Director de la revista "Huella y memoria".
                </p>
                <p className="description">
                * Director de "Apoteosis Colombiana" con el Instituto Distrital de Cultura y Turismo de Bogotá.
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
                <p className="description">
                * En Funmúsica organiza y dirige  el Centro de Documentación Musical e inicia la publicación de libros sobre compositores colombianos.
                </p>
                <p className="description">
                * Elabora programas especiales de Apreciación Musical para las emisoras culturales de la Universidad Javeriana de Antioquia y Cauca.
                </p>
                <p className="description">
                * Realiza talleres de Apreciación e Historia de la música colombiana en la Casa de la Cultura de Buga, Palmira, El Cerrito y Ginebra en el Valle del Cauca, 1991 - 1997.
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
                <p className="description">
                * En Funmúsica, escribe el libro "Hernando Sinisterra Gómez, huella y memoria" Tomo I de la Colección Nuestra Música y el libro Álvaro Romero Sánchez – Una partitura sin fin, Tomo II.
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
                <p className="description">
                * En Funmúsica escribe el libro "Un concierto que dura 20 años", Tomo III, con motivo de sus 20 años.
                </p>
                <p className="description">
                * Y el libro Pedro Morales Pino – Gloria recobrada, el Tomo IV de la Colección Nuestra Música.
                </p>
                <p className="description">
                * Con la Fundación Armonía de Santander, participa en el Festivalito.
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
                <p className="description">
                * Con Funmúsica publica el folleto "Palabras sonoras, vocabulario de música".
                </p>
                <p className="description">
                * Johannio Marulanda, su hijo le hace una entrevista y publica el folleto "Una vida dedicada a la cultura colombiana".
                </p>
              </div>
            </div>
            {/* 34nd section*/}
            {/* 35st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1997</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <p className="description">
                <span className="font-bold">Partida: </span> * Muere el 10 de febrero a los 76 años, estaba trabajando aún para Funmúsica.
                </p>
              </div>
            </div>
            {/* 35st section*/}
          </motion.div>
        </div>
        <br />
      </div>
    </>
  );
};

export default TimeLineComponent;
