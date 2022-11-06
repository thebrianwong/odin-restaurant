const loadApplyComponent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = `
        <div class="title"><h2>APPLY</h2></div>
        <div class="apply-information">
            <p>Would you like to join the fine folks at Fuds in revolutionizing the culinary world?<br>
                Interested in finding out what really goes into the "Two-bean Dickbread Wrap"?<br>
                Then come on down and have a chat with famed Fuds owners, hrak cookers, and busboys<br>
                Alfredo Mizretti and Antonio Mizretti<br><br>
                For more details, please visit <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">this link</a>.
            </p>
            <img src="assets/apply.jpg" alt="Woman holding a notepad and looking at her laptop in the kitchen.">
        </div>
    `
}

export { loadApplyComponent };