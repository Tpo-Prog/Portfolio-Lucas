import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_D95aZWyz.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CJg-keZu.mjs';
import 'es-module-lexer';

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/","cacheDir":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/node_modules/.astro/","outDir":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/dist/","srcDir":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/","publicDir":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/public/","buildClientDir":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/dist/client/","buildServerDir":"file:///C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B1_G38IE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:../../node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/LUCAS/Portfolio-Project/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B1s2PXvH.mjs","\u0000@astrojs-manifest":"manifest_BNdL1yXR.mjs","C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/tecnologies-card/tecnologies-card.jsx":"_astro/tecnologies-card.W2yxPgVY.js","C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/projects-card/projects-card.jsx":"_astro/projects-card.AQoXiAIe.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/layout/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.CK9e6pKT.js","C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/button/button.astro?astro&type=script&index=0&lang.ts":"_astro/button.astro_astro_type_script_index_0_lang.DCa9QUsf.js","C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/popup/popup.astro?astro&type=script&index=0&lang.ts":"_astro/popup.astro_astro_type_script_index_0_lang.gSr5fYVv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/button/button.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"[data-btn-info]\"),o=document.getElementById(\"modal-about\");t.addEventListener(\"click\",()=>{o.showModal()});"],["C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/popup/popup.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-close-btn]\"),t=document.getElementById(\"modal-about\");e.addEventListener(\"click\",()=>t.close());"]],"assets":["/_astro/poppins-devanagari-100-normal.CeW0BfHd.woff2","/_astro/poppins-latin-ext-100-normal.C9Knam7P.woff2","/_astro/poppins-latin-100-normal.CY-M_i9k.woff2","/_astro/poppins-devanagari-200-normal.Cd2cBuw-.woff2","/_astro/poppins-latin-ext-200-normal.C8LeRBwY.woff2","/_astro/poppins-latin-200-normal.B8tqA5oA.woff2","/_astro/poppins-devanagari-400-normal.CJDn6rn8.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-devanagari-900-normal.DntvEK6c.woff2","/_astro/poppins-latin-ext-900-normal.DPEExWNF.woff2","/_astro/poppins-latin-900-normal.BmL1zqjw.woff2","/_astro/poppins-devanagari-100-normal.TYorP3aZ.woff","/_astro/poppins-latin-ext-100-normal.BW8h--AB.woff","/_astro/poppins-latin-200-normal.BxK-3Qw6.woff","/_astro/poppins-latin-ext-200-normal.BnXTLz5G.woff","/_astro/poppins-devanagari-200-normal.xi-_ae4H.woff","/_astro/poppins-devanagari-400-normal.CqVvlrh5.woff","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-100-normal.PssVh1UL.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-ext-900-normal.CddlvElL.woff","/_astro/poppins-devanagari-900-normal.CcN7yKeD.woff","/_astro/poppins-latin-900-normal.By5LX1Cr.woff","/_astro/index.B1_G38IE.css","/arrowdown.svg","/arrowup.svg","/certification-1.png","/certification-2.png","/certification-3.png","/certification-4.png","/favicon.svg","/github.svg","/linkedin.svg","/mail.svg","/repos.json","/whatsapp.svg","/icons/angular.svg","/icons/astro.svg","/icons/bootstrap.svg","/icons/css.svg","/icons/figma.svg","/icons/framer.svg","/icons/git.svg","/icons/html.svg","/icons/js.svg","/icons/nextjs.svg","/icons/node.svg","/icons/react.svg","/icons/tailwind.svg","/icons/ts.svg","/icons/ubuntu.ico","/icons/windows.svg","/_astro/BaseLayout.astro_astro_type_script_index_0_lang.CK9e6pKT.js","/_astro/client.BPIbHqJh.js","/_astro/index.3pfs1cSh.css","/_astro/index.95d291e9.BnXn24D-.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/projects-card.AQoXiAIe.js","/_astro/tecnologies-card.W2yxPgVY.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vfC4zsQfGgA2sgu3iKSRmGVb2RHOFy4yY3uF/ytqpdI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
