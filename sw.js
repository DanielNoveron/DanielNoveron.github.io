/* Este archivo debe estar
 * colocado en la carpeta raíz del
 * sitio.
 * 
 * Cualquier cambio en el
 * contenido de este archivo hace
 * que el service worker se
 * reinstale.
 * 
 * Normalmente se cambia el número
 * en el nombre del caché cuando
 * cambia el contenido de los
 * archivos.
 * 
 * Cuando uses GitHub Pages espera
 * 11 minutos después de hacer los
 * cambios en tu sitio, para
 * depués actualizar este archivo.
 */
const CACHE = "dmppwa-2.03";

/** Archivos requeridos para que
 * la aplicación funcione fuera de
 * línea.
 */
const ARCHIVOS = [
  "cmp/buttonPower.js",
  "cmp/buttonPower2.js",
  "cmp/mi-footer.js",
  "cmp/mi-menu.js",
  "css/dispositivo.css",
  "css/estilos.css",
  "css/index.css",
  "css/menu.css",
  "disp/CtrlDispositivo.js",
  "disp/ProxyEntrada.js",
  "disp/ProxySalida.js",
  "disp/ResInt.js",
  "disp/utilIot.js",
  "js/CtrlHistorial.js",
  "js/CtrlMovil.js",
  "js/init.js",
  "js/regSw.js",
  "js/tipos.js",
  "lib/fabrica.js",
  "lib/tiposFire.js",
  "lib/util.js",
  "LICENSE",
  "dispositivo.html",
  "historial.html",
  "index.html",
  "img/PDGN.png",
  "/"
];

/*self.addEventListener("install",
  evt => {
    console.log("sw instalado.");
    /* Realiza la instalación.
     * Carga los archivos
     * requeridos en la caché. */
    // @ts-ignore
    //evt.waitUntil(cargaCache());
  //});*/
self.addEventListener('install', e => {
e.waitUntil(
caches.open(CACHE)
.then(cache => {
return cache.addAll(ARCHIVOS)
.then(() => self.skipWaiting())
})
.catch(err => console.log('Falló registro de cache', err))
)
})

e.waitUntil(
caches.keys()
.then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
//Eliminamos lo que ya no se necesita en cache
if (cacheWhitelist.indexOf(cacheName) === -1) {
return caches.delete(cacheName)
}
})
)
})
// Le indica al SW activar el cache actual
.then(() => self.clients.claim())
)
})

/* Toma los archivos solicitados
 * de la caché; si no los
 * encuentra, se descargan. */
self.addEventListener("fetch",
  evt => {
    // @ts-ignore
    if (evt.request.method ===
      "GET") {
      // @ts-ignore
      evt.respondWith(
        usaCache(evt));
    }
  });

self.addEventListener("activate",
  () =>
    console.log("sw activo."));

async function cargaCache() {
  console.log(
    "Intentando cargar cache",
    CACHE);
  const cache =
    await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache", CACHE,
    "cargado");
}

async function usaCache(evt) {
  const cache =
    await caches.open(CACHE);
  const response =
    await cache.match(evt.request,
      { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
