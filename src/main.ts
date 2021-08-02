import { createApp } from "vue";
import router from "./shared/router";
import {App} from "./app";

createApp(App).use(router).mount("#app");
