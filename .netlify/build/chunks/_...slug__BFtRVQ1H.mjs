/* empty css                             */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderTransition, g as renderSlot, h as fade, u as unescapeHTML } from './astro/server_DIJOQVyM.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './Layout_DaALRqJQ.mjs';
/* empty css                          */
import { jsx } from 'react/jsx-runtime';
import 'react';
import { a as getSingleLibro } from './GraphQL_CG8vETsO.mjs';

const $$Astro$3 = createAstro("http://omm-headless.vercel.app");
const $$Autor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Autor;
  const { autor, bio, imgAutor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-screen-lg h-auto px-7 lg:px-0 mb-5 flex flex-col lg:flex-row flex-nowrap gap-4 lg:gap-10 items-center"> <img style="border-radius: 50%;"${addAttribute(imgAutor, "src")} width="200" class="relative w-[200px] lg:w-[180px] bg-slate-200 p-10 rounded-full" alt="Foto de Octavio Marulanda"> <div class="
            prose lg:prose-xl max-w-none 
            prose-headings:font-bold prose-headings:text-pacamara-accent 
            prose-p:text-pacamara-primary/70 lg:prose-p:text-[18px] prose-p:transition-all prose-p:duration-300 
            prose-a:font-semibold prose-a:text-pacamara-dark prose-a:hover:text-pacamara-pink prose-a:no-underline prose-a:transition-all prose-a:duration-300
            prose-strong:font-normal 
            prose-headings:font-pacamara-space prose-h2:mb-7
            dark:prose-a:text-white dark:prose-a:hover:text-pacamara-accent dark:prose-p:text-verde-oscuro
        "> <h3 class="text-verde-dark">${autor}</h3> <p>${bio}</p> </div> </section> <div class="w-full h-[3px] overflow-hidden gradient-line"></div>`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/Autor.astro", void 0);

