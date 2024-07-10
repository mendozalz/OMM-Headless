import { c as createAstro, a as createComponent, r as renderTemplate, e as renderHead, b as addAttribute } from './astro/server_DIJOQVyM.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getGalImg } from './GraphQL_CG8vETsO.mjs';
/* empty css                           */

const $$Astro = createAstro("http://omm-headless.vercel.app");
const $$GaleriaComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GaleriaComponent;
  const galleries = await getGalImg();
  let images = galleries.flatMap((gallery) => gallery.sourceUrl);
  images = images.reverse();
  const { pt, px, pb } = Astro2.props;
  console.log(pt);
  return renderTemplate`<html data-astro-cid-o7gjgefq> <head><title>Galería de Fotos</title>${renderHead()}</head> <body data-astro-cid-o7gjgefq> <div class="galeria-octavio-marulanda h-auto w-full mt-24 lg:mt-28"${addAttribute(`padding-top: ${pt}; padding-left: ${px}; padding-right: ${px}; padding-bottom: ${pb}`, "style")} data-astro-cid-o7gjgefq> <h1 class="intro font-bold text-center text-[26px] lg:text-[32px] py-8" data-astro-cid-o7gjgefq>
Galeria de imagenes
</h1> <div id="gallery" data-astro-cid-o7gjgefq> ${images.map((imageId, index) => renderTemplate`<div data-astro-cid-o7gjgefq> <img${addAttribute(`${imageId}`, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} data-astro-cid-o7gjgefq> <a${addAttribute(`#lightbox-${index % 18 + 1}`, "href")} data-astro-cid-o7gjgefq></a> </div>`)} </div> ${images.map((imageId, index) => renderTemplate`<div class="lightbox"${addAttribute(`lightbox-${index % 18 + 1}`, "id")} data-astro-cid-o7gjgefq> <div class="content" data-astro-cid-o7gjgefq> <img${addAttribute(`${imageId}`, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} data-astro-cid-o7gjgefq> <a class="close" href="#gallery" data-astro-cid-o7gjgefq></a> </div> </div>`)} </div> </body></html><!-- Estilos -->`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/GaleriaComponent.astro", void 0);

export { $$GaleriaComponent as $ };
