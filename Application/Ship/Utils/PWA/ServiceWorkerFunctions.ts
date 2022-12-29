/* eslint-disable no-console */

const Register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        await navigator.serviceWorker.register("ServiceWorker.js");
      } catch (error) {
        console.error(error);
      }
    });
  }
};

const Unregister = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        navigator.serviceWorker.getRegistration().then((registrations) => {
          for (const registration of [registrations]) {
            if (registration) registration.unregister();
          }
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
};

export { Register, Unregister };