const $$Astro$2 = createAstro("http://omm-headless.vercel.app");
const $$LibroAnimado = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LibroAnimado;
  const { heroImg, descargar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="libro-animado" data-astro-cid-fglmrqbg> <ul class="align" data-astro-cid-fglmrqbg> <li data-astro-cid-fglmrqbg> <figure class="libro scale-[1.5] lg:scale-[2] lg:left-[50%] " data-astro-cid-fglmrqbg> <!-- Front --> <ul class="hardcover_front" data-astro-cid-fglmrqbg> <li data-astro-cid-fglmrqbg> <img class="w-full h-[220px]"${addAttribute(heroImg, "src")} alt="" width="100%" height="100%" data-astro-cid-fglmrqbg> </li> <li data-astro-cid-fglmrqbg></li> </ul> <!-- paginas --> <ul class="pagina" data-astro-cid-fglmrqbg> <li data-astro-cid-fglmrqbg></li> <li data-astro-cid-fglmrqbg> <a class="btn"${addAttribute(descargar, "href")} data-astro-cid-fglmrqbg>Descargar</a> </li> <li data-astro-cid-fglmrqbg></li> <li data-astro-cid-fglmrqbg></li> <li data-astro-cid-fglmrqbg></li> </ul> <!-- Back --> <ul class="hardcover_back" data-astro-cid-fglmrqbg> <li data-astro-cid-fglmrqbg></li> <li data-astro-cid-fglmrqbg></li> </ul> <ul class="libro_spine" data-astro-cid-fglmrqbg> <li data-astro-cid-fglmrqbg></li> <li data-astro-cid-fglmrqbg></li> </ul> </figure> </li> </ul> </div> `;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/LibroAnimado.astro", void 0);

const DateComponent = ({ fechaPublicacion }) => {
  const fecha = new Date(fechaPublicacion);
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  const fechaFormateada = `${dia} de ${mes} de ${año}`;
  return /* @__PURE__ */ jsx("time", { className: "text-[20px] font-bold text-verde-oscuro", dateTime: fechaPublicacion, children: fechaFormateada });
};

const $$Astro$1 = createAstro("http://omm-headless.vercel.app");
const $$SinglePostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SinglePostLayout;
  const postLibros = Astro2.props;
  console.log(postLibros.acfLibros.fechaPublicacion);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": postLibros.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[100px] lg:mt-[130px] p-6"> <div class="lg:max-w-[85vw] m-auto"> <div> <a class="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border px-6 py-2 transition-colors duration-200 hover:border-verde-dark text-verde-oscuro" href="/home/#libros"> <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path class="" d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" fill="#698084"></path></svg>
Volver
</a> </div> <div class="hero-single-libros grid lg:grid-cols-2"> <!-- Libros Portada --> ${postLibros?.acfLibros?.enlaceDeDescarga?.node?.link ? renderTemplate`<div class="order-last lg:order-first"> ${renderComponent($$result2, "LibroAnimado", $$LibroAnimado, { "descargar": postLibros.acfLibros.enlaceDeDescarga.node.link, "heroImg": postLibros.acfLibros.caratulaLibro.node.mediaItemUrl })} </div>` : renderTemplate`${renderComponent($$result2, "LibroAnimado", $$LibroAnimado, { "heroImg": postLibros.acfLibros.caratulaLibro.node.mediaItemUrl })}`} <!--  --> <div class="lg:border-l-2 lg:pl-8"> <!-- Categoria y Fecha de publicación Movil--> <div class="categoria-fecha-movil flex lg:hidden justify-between items-center gap-4 w-full h-20"> <div> ${postLibros?.categories?.nodes[0]?.name ? renderTemplate`<span class="border-verde-medio border-2 text-verde-oscuro font-medium rounded-3xl px-4 py-2 text-base">${postLibros.categories.nodes[0].name}</span>` : null} </div> ${renderComponent($$result2, "DateComponent", DateComponent, { "fechaPublicacion": postLibros.acfLibros.fechaPublicacion })}  </div> <div class="w-full m-auto lg:max-w-[85vw]"> <!-- Hero Single Post --> <img class="w-full h-[380px] rounded-xl lg:rounded-s-none object-cover" width="1020" height="320"${addAttribute(postLibros.acfLibros.caratulaLibro.node.mediaItemUrl, "src")} alt=""> </div> <!-- Titulo --> <h1 class="text-[36px] text-left lg:text-center lg:text-[56px] font-semibold lg:leading-[70px] lg:mt-8"> ${postLibros.title} </h1> <!-- Categoria y Fecha de publicación PC--> <div class="categoria-fecha-pc hidden lg:flex justify-start items-center gap-4 w-full h-20"> <div> ${postLibros?.categories?.nodes[0]?.name ? renderTemplate`<span class="border-verde-medio border-2 text-verde-oscuro font-medium rounded-3xl px-4 py-2 text-base">${postLibros.categories.nodes[0].name}</span>` : null} </div> ${renderComponent($$result2, "DateComponent", DateComponent, { "fechaPublicacion": postLibros.acfLibros.fechaPublicacion })} </div> </div> </div> <!-- Contenido del libro --> <li class="max-w-article-size mx-auto w-full h-auto space-y-4 list-none"> <div class="w-full max-w-[none] rounded-xl"${addAttribute(renderTransition($$result2, "apgj34uf", fade({ duration: "0.4s" })), "data-astro-transition-scope")}> <article> <div class="prose prose-zinc prose-invert lg:prose-xl lg:px-12 pb-12 m-auto"> ${renderSlot($$result2, $$slots["default"])} </div> </article> </div> </li> <!--  --> </div> <div class="img-autor"> ${renderComponent($$result2, "Autor", $$Autor, { "imgAutor": postLibros.acfLibros.autor.fotoAutor.node.mediaItemUrl, "autor": postLibros.acfLibros.autor.autorPublicacion, "bio": postLibros.acfLibros.autor.biografiaDelAutor })} </div> </div> ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/layouts/SinglePostLayout.astro", "self");

const $$Astro = createAstro("http://omm-headless.vercel.app");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const postLibros = await getSingleLibro(slug);
  return renderTemplate`${renderComponent($$result, "SinglePostLayout", $$SinglePostLayout, { ...postLibros, "slug": slug }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:px-0 pt-4 mb-5 mx-auto
    prose lg:prose-xl
    prose-headings:transition-all prose-headings:duration-300 prose-headings:font-pacamara-space prose-headings:font-bold prose-headings:text-pacamara-accent prose-headings:mb-0 prose-headings:pb-3 prose-headings:mt-6 
    prose-p:transition-all prose-p:duration-300 prose-p:text-pacamara-primary/80
    prose-li:transition-all prose-li:duration-300 prose-li:text-pacamara-primary/80
    prose-td:transition-all prose-td:duration-300 prose-td:text-pacamara-primary/80
    prose-a:underline prose-a:font-semibold prose-a:transition-all prose-a:duration-300 prose-a:text-pacamara-accent hover:prose-a:text-pacamara-dark
    prose-strong:transition-all prose-strong:duration-300 prose-strong:font-bold 
    prose-hr:transition-all prose-hr:duration-300 prose-hr:border-pacamara-secondary/40
    prose-img:rounded-lg prose-img:mx-auto
    prose-code:transition-all prose-code:duration-300 prose-code:text-pacamara-dark
    dark:prose-headings:text-verde-dark dark:prose-p:text-black/70 dark:prose-a:text-black dark:hover:prose-a:text-pacamara-accent dark:prose-strong:text-black dark:prose-li:text-black dark:prose-code:text-black dark:prose-td:text-black/70 dark:prose-hr:border-pacamara-accent/30 dark:prose-tr:border-pacamara-accent/30 dark:prose-thead:border-pacamara-accent/30"> <div>${unescapeHTML(postLibros.content)}</div> </div> ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/libros/[...slug].astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/libros/[...slug].astro";
const $$url = "/libros/[...slug]";

export { $$ as default, $$file as file, prerender, $$url as url };
