import { createApp } from "vue";
import router from "./shared/router";
import { directives } from "@/app/directives";
import { App } from "./app";

const app = createApp(App);
app.use(router);
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.mount("#app");
