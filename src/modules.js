import {
	createInitialPage
} from "./initialPage.js";
import "./style.css";
import WebFont from "webfontloader";
WebFont.load({
	google: {
		families: ["Roboto", "Open Sans"]
	}
});


// Object that contains all tabs
const tabsModule = {
	Home: [],
	Today: [],
	Week: [],
	projectsList: [],
	"activeTabID": "Home",
	"activeTodoIndex": "",
}

const formInfoModule = {
	 // boolean that keeps track of and differentiates whether the user is editing something or adding something new
	"isEdit": true,
}

const DomModule = (() => {
	const page = createInitialPage();
	document.body.appendChild(page);
})();