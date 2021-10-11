import { createApp } from "vue";
import VueSmoothScroll from "v-smooth-scroll";
import router from "./shared/router";
import { App } from "@/app";
import { directives } from "@/app/directives";
import { store, key } from "@/services/vuex";

const app = createApp(App);
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app

  .use(store, key)
  .use(router)
  .use(VueSmoothScroll, {
    duration: 10000,
    updateHistory: false,
  })
  .mount("#app");
