const initialLoadComponent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="header-container">
            <div class="icon"><img src="assets/logo.PNG" alt="Fuds logo with a fork, spoon, knife, and gun."></div>
            <div class="tagline">
                <h1>A JOURNEY IN FOOD-TASTE FROM MOUTH TO TOILET,<br>
                    TRAVELING THE ULTIMATE EXPANSE OF THE GREEKO-JAPO<br>
                    PAN-AMERICAN DINING EXPERIENCES.</h1>
            </div>
        </div>
        <nav class="nav-container">
            <button class="nav-button" id="home-button">HOME</button>
            <button class="nav-button" id="menu-button">MENU</button>
            <button class="nav-button" id="apply-button">APPLY</button>
            <button class="nav-button" id="credits-button">CREDITS</button>
        </nav>
        <div class="main-content">
            <div class="title"><h2>HOME</h2></div>
            <div class="reviews-container">
                <div class="review" id="review-1">
                    <p>
                        <span class="italics">
                            "Why did you take this picture?<br>
                            I said I was going to take off my sunglasses after I took a bite."
                        </span>
                        <br>
                        <span class="bold">
                            - MysteryGuitarMan
                        </span>
                    </p>
                    <img src="assets/review_1.jpg" alt="Sunglasses-wearing man eats a piece of bread.">
                </div>
                <div class="review" id="review-2">
                    <img src="assets/review_2.jpg" alt="Two women eating pizza, with an out-of-focus child in the background.">
                    <p>
                        <span class="italics">
                            "When is this gonna to be over?<br>
                            I wanna go home and watch Paw Patrol."
                        </span>
                        <br>
                        <span class="bold">
                            - Bored Child in the Background
                        </span>
                    </p>
                </div>
                <div class="review" id="review-3">
                    <p>
                        <span class="italics">
                            0/5<br>
                            "The food here is awful.<br>
                            I literally could not take a single bite."
                        </span>
                        <br>
                        <span class="bold">
                            - Utensil Illiterate Yelp Reviewer
                        </span>
                    </p>
                    <img src="assets/review_3.jpg" alt="Man having trouble eating steak without using any utensils, just his two bare hands.">
                </div>
            </div>
        </div>
        <div class="footer-container">
            <div class="contact-container">
                <p><span class="bold">EMAIL:</span>
                    FUDSMENU@GMAIL.COM
                </p>
            </div>
            <div class="hours-container">
                <p><span class="bold">HOURS:</span>
                    MONDAY - FRIDAY: 5AM - 4AM
                    SATURDAY: 4PM - 4:45PM
                    SUNDAY: CLOSED - 2PM
                </p>
            </div>
        </div>
    `
}

export { initialLoadComponent };