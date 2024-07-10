/* empty css                             */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_DIJOQVyM.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './Layout_BADl5GlL.mjs';

const ciudadInstituto = [
  {
    ciudad: "Ginebra",
    instituto: "Funmusica"
  }
];
const actividades = [
  {
    actividad: "Festival Mono Núñez"
  },
  {
    actividad: "Escribió libros sobre músicos y compositores colombianos"
  },
  {
    actividad: "Centro de Investigación y Documentación musical"
  },
  {
    actividad: "Festivales & Eventos"
  }
];
const LibrosDocumentos = [
  {
    encabezado: "Libro",
    titulo: "Hernán Sinisterra Gómez – Huella y memoria"
  },
  {
    encabezado: "Libro",
    titulo: "Álvaro Romero Sánchez – Una partitura sin fin"
  },
  {
    encabezado: "Libro",
    titulo: "Un concierto que dura 20 anos"
  },
  {
    encabezado: "Libro",
    titulo: "Pedro Morales Pino – La gloria recobrada"
  },
  {
    encabezado: "Libro",
    titulo: "Palabras sonoras – Vocabulario de música"
  },
  {
    encabezado: "Libro",
    titulo: "La historia de un hombre que se convirtió en símbolo"
  },
  {
    encabezado: "Libro",
    titulo: "Una mirada histórica al pasillo colombiano"
  },
  {
    encabezado: "Libro",
    titulo: "Gerardo Arellano: una ausencia inexplicable"
  }
];
const eventosFestivales = [
  {
    titulo: "Talleres de apreciación de la música colombiana y andina"
  }
];

const $$TablaMusica = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- component -->${maybeRenderHead()}<div class="max-w-container m-auto pt-[100px]"> <section class="container mx-auto p-6 font-mono"> <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg"> <div class="w-full overflow-x-auto"> <!--  1ra fila --> <table class="w-full"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black">Ciudad(es)</th> <th class="px-4 py-3 border-b-[1px]  hidden lg:block ">Actividades</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2"> ${ciudadInstituto.map((item) => renderTemplate`<div class="flex items-center text-sm my-3"> <div class="relative w-8 h-8 mr-3 rounded-full md:block"> <img class="object-cover w-full h-full rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" alt="" loading="lazy"> <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div> </div> <div> <p class="font-semibold text-black">${item.ciudad}</p> <p class="text-xs text-gray-600">${item.instituto}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold  w-1/2 hidden lg:block ">${actividades.map((item) => renderTemplate`<ul class="px-2"> <li class="list-disc">${item.actividad}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 2ds fila movil --> <table class="w-full lg:hidden"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black hidden">Ciudad(es)</th> <th class="px-4 py-3 border-b-[1px] border-black">Actividades</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2 hidden"> ${ciudadInstituto.map((item) => renderTemplate`<div class="flex items-center text-sm my-3"> <div class="relative w-8 h-8 mr-3 rounded-full md:block"> <img class="object-cover w-full h-full rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" alt="" loading="lazy"> <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div> </div> <div> <p class="font-semibold text-black">${item.ciudad}</p> <p class="text-xs text-gray-600">${item.instituto}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2">${actividades.map((item) => renderTemplate`<ul class="px-2"> <li class="list-disc">${item.actividad}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 2da fila --> <table class="w-full"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black">LIBROS & DOCUMENTOS</th> <th class="px-4 py-3 hidden lg:block">EVENTOS & FESTIVALES</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2"> ${LibrosDocumentos.map((item) => renderTemplate`<div class="text-sm my-3"> <div> <p class="font-semibold text-black">${item.encabezado}</p> <p class="text-xs text-gray-600">${item.titulo}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2 lg:flex flex-col border-none mt-4 hidden">${eventosFestivales.map((item) => renderTemplate`<ul class="px-2 py-2"> <li class="list-disc">${item.titulo}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 4ta fila movil --> <table class="w-full lg:hidden"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black hidden">LIBROS & DOCUMENTOS</th> <th class="px-4 py-3">EVENTOS & FESTIVALES</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2 hidden"> ${LibrosDocumentos.map((item) => renderTemplate`<div class="text-sm my-3"> <div> <p class="font-semibold text-black">${item.encabezado}</p> <p class="text-xs text-gray-600">${item.titulo}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-full flex flex-col border-none mt-4">${eventosFestivales.map((item) => renderTemplate`<ul class="px-2 py-2"> <li class="list-disc">${item.titulo}</li> </ul>`)}</td> </tr> </tbody> </table> </div> </div> </section> </div>`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/data-table-musica/TablaMusica.astro", void 0);

const $$Musica = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Teatro" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TablaMusica", $$TablaMusica, {})} ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/musica.astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/musica.astro";
const $$url = "/musica";

export { $$Musica as default, $$file as file, $$url as url };
