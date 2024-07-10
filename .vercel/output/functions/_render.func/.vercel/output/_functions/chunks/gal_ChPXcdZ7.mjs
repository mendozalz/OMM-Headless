/* empty css                             */
import { l as createComponent, m as renderTemplate, q as renderHead, o as addAttribute } from './astro/server_l2lp8Qud.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getGalImg } from './GraphQL_CG8vETsO.mjs';
/* empty css                       */

const $$Gal = createComponent(async ($$result, $$props, $$slots) => {
  const galleries = await getGalImg();
  console.log(galleries);
  const images = galleries.flatMap((gallery) => gallery.sourceUrl);
  console.log(images);
  return renderTemplate`<html data-astro-cid-vax4ylbd> <head><title>Galería de Fotos</title><link rel="stylesheet" href="/path/to/your/styles.css">${renderHead()}</head> <body data-astro-cid-vax4ylbd> <div class="galeria-octavio-marulanda h-auto w-full mt-24 lg:mt-28" data-astro-cid-vax4ylbd> <div id="gallery" data-astro-cid-vax4ylbd> ${images.map((imageId, index) => renderTemplate`<div data-astro-cid-vax4ylbd> <img${addAttribute(`${imageId}`, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} data-astro-cid-vax4ylbd> <a${addAttribute(`#lightbox-${index % 18 + 1}`, "href")} data-astro-cid-vax4ylbd></a> </div>`)} </div> ${images.map((imageId, index) => renderTemplate`<div class="lightbox"${addAttribute(`lightbox-${index % 18 + 1}`, "id")} data-astro-cid-vax4ylbd> <div class="content" data-astro-cid-vax4ylbd> <img${addAttribute(`${imageId}`, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} data-astro-cid-vax4ylbd> <a class="close" href="#gallery" data-astro-cid-vax4ylbd></a> </div> </div>`)} </div> </body></html><!-- Estilos -->`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/gal.astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/gal.astro";
const $$url = "/gal";

export { $$Gal as default, $$file as file, $$url as url };
