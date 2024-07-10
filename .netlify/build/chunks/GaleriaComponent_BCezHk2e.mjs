import { a as createComponent, r as renderTemplate, e as renderHead, b as addAttribute } from './astro/server_DIJOQVyM.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getGalImg } from './GraphQL_CG8vETsO.mjs';
/* empty css                           */

const $$GaleriaComponent = createComponent(async ($$result, $$props, $$slots) => {
  const galleries = await getGalImg();
  console.log(galleries);
  let images = galleries.flatMap((gallery) => gallery.sourceUrl);
  images = images.reverse();
  console.log(images);
  return renderTemplate`<html data-astro-cid-o7gjgefq> <head><title>Galería de Fotos</title><!-- <link rel="stylesheet" href="/path/to/your/styles.css"> -->${renderHead()}</head> <body data-astro-cid-o7gjgefq> <div class="galeria-octavio-marulanda h-auto w-full mt-24 lg:mt-28" data-astro-cid-o7gjgefq> <div id="gallery" data-astro-cid-o7gjgefq> ${images.map((imageId, index) => renderTemplate`<div data-astro-cid-o7gjgefq> <img${addAttribute(`${imageId}`, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} data-astro-cid-o7gjgefq> <a${addAttribute(`#lightbox-${index % 18 + 1}`, "href")} data-astro-cid-o7gjgefq></a> </div>`)} </div> ${images.map((imageId, index) => renderTemplate`<div class="lightbox"${addAttribute(`lightbox-${index % 18 + 1}`, "id")} data-astro-cid-o7gjgefq> <div class="content" data-astro-cid-o7gjgefq> <img${addAttribute(`${imageId}`, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} data-astro-cid-o7gjgefq> <a class="close" href="#gallery" data-astro-cid-o7gjgefq></a> </div> </div>`)} </div> </body></html><!-- Estilos -->`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/GaleriaComponent.astro", void 0);

export { $$GaleriaComponent as $ };
