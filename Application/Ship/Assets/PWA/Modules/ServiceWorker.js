const CacheName = "application_v1.0.0";

self.addEventListener("fetch", async (event) => {
  event.respondWith(UpdateCache(event));
});

self.addEventListener("activate", async () => {
  DeleteCache();
});

const UpdateCache = async (event) => {
  const cached = await caches.match(event.request);

  if (cached) return cached;

  const response = await fetch(event.request);
  const cache = await caches.open(CacheName);

  cache.put(event.request, response.clone());

  return response;
};

const DeleteCache = async () => {
  const CacheNames = await caches.keys();

  await Promise.all(CacheNames.filter((name) => name !== CacheName).map((name) => caches.delete(name)));
};
