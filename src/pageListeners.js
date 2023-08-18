import { tabsModule, DomModule } from "./modules.js";
import { renderMainContent } from "./rendering.js";
/*
- Whenever a tab is clicked, we make sure it's the only tab
	that's highlighted. Then we render the main content related to it
- NOTE: We want to have handleSidebarTabClick as a callback function, since 
	we don't want duplicate event listeners, which only happens on the main tabs
	since we don't reset those
*/
function handleSidebarTabClick(e) {
    const clickedTab = e.currentTarget;
    const sidebarTabs = DomModule.getSidebarTabs();
    // Make sure clicked tab, only has data-active
    for (let i = 0; i < sidebarTabs.length; i++) {
        if (sidebarTabs[i] == clickedTab) {
            sidebarTabs[i].setAttribute("data-active", true);
        } else {
            sidebarTabs[i].removeAttribute("data-active");
        }
    }
    // Record the active tab's information
    tabsModule.activeTabID = clickedTab.dataset.tabId;
    tabsModule.activeTabType = clickedTab.dataset.tabType;
    // call 'renderMainContent' to render main content when a tab is clicked
    renderMainContent();
}

// Sets up event listeners for all sidebar tabs.
function setupSidebarTabs() {
    const sidebarTabs = DomModule.getSidebarTabs();
    sidebarTabs.forEach((tab) => {
        tab.addEventListener("click", handleSidebarTabClick);
    });
}

export { setupSidebarTabs };
