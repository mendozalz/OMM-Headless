import { useState, useEffect } from "react";
import styles from "./Parrafo.module.css";
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
    <div
      className={`${styles.parrafoContainer} ${isVisible ? styles.visible : ""}`}
    >
      <p>
      Colombiano de racamandaca, paisa de pura cepa, dedicó su vida a divulgar y enriquecer las tradiciones, diversidad y costumbres del país. Viajó por Colombia entera para conocer, compartir, promover y extender ese conocimiento y su pasión por la riqueza cultural y artística de la tierra en que nació.
      </p>
      <p>
      Tal vez su herencia mulata le imprimió un ADN enriquecido de diversas experiencias, afectos y memorias que, arraigados a sus células, lo hicieron parte integrante de nuestra identidad nacional, entretejida por vivencias y creencias ancestrales de indígenas, esclavos negros africanos y conquistadores e inmigrantes europeos, hasta el punto de hacerse también costeño, Andino, llanero y amazonense.
      </p>
      <p>
      Su amor por el arte y la cultura seguramente corrió por sus venas desde su concepción, pero afloró a su conciencia siendo un niño, por el gusto que sentía al escuchar las notas de la música que reproducía la radiola de su padre. Su gusto por la música y los conocimientos que atesoro a cerca de ella, se hicieron posibles gracias a su vinculación a la emisora “Electra Cultural” de Cali. Su grupo de locutores interesados en la cultura y el contacto con los artistas, fueron la inspiración para que la música volviera a ser clave en su vida.
      </p>
      <p>
      Desde temprana edad mostró inclinación por las letras, pasión que fue secundada en su época escolar por su profesor de literatura, quien lo hizo monitor de la biblioteca donde encontró junto a los clásicos de la literatura universal, un amor que duraría una vida, y que lo convirtió en lector incansable, promotor de círculos literarios y escritor. Su biblioteca personal llegó a contener unos dos mil libros y atesoró un número similar de discos musicales.
      </p>
      <p>
      Se involucró en el teatro a raíz de su amistad con un cómico, payaso y teatrero bogotano, con el cual montó funciones de teatro callejero, con el fin de recaudar dineros para ayudar a una monja seglar, a construir un convento y más tarde, a un sacerdote de barrio, a construir la iglesia del barrio Arenales en Manizales.
      </p>
      <p>
      Estudió grafología y psicología, descubriendo su gran capacidad de memoria gráfica, conocimientos estos, que le permitieron trabajar para la fiscalía general de la nación como grafólogo forense, durante años; fue profesional en Administración de Empresas y en Contaduría Pública.
      </p>
      <p>
      El desarrollo de sus actividades en el campo de la cultura, los hizo combinando su trabajo cotidiano, con la investigación musical y folclórica. Estudió teatro en Cali y folclor en Bogotá, fue creador y director de entidades educativas y culturales, fue alumno y maestro.
      </p>
      <p>
      Su intensa carrera y su consagración a la actividad cultural del país, no evitó que se enamorara de una bellísima mujer manzanita y que sacara adelante una familia a la que inculcó definitivamente, su gusto por la lectura, el estudio, la docencia y el respeto por la diversidad y las diferencias. Le sobreviven a la fecha 5 hijos, 10 nietos y 13 bisnietos.
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
