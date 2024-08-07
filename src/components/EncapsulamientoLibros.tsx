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
    transition: { duration: 0.5, delay: .3 },
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
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  const verMas = () => {
    setMostrarLibros(!mostrarLibros);
  };

  const postSlice = mostrarLibros 
    ? posts 
    : posts.slice(0, isLargeScreen ? 4 : 3);
  

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
        Libros y Documentos
      </motion.h1>
      <motion.p
        variants={parrafoVariant}
        className="text-center w-full lg:max-w-[40vw] m-auto"
      >
        Eiusmod adipisicing nostrud voluptate ipsum eu qui enim aute cupidatat
        ea magna. Laborum ipsum reprehenderit cupidatat incididunt velit minim
        consectetur.
      </motion.p>
      <div  className="w-full h-auto grid grid-cols-3 lg:grid-cols-4 place-items-center">
        {postSlice.map((post) => (
          <div
            key={post.node.acfLibros.ordenEnumerada}
          >
            
            <LibrosItem post={post} />
          </div>
        ))}
      </div>
      {!mostrarLibros && (
        <div className="w-full text-center btn-ver-mas">
          <button
            onClick={verMas}
            id="btn"
            className="mt-10 md:mt-0 lg:mt-4 text-center uppercase px-8 py-2 bg-verde-oscuro text-[18px] lg:text-[30px] text-white rounded-[50px]"
            type="button"
          >
            Ver más
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default EncapsulamientoLibros;
