/* eslint-disable no-console */

const Register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        await navigator.serviceWorker.register("/ServiceWorker.js");
      } catch (error) {
        console.log(error);
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
            registration.unregister();
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export { Register, Unregister };
