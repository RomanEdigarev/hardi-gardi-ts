import { createApp } from "vue";
import router from "./shared/router";
import { App } from "@/app";
import { directives } from "@/app/directives";
import { store, key } from "@/services/vuex";

const app = createApp(App);
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(store, key).use(router).mount("#app");
