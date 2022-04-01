function invokeServiceWorkerUpdateFlow() {
  const confirmed = window.confirm('New version of the app is available. Refresh now');
  if (confirmed) {
    window.location.reload();
  }
}
async function handleServiceWorker() {
  if ('serviceWorker' in navigator) {
    // get the ServiceWorkerRegistration instance
    const registration = await navigator.serviceWorker.getRegistration();
    // (it is also returned from navigator.serviceWorker.register() function)

    if (registration) {
      // detect Service Worker update available and wait for it to become installed
      registration.addEventListener('updatefound', () => {
        if (registration.installing) {
          // wait until the new Service worker is actually installed (ready to take over)
          registration.installing.addEventListener('statechange', () => {
            if (registration.waiting) {
              // if there's an existing controller (previous Service Worker), show the prompt
              if (navigator.serviceWorker.controller) {
                invokeServiceWorkerUpdateFlow(registration);
              } else {
                // otherwise it's the first install, nothing to do
                console.log('Service Worker initialized for the first time');
              }
            }
          });
        }
      });

      let refreshing = false;

      // detect controller change and refresh the page
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          window.location.reload();
          refreshing = true;
        }
      });
    }
  }
}
handleServiceWorker();
