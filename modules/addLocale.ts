import { extendPages, defineNuxtModule, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "addLocale",
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    extendPages((pages) => {
      pages.unshift({
        path: "/locale",
        file: resolver.resolve("../Locale/Locale.vue"),
      });
    });
  },
});
