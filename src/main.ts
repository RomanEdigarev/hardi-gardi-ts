import { createApp } from "vue";
import VueSmoothScroll from "v-smooth-scroll";
import router from "./shared/router";
import { App } from "@/app";
import { directives } from "@/app/directives";
import { store, key } from "@/services/vuex";
// import ymapPlugin from "vue-yandex-maps";

const app = createApp(App);
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// const mapSettings = {
//   apiKey: "98eb5257-3de6-430a-8673-fc22e9dae9dd",
//   lang: "ru_RU",
//   coordorder: "latlong",
//   enterprise: false,
//   version: "2.1",
// };

app
  .use(store, key)
  .use(router)
  // .use(ymapPlugin, mapSettings)
  .use(VueSmoothScroll, {
    duration: 10000,
    updateHistory: false,
  })
  .mount("#app");
