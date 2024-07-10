/* empty css                             */
import { l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent } from './astro/server_l2lp8Qud.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './Layout_CDz0Dnkk.mjs';

const ciudadInstituto = [
  {
    ciudad: "Cali",
    instituto: "Instituto Popular de Cultura"
  },
  {
    ciudad: "Cali",
    instituto: "Bellas Artes"
  }
];
const actividades = [
  {
    actividad: "Actor"
  },
  {
    actividad: "Grupo Artistas del Pueblo"
  },
  {
    actividad: "TEC"
  },
  {
    actividad: "Escribió obras para teatro y títeres"
  },
  {
    actividad: "Director de la Escuela de Teatro"
  },
  {
    actividad: "Profesor de Historia del teatro"
  }
];
const obrasTeatro = [
  {
    encabezado: "Obra de Teatro",
    titulo: "Ritual para una máquina"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "Las fauces pintadas"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "Mal Ladrón con buen disfraz"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "El Hojarasquin"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "Bunde"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "Gritos bajo la tierra"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "Griselda entre los banqueros"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "De como fue la flor llevada al tribunal de las abejas"
  },
  {
    encabezado: "Obra de Teatro",
    titulo: "Teatro sin mascara"
  }
];
const eventosFestivales = [
  {
    titulo: "Investigación folclórica en Guapi Cauca 1963"
  },
  {
    titulo: "Festival de las naciones en Paris"
  }
];

const $$TablaTeatro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- component -->${maybeRenderHead()}<div class="max-w-container m-auto pt-[100px]"> <section class="container mx-auto p-6 font-mono"> <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg"> <div class="w-full overflow-x-auto"> <!--  1ra fila --> <table class="w-full"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black">Ciudad(es)</th> <th class="px-4 py-3 border-b-[1px] hidden lg:block">Actividades</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2"> ${ciudadInstituto.map((item) => renderTemplate`<div class="flex items-center text-sm my-3"> <div class="relative w-8 h-8 mr-3 rounded-full md:block"> <img class="object-cover w-full h-full rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" loading="lazy"> <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div> </div> <div> <p class="font-semibold text-black">${item.ciudad}</p> <p class="text-xs text-gray-600">${item.instituto}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold w-1/2 hidden lg:block">${actividades.map((item) => renderTemplate`<ul class="px-2"> <li class="list-disc">${item.actividad}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 2da fila movil --> <table class="w-full lg:hidden"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black hidden">Ciudad(es)</th> <th class="px-4 py-3 border-b-[1px] border-black ">Actividades</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2 hidden"> ${ciudadInstituto.map((item) => renderTemplate`<div class="flex items-center text-sm my-3"> <div class="relative w-8 h-8 mr-3 rounded-full md:block"> <img class="object-cover w-full h-full rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" loading="lazy"> <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div> </div> <div> <p class="font-semibold text-black">${item.ciudad}</p> <p class="text-xs text-gray-600">${item.instituto}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2 ">${actividades.map((item) => renderTemplate`<ul class="px-2"> <li class="list-disc">${item.actividad}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 2da fila --> <table class="w-full"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black">LIBROS & DOCUMENTOS</th> <th class="px-4 py-3 hidden lg:block">EVENTOS & FESTIVALES</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2"> ${obrasTeatro.map((item) => renderTemplate`<div class="text-sm my-3"> <div> <p class="font-semibold text-black">${item.encabezado}</p> <p class="text-xs text-gray-600">${item.titulo}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2 flex flex-col border-none mt-4 hidden lg:block">${eventosFestivales.map((item) => renderTemplate`<ul class="px-2 py-2"> <li class="list-disc">${item.titulo}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 4ta fila movil --> <table class="w-full lg:hidden"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black hidden">LIBROS & DOCUMENTOS</th> <th class="px-4 py-3">EVENTOS & FESTIVALES</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2 hidden"> ${obrasTeatro.map((item) => renderTemplate`<div class="text-sm my-3"> <div> <p class="font-semibold text-black">${item.encabezado}</p> <p class="text-xs text-gray-600">${item.titulo}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-full flex flex-col border-none mt-4">${eventosFestivales.map((item) => renderTemplate`<ul class="px-2 py-2"> <li class="list-disc">${item.titulo}</li> </ul>`)}</td> </tr> </tbody> </table> </div> </div> </section> </div>`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/data-table-teatro/TablaTeatro.astro", void 0);

const $$Teatro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Teatro" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TablaTeatro", $$TablaTeatro, {})} ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/teatro.astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/teatro.astro";
const $$url = "/teatro";

export { $$Teatro as default, $$file as file, $$url as url };
