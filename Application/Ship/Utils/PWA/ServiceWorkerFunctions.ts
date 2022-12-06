/* eslint-disable no-console */

const Register = () => {
  window.addEventListener("load", async () => {
    if (navigator) {
      try {
        await navigator.serviceWorker.register("ServiceWorker.js");
      } catch (error) {
        console.log(error);
      }
    }
  });
};

const Unregister = () => {
  window.addEventListener("load", async () => {
    if (navigator) {
      try {
        navigator.serviceWorker.getRegistration().then((registrations) => {
          for (const registration of [registrations]) {
            registration.unregister();
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
};

export { Register, Unregister };
