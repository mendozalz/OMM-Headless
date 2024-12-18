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
      <h2>Octavio Marulanda Morales ( 1921 - 1997).</h2>
      <p>
        Colombiano de racamandaca, paisa de pura cepa, dedicó su vida a divulgar
        y enriquecer las tradiciones, diversidad y costumbres del país. Viajó
        por Colombia entera para conocer, compartir, promover y extender ese
        conocimiento y su pasión por la riqueza cultural y artística de la
        tierra en que nació.
      </p>
      <p>
        Tal vez su herencia mulata le imprimió un ADN enriquecido de diversas
        experiencias, afectos y memorias que arraigados a sus células, lo
        hicieron parte integrante de nuestra identidad nacional, entretejida por
        vivencias y creencias ancestrales de indígenas, exclavos negros
        africanos, conquistadores e inmigrantes europeos, hasta el punto de
        harse también costeño, Andino, llanero y amazonense.
      </p>
      <p>
        Su amor por el arte y la cultura seguramente corrió por sus venas desde
        su concepción, pero afloró a su conciencia siendo un niño, por el gusto
        que sentía al escuchar las notas de la música que reproducía la radiola
        de su padre; desde temprana edad mostró inclinación por las letras, lo
        que lo convirtió en lector incansable y en escritor. Su biblioteca
        personal llegó a contener unos tres mil libros y atesoró un número
        similar de discos musicales.
      </p>
      <p>
        Profesional en Administración de Empresas y Contaduría Pública,
        desarrolló sus actividades en el campo de la cultura, combinando su
        trabajo con la investigación musical y folclórica. Estudió teatro en
        Cali y folclor en Bogotá, fue creador y director de entidades educativas
        y culturales, fue alumno y maestro.
      </p>
      <p>
        Su intensa carrera y su consagración a la actividad cultural del país,
        no evitó que se enamorara de una bellísima mujer manizalita y que sacara
        adelante una familia a la que inculcó definitivamente, su gusto por la
        lectura, el estudio, la docencia y el respeto por la diversidad y las
        diferencias. Le sobreviven a la fecha 5 hijos, 10 nietos y 10 bisnietos.
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
