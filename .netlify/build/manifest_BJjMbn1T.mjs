import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_DIJOQVyM.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"biografia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/biografia","isIndex":false,"type":"page","pattern":"^\\/biografia\\/?$","segments":[[{"content":"biografia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/biografia.astro","pathname":"/biografia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"folclor/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/folclor","isIndex":false,"type":"page","pattern":"^\\/folclor\\/?$","segments":[[{"content":"folclor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/folclor.astro","pathname":"/folclor","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"gal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gal","isIndex":false,"type":"page","pattern":"^\\/gal\\/?$","segments":[[{"content":"gal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gal.astro","pathname":"/gal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"galeria/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/galeria","isIndex":false,"type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"home/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"musica/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/musica","isIndex":false,"type":"page","pattern":"^\\/musica\\/?$","segments":[[{"content":"musica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/musica.astro","pathname":"/musica","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"teatro/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/teatro","isIndex":false,"type":"page","pattern":"^\\/teatro\\/?$","segments":[[{"content":"teatro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teatro.astro","pathname":"/teatro","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"}],"styles":[{"type":"external","src":"/_astro/biografia.JnVQE0t6.css"},{"type":"external","src":"/_astro/_slug_.DkeYtzsF.css"},{"type":"external","src":"/_astro/_slug_.BoCNXa7q.css"}],"routeData":{"route":"/libros/[...slug]","isIndex":false,"type":"page","pattern":"^\\/libros(?:\\/(.*?))?\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/libros/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"http://omm-headless.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/gal.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/layouts/SinglePostLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/libros/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/libros/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/home.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/biografia.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/folclor.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/musica.astro",{"propagation":"none","containsHead":true}],["C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/pages/teatro.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/biografia@_@astro":"pages/biografia.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/folclor@_@astro":"pages/folclor.astro.mjs","\u0000@astro-page:src/pages/gal@_@astro":"pages/gal.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/libros/[...slug]@_@astro":"pages/libros/_---slug_.astro.mjs","\u0000@astro-page:src/pages/musica@_@astro":"pages/musica.astro.mjs","\u0000@astro-page:src/pages/teatro@_@astro":"pages/teatro.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BJjMbn1T.mjs","C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_B8xMiDy1.mjs","/src/pages/biografia.astro":"chunks/biografia_Dw4SCHgT.mjs","/src/pages/contacto.astro":"chunks/contacto_C7Jlv_v7.mjs","/src/pages/folclor.astro":"chunks/folclor_CkbG3IyD.mjs","/src/pages/gal.astro":"chunks/gal_DFlGVyfJ.mjs","/src/pages/galeria.astro":"chunks/galeria_CRRL0jSU.mjs","/src/pages/home.astro":"chunks/home_Vu5YO6Dt.mjs","/src/pages/libros/[...slug].astro":"chunks/_...slug__BFtRVQ1H.mjs","/src/pages/musica.astro":"chunks/musica_CVX8YppP.mjs","/src/pages/teatro.astro":"chunks/teatro_B-K8GVv8.mjs","/src/pages/index.astro":"chunks/index_LRYaHZcW.mjs","@/components/ParrafoAnimado":"_astro/ParrafoAnimado.CdmoTApu.js","@/components/SmoothScroll":"_astro/SmoothScroll.CLBY9Ibk.js","@astrojs/react/client.js":"_astro/client.CvHkPHMh.js","C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/src/components/EncapsulamientoLibros":"_astro/EncapsulamientoLibros.C8pJphRs.js","@/components/Nav":"_astro/Nav.D-3WBUv8.js","@/components/Intro":"_astro/Intro.BJ9k3-0L.js","@/components/TimeLineComponent":"_astro/TimeLineComponent.C3m0in9R.js","/astro/hoisted.js?q=0":"_astro/hoisted.Oozc_hRb.js","C:/Users/MENDO/OneDrive/Desktop/INVENTEK/BiografiaOctavioMarulandaMoralesHeadLess/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs":"_astro/locomotive-scroll.modern.CTuj9vAD.js","@/components/CarouselMaterial":"_astro/CarouselMaterial.CTY7BoeL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Cinzel-Black.wX3N0VwM.otf","/_astro/Cinzel-Bold.CfyjOJCS.otf","/_astro/Poppins-Regular.CTKNfV9P.ttf","/_astro/Cinzel-Regular.EdepFPbw.otf","/_astro/fonnts.com-Irregardless_Variable.B9cjPo26.otf","/_astro/_slug_.BoCNXa7q.css","/_astro/_slug_.DkeYtzsF.css","/_astro/biografia.JnVQE0t6.css","/_astro/contacto.3VoViHq-.css","/fav_blanco.ico","/fav_blanco.png","/fav_negro.ico","/fav_negro.png","/fotos_octavio/carrusel-1.jpg","/fotos_octavio/carrusel-2.jpg","/fotos_octavio/carrusel-3.jpg","/fotos_octavio/fondo1.jpg","/fotos_octavio/fondo1_1.jpg","/fotos_octavio/fondo1_2.jpg","/fotos_octavio/Ocatvio_foto_1.jpg","/fotos_octavio/Ocatvio_foto_10.jpg","/fotos_octavio/Ocatvio_foto_11.jpg","/fotos_octavio/Ocatvio_foto_12.jpg","/fotos_octavio/Ocatvio_foto_13.jpg","/fotos_octavio/Ocatvio_foto_14.jpg","/fotos_octavio/Ocatvio_foto_15.jpg","/fotos_octavio/Ocatvio_foto_16.jpg","/fotos_octavio/Ocatvio_foto_17.jpg","/fotos_octavio/Ocatvio_foto_18.jpg","/fotos_octavio/Ocatvio_foto_2.jpg","/fotos_octavio/Ocatvio_foto_3.jpg","/fotos_octavio/Ocatvio_foto_4.jpg","/fotos_octavio/Ocatvio_foto_5.jpg","/fotos_octavio/Ocatvio_foto_6.jpg","/fotos_octavio/Ocatvio_foto_7.jpg","/fotos_octavio/Ocatvio_foto_8.jpg","/fotos_octavio/Ocatvio_foto_9.jpg","/img/logo octavio-02.png","/img/logo octavio-03.png","/img/logo octavio-04.png","/img/logo octavio-footer.png","/img/logo octavio_Mesa de trabajo 1.png","/img_carrusel/carrusel_1.jpg","/img_carrusel/carrusel_2.jpg","/img_carrusel/carrusel_3.jpg","/librosAnimado/bg.jpg","/librosAnimado/cover.jpg","/librosAnimado/paper.jpg","/portadasLibros/las_rondas_juegos.jpg","/portadasLibros/libro1.jpg","/portadasLibros/libro2.jpg","/portadasLibros/libro3.jpg","/portadasLibros/libro4.jpg","/portadasLibros/libro5.jpg","/portadasLibros/libro6.jpg","/portadasLibros/marimonda_portada.jpg","/portadasLibros/pombero_portada.jpg","/portadasLibros/tio_conejo_portada.jpg","/portadasLibros/toby_portada.jpg","/portadasLibros/tradicion_oral_portada.jpg","/readme/gif_home.gif","/readme/libros.gif","/readme/zoomParallax.gif","/temporal/OMM.jpeg","/temporal/OMM_sin_texto.jpg","/temporal/OMM_solo-Photoroom.png","/_astro/CarouselMaterial.CTY7BoeL.js","/_astro/client.CvHkPHMh.js","/_astro/EncapsulamientoLibros.C8pJphRs.js","/_astro/hoisted.Oozc_hRb.js","/_astro/index.DqlnlZCp.js","/_astro/index.DrB6MS87.js","/_astro/Intro.BJ9k3-0L.js","/_astro/jsx-runtime.BNe1jFxz.js","/_astro/locomotive-scroll.modern.CTuj9vAD.js","/_astro/motion.C4YmSpoq.js","/_astro/Nav.D-3WBUv8.js","/_astro/ParrafoAnimado.CdmoTApu.js","/_astro/SmoothScroll.CLBY9Ibk.js","/_astro/TimeLineComponent.C3m0in9R.js","/_astro/use-scroll.YnKoNQE7.js","/_astro/_slug_.BhoAn7Xu.css","/fonts/Cinzel/Cinzel-Black.otf","/fonts/Cinzel/Cinzel-Bold.otf","/fonts/Cinzel/Cinzel-Regular.otf","/fonts/Cinzel/CinzelDecorative-Black.otf","/fonts/Cinzel/CinzelDecorative-Bold.otf","/fonts/Cinzel/CinzelDecorative-Regular.otf","/fonts/Irregardless/fonnts.com-Irregardless_Variable.otf","/fonts/Irregardless/shortcut.html","/fonts/Poppins/Poppins-Regular.ttf","/biografia/index.html","/contacto/index.html","/folclor/index.html","/gal/index.html","/galeria/index.html","/home/index.html","/musica/index.html","/teatro/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
