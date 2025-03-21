import { motion, useScroll, useTransform } from "framer-motion";
import NavMovil from "./NavMovil";

const Nav = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]
  );
  const height = useTransform(scrollY, [0, 100], [130, 80]);

  return (
    <motion.div
      className="navigation w-full h-28  fixed top-0 right-0 left-0 text-gray-900 flex items-center justify-between px-2 lg:px-6 py-2 font-semibold text-sm z-20"
      style={{
        background,
        height,
        backgroundImage: `linear-gradient(to right, ${background})`,
        backdropFilter: "blur(20px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="lg:max-w-[85vw] w-full flex justify-between items-center">
        <div className="contenedor-logo">
          <a className="cursor-pointer" href="/" data-astro-reload>
            <img
              className="w-auto h-[75px] lg:h-[100px] mr-auto py-1 lg:p-2"
              src="/img/logo octavio-04.png"
              alt="logo tipo de la silueta de Octavio Marulanda"
            />
          </a>
        </div>
        <ul className="list-none lg:flex items-center gap-6 hidden ph-line-nav nav">
          <li className="uppercase relative">
            <a href="/home">Home</a>
            <div className="effect"></div>
          </li>
          <li className="uppercase relative" style={{ whiteSpace: "nowrap" }}>
            <a href="/cronologia-de-vida">CRONOLOGIA DE VIDA</a>
            <div className="effect"></div>
          </li>
          <li className="uppercase relative">
            <a href="/galeria">Galeria</a>
            <div className="effect"></div>
          </li>
          <li className="uppercase relative">
            <a href="/biblioteca">Biblioteca</a>
            <div className="effect"></div>
          </li>
          <li className="uppercase relative">
            <a href="/contacto">Contacto</a>
            <div className="effect"></div>
          </li>
        </ul>
        <NavMovil />
      </div>
    </motion.div>
  );
};

export default Nav;
