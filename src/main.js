import "./assets/style/style.scss";

/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAddressCard, faBook, faCircleDown, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(faLinkedin, faGithub, faCircleDown, faBook, faAddressCard, faPhoneVolume, faNewspaper);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
