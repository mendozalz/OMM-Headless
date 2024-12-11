import { useState, useEffect } from 'react';
import styles from './Parrafo.module.css';
import { HiArrowLongRight } from "react-icons/hi2";

const Parrafo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait for BannerContainer animation to complete (4s)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // Match the zoomOut animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.parrafoContainer} ${isVisible ? styles.visible : ''}`}>
      <p>
      Octavio Marulanda Morales fue un destacado promotor cultural colombiano, nacido el 7 de octubre de 1921 en Manizales. Desde temprana edad mostró interés por la música, influenciado por la radiola de su padre. Durante su juventud, enfrentó desafíos familiares, como el traslado de su madre a un psiquiátrico en Bogotá.
      </p>
      <p>
      En 1944, contrajo matrimonio con Berenice Arbeláez y se trasladó a Cali, donde inició su carrera en la emisora Electra Cultural. Su pasión por la cultura lo llevó a fundar la primera escuela de teatro del país, Artistas del Pueblo, en 1952, además de crear el periódico Páginas Culturales.
      </p>
      <p>
      Marulanda Morales alcanzó reconocimiento internacional con la obra teatral "A la diestra de Dios padre", presentada en el Festival de las Naciones en París en 1958. A lo largo de su vida, dirigió diversas instituciones culturales, como el Instituto Popular de Cultura y la Escuela Departamental de Teatro en Bellas Artes de Cali.
      </p>
      <p>
      En 1973, publicó el libro "Folclor y Cultura General" y se involucró en la organización del concurso Mono Núñez. Su labor también se extendió a la promoción de la música colombiana, siendo cofundador de la Fundación de Música de Ginebra en 1976.
      </p>
      <p>
      Durante la década de 1980, se vinculó a Colcultura en Bogotá y publicó varios libros sobre música y cultura colombiana. Además, contribuyó a la creación del Centro de Documentación Musical en Funmusica en 1991.
      </p>
      <p>
      El legado de Octavio Marulanda Morales perdura a través de sus escritos y su incansable trabajo en la promoción de la cultura colombiana. Falleció el 10 de febrero de 1997, dejando un importante legado en el ámbito cultural del país.
      </p>
      <div className={styles.continuar}>
        <a href="/home" className={styles.continuarLink}>
          Continuar <HiArrowLongRight className={styles.arrow} />
        </a>
      </div>
    </div>
  );
};

export default Parrafo;