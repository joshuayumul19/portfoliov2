import "./assets/style/style.scss";

/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAddressCard, faArrowDownLong, faArrowUpRightFromSquare, faBook, faBug, faCircleDown, faPaperPlane, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faHtml5, faCss3Alt, faSass, faBootstrap, faSquareJs, faVuejs, faReact, faFigma, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(faLinkedin, faGithub, faCircleDown, faBook, faAddressCard, faPhoneVolume, faNewspaper, faArrowUpRightFromSquare, faHtml5, faCss3Alt, faSass, faBootstrap, faSquareJs, faVuejs, faReact, faFigma, faGitAlt, faBug, faArrowDownLong, faPaperPlane);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
