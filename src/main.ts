import { createApp } from "vue";
import router from "./routes/router";
import "vue-typer-next/dist/style.css";
import "./assets/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");
