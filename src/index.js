import { initialLoadComponent } from "./initial";
import { loadHomeComponent } from "./home";
import { loadMenuComponent } from "./menu";

initialLoadComponent();

const addHomeButtonClicker = () => {
    const homeButton = document.querySelector("#home-button");
    homeButton.addEventListener("click", loadHomeComponent);
}

const addMenuButtonClicker = () => {
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", loadMenuComponent)
}

addHomeButtonClicker();
addMenuButtonClicker();