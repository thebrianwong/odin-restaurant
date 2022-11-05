import { initialLoadComponent } from "./initial";
import { loadMenuComponent } from "./menu";

initialLoadComponent();

const addMenuButtonClicker = () => {
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", loadMenuComponent)
}

addMenuButtonClicker();