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
    instituto: "Incolbatet"
  },
  {
    ciudad: "Bogotá",
    instituto: "Colcultura"
  },
  {
    ciudad: "Bogotá",
    instituto: "Instituto Distrital de Cultura y Turismo."
  },
  {
    ciudad: "Bogotá",
    instituto: "Centro de orientación musical Francisco Cristancho"
  },
  {
    ciudad: "Bogotá",
    instituto: "Academia Colombiana de Historia"
  }
];
const actividades = [
  {
    actividad: "Investigaciones Folclóricas"
  },
  {
    actividad: "Festivales & eventos"
  },
  {
    actividad: "Libros sobre Folclor"
  },
  {
    actividad: "Revistas"
  }
];
const librosDocumentos = [
  {
    encabezado: "Libro",
    titulo: "Rondas y los juegos Infantiles"
  },
  {
    encabezado: "Libro",
    titulo: "Rondas y los juegos Infantiles"
  },
  {
    encabezado: "Libro",
    titulo: "Rondas y los juegos Infantiles"
  },
  {
    encabezado: "Libro",
    titulo: "Rondas y los juegos Infantiles"
  },
  {
    encabezado: "Libro",
    titulo: "Rondas y los juegos Infantiles"
  },
  {
    encabezado: "Vistas",
    titulo: "Huella y Memoria"
  },
  {
    encabezado: "Vistas",
    titulo: "Lecturas de música colombiana"
  },
  {
    encabezado: "Vistas",
    titulo: "Colección mitológica"
  },
  {
    encabezado: "Vistas",
    titulo: "Bogotá 450 años – 55 revistas"
  },
  {
    encabezado: "Discos",
    titulo: "Álbum sobre Folclor del Litoral Pacífica"
  }
];
const eventosFestivales = [
  {
    titulo: "Encuentro nacional de rondas infantiles"
  },
  {
    titulo: "Primer encuentro nacional del bambuco"
  },
  {
    titulo: "Apoteosis Colombia"
  },
  {
    titulo: "Primer encuentro de música de América Latina (UNESCO)"
  }
];

const $$TablaFolclor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- component -->${maybeRenderHead()}<div class="max-w-container m-auto pt-[100px]"> <section class="container mx-auto p-6 font-mono"> <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg"> <div class="w-full overflow-x-auto"> <!--  1ra fila --> <table class="w-full"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black">Ciudad(es)</th> <th class="px-4 py-3 border-b-[1px]  hidden lg:block">Actividades</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2"> ${ciudadInstituto.map((item) => renderTemplate`<div class="flex items-center text-sm my-3"> <div class="relative w-8 h-8 mr-3 rounded-full md:block"> <img class="object-cover w-full h-full rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" loading="lazy"> <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div> </div> <div> <p class="font-semibold text-black">${item.ciudad}</p> <p class="text-xs text-gray-600">${item.instituto}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2 hidden lg:block border-none">${actividades.map((item) => renderTemplate`<ul class="px-2"> <li class="list-disc">${item.actividad}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 2da fila movil --> <table class="w-full lg:hidden"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black hidden">Ciudad(es)</th> <th class="px-4 py-3 border-b-[1px] border-black ">Actividades</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2 hidden"> ${ciudadInstituto.map((item) => renderTemplate`<div class="flex items-center text-sm my-3"> <div class="relative w-8 h-8 mr-3 rounded-full md:block"> <img class="object-cover w-full h-full rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" loading="lazy"> <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div> </div> <div> <p class="font-semibold text-black">${item.ciudad}</p> <p class="text-xs text-gray-600">${item.instituto}</p> </div> </div>`)} </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2 ">${actividades.map((item) => renderTemplate`<ul class="px-2"> <li class="list-disc">${item.actividad}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 2da fila --> <table class="w-full"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black">LIBROS & DOCUMENTOS</th> <th class="px-4 py-3 hidden lg:block">EVENTOS & FESTIVALES</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2"> ${librosDocumentos.map((item) => renderTemplate`<div class="text-sm my-3"> <div> <p class="font-semibold text-black">${item.encabezado}</p> <p class="text-xs text-gray-600">${item.titulo}</p> </div> </div>`)} <small class="mt-8"><b>Escribió con el seudónimo de: Estateraria.</b></small> </td> <td class="px-4 py-3 text-ms font-semibold border w-1/2 flex flex-col border-none mt-4 hidden lg:block">${eventosFestivales.map((item) => renderTemplate`<ul class="px-2 py-2"> <li class="list-disc">${item.titulo}</li> </ul>`)}</td> </tr> </tbody> </table> <!-- 4fila en movil --> <table class="w-full lg:hidden"> <thead> <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"> <th class="px-4 py-3 border-b-[1px] border-black hidden">LIBROS & DOCUMENTOS</th> <th class="px-4 py-3">EVENTOS & FESTIVALES</th> </tr> </thead> <tbody class="bg-white"> <tr class="text-gray-700"> <td class="px-4 py-1 border w-1/2 hidden"> ${librosDocumentos.map((item) => renderTemplate`<div class="text-sm my-3"> <div> <p class="font-semibold text-black">${item.encabezado}</p> <p class="text-xs text-gray-600">${item.titulo}</p> </div> </div>`)} <small class="mt-8"><b>Escribió con el seudónimo de: Estateraria.</b></small> </td> <td class="px-4 py-3 text-ms font-semibold border w-full flex flex-col border-none mt-4">${eventosFestivales.map((item) => renderTemplate`<ul class="px-2 py-2"> <li class="list-disc">${item.titulo}</li> </ul>`)}</td> </tr> </tbody> </table> </div> </div> </section> </div>`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/data-table-folclor/TablaFolclor.astro", void 0);

const $$Folclor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Folclor" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TablaFolclor", $$TablaFolclor, {})} ` })}`;
}, "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/folclor.astro", void 0);

const $$file = "C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/folclor.astro";
const $$url = "/folclor";

export { $$Folclor as default, $$file as file, $$url as url };
