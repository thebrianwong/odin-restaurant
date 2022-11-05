const loadHomeComponent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = `
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
    `
}

export { loadHomeComponent };