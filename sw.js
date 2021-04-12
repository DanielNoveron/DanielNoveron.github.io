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


self.addEventListener("install",
  evt => {
    console.log("sw instalado.");
    /* Realiza la instalación.
     * Carga los archivos
     * requeridos en la caché. */
    // @ts-ignore
    evt.waitUntil(cargaCache());
  });

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
//Responder ya sea con el objeto en caché o continuar y buscar la url real
e.respondWith(
caches.match(e.request)
.then(res => {
if (res) {
//recuperar del cache
return res
}
//recuperar de la petición a la url
return fetch(e.request)
})
)
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
