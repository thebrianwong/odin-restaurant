import { initialLoadComponent } from "./initial";
import { loadHomeComponent } from "./home";
import { loadMenuComponent } from "./menu";
import { loadApplyComponent } from "./apply";
import { loadCreditsComponent } from "./credits";

const addHomeButtonClicker = () => {
    const homeButton = document.querySelector("#home-button");
    homeButton.addEventListener("click", loadHomeComponent);
};

const addMenuButtonClicker = () => {
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", loadMenuComponent);
};

const addApplyButtonClicker = () => {
    const applyButton = document.querySelector("#apply-button");
    applyButton.addEventListener("click", loadApplyComponent);
}
;
const addCreditsButtonClicker = () => {
    const creditsButton = document.querySelector("#credits-button");
    creditsButton.addEventListener("click", loadCreditsComponent);
};

initialLoadComponent();
addHomeButtonClicker();
addMenuButtonClicker();
addApplyButtonClicker();
addCreditsButtonClicker();