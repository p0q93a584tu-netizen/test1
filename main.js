if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(new URL("./coisw.js", import.meta.url)).then(
    function (registration) {
      console.log("COOP/COEP Service Worker registered", registration.scope);

      if (registration.active && !navigator.serviceWorker.controller) {
        if (!sessionStorage.getItem("coiReloaded")) {
          sessionStorage.setItem("coiReloaded", "true");
          window.location.reload();
        }
      }
    },
    function (err) {
      console.log("COOP/COEP Service Worker failed to register", err);
    }
  );
} else {
  console.warn("Cannot register a service worker");
}
