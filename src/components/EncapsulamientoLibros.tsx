import { useEffect, useState } from "react";
import LibrosItem from "./LibrosItem";
import { motion } from "framer-motion";
import type { Post, Props } from "../interfaces/interface";

const tituloVariant = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 },
  },
};

const parrafoVariant = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const EncapsulamientoLibros: React.FC<Props> = ({ posts }) => {
  const [mostrarLibros, setMostrarLibros] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const verMas = () => {
    setMostrarLibros(!mostrarLibros);
  };

  const postSlice = mostrarLibros
    ? posts
    : posts.slice(0, isLargeScreen ? 10 : 8); // aqui 10 es para desktop y 8 para mobile para mostrar la cantidad de libros a presentar, de momento esta inhabilitado el boton ver más libros.

  return (
    <motion.div
      className="contenedor-titulo h-auto w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.h1
        variants={tituloVariant}
        className="uppecase text-[32px] md:text-[50px] lg:text-[60px] text-verde-dark text-center font-bold"
      >
        Libros
      </motion.h1>
      {/*  En este caso de repite la formula de 3 columnas momentaneamente, esto puede cambiar */}
      <div className="w-full h-auto grid grid-cols-3 lg:grid-cols-3 place-items-center">
        {postSlice.map((post) => (
          <div key={post.node.acfLibros.ordenEnumerada}>
            <LibrosItem post={post} />
          </div>
        ))}
      </div>
      {!mostrarLibros && (
        <div className="w-full text-center btn-ver-mas">
          {/* <button
            onClick={verMas}
            id="btn"
            className="mt-10 md:mt-0 lg:mt-4 text-center uppercase px-8 py-2 bg-verde-oscuro text-[18px] lg:text-[30px] text-white rounded-[50px]"
            type="button"
          >
            Ver más
          </button> */}
        </div>
      )}
    </motion.div>
  );
};

export default EncapsulamientoLibros;
