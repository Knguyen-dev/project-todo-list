import "./style.css";
import WebFont from "webfontloader";
WebFont.load({
    google: {
        families: ["Roboto", "Open Sans"],
    },
});
import { renderPage, hideModal } from "./rendering.js";
import { loadPageListeners } from "./pageListeners.js";
import { loadLocalStorageProjects } from "./modules.js";

window.addEventListener("DOMContentLoaded", () => {
    loadLocalStorageProjects();
    loadPageListeners();
    renderPage();
    hideModal();
});
