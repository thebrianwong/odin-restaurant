const loadCreditsComponent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = `
        <div class="title"><h2>CREDITS</h2></div>
        <div class="credits">
            <p>Heavily inspired by <a target="_blank" rel="noopener noreferrer" href="https://fudsmenu.com/">Fuds</a>. Go and take a look!<br>
                Icon and tagline from Fuds.<br><br>
                Review images and apply section images from <a target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/">Pexels</a>.<br><br>
                Menu images I found a long time ago via Google for another project, so I have no idea who to credit. Oops!
            </p>
        </div>
    `
}

export { loadCreditsComponent };