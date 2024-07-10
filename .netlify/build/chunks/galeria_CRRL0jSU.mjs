/* empty css                             */
import { a as createComponent, r as renderTemplate, d as renderComponent } from './astro/server_DIJOQVyM.mjs';
import 'kleur/colors';
import { $ as $$GaleriaComponent } from './GaleriaComponent_BCezHk2e.mjs';
import { $ as $$Layout } from './Layout_DaALRqJQ.mjs';

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galeria" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GaleriaComponent", $$GaleriaComponent, {})} ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/galeria.astro";
const $$url = "/galeria";

export { $$Galeria as default, $$file as file, $$url as url };
