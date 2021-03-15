import { createApp } from "vue";

import App from "./App.vue";
import LoadSpinner from "./components/Spinner/index.vue";

createApp(App)
  .component("LoadSpinner", LoadSpinner)
  .mount("#app");
