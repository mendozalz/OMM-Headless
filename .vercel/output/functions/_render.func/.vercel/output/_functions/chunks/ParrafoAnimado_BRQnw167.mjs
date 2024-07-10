import { l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent } from './astro/server_l2lp8Qud.mjs';
import 'kleur/colors';
import { b as getLibros } from './GraphQL_CG8vETsO.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const $$LibrosContainer = createComponent(async ($$result, $$props, $$slots) => {
  const libros = await getLibros();
  return renderTemplate`${maybeRenderHead()}<div id="libros" class="bg-white w-full h-auto lg:max-w-container lg:h-auto py-10 m-auto grid place-items-center md:place-items-start overflow-hidden p-1 lg:pb-10 md:px-5 md:py-0"> ${renderComponent($$result, "EncapsulamientoLibros", null, { "posts": libros, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/EncapsulamientoLibros", "client:component-export": "default" })} </div>`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/LibrosContainer.astro", void 0);

const ParrafoAnimado = ({ parrafo }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.4", "start 0.30"]
  });
  const palabras = parrafo.split(" ");
  return /* @__PURE__ */ jsx("p", { ref: container, className: `parrafosAnimados m-auto`, children: palabras.map((palabra, i) => {
    const start = i / palabras.length;
    const end = start + 1 / palabras.length;
    return /* @__PURE__ */ jsx(Palabras, { progreso: scrollYProgress, rango: [start, end], children: palabra }, i);
  }) });
};
const Palabras = ({ children, progreso, rango }) => {
  const opacity = useTransform(progreso, rango, [0, 1]);
  return /* @__PURE__ */ jsxs("span", { className: "palabras", children: [
    /* @__PURE__ */ jsx("span", { className: "sombra", children }),
    /* @__PURE__ */ jsx(motion.span, { style: { opacity }, children })
  ] });
};

export { $$LibrosContainer as $, ParrafoAnimado as P };
