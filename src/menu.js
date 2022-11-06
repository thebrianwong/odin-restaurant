const loadMenuComponent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = `
        <div class="title">
            <h2>MENU</h2>
            <p class="sub-title">Here's a sneak peek of our 3 most popular items.<br>
            You'll have to come in-person to see the rest!</p>
        </div>
        <div class="menu">
            <div class="menu-item" id="menu-1">
                <h3>Worm Stringers</h3>
                <img src="assets/menu_1.jpg" alt="A bunch of fresh worms slithering around in the dirt.">
                <p>"Served with mud and dirt from outside," this dish contains earthy notes and a rich base of nitrogen and other key nutrients. Sourced from farm to table, worm stringers come straight from the place where all our ingredients originate from. They can also be found in your backyard or even the park! Enjoy nature in its purest form. Disregard the lies propagated by "How to Eat Fried Worms", written by Thomas Rockwell.<br><br>
                Begin by admiring the unique form and composition of the dish. Experience each element with all 5 senses. Press your ears against the dish and listen to the cries of Mother Earth, then shove a fistful of the slimy stringers into your gaping mouth. If any bystanders question your tastes, threaten them by saying "I'm gonna put some dirt in your eye."</p>
            </div>
            <div class="menu-item" id="menu-2">
                <h3>Three Trouts</h3>
                <img src="assets/menu_2.jpg" alt="3 dead trouts laying on ice.">
                <p>A sublime taste into the world beneath the surface of the sunny cliffside coast, this dish is sure to conquer the fears of even the most seafood abstinent landlubbers. The three aquatic rapscallions are placed "on top of each other" and secured with an oversized fishing hook. Don't get too excited, or you're gonna get caught yourself!<br><br>
                Looks are deceiving. Do not underestimate this dish. If you can't finish this dish, plop the remaining fish in your pocket to keep them warm and comfortable.</p>
            </div>
            <div class="menu-item" id="menu-3">
                <h3>Floury Crisper Crumbs</h3>
                <img src="assets/menu_3.jpg" alt="A bowl of fried crispy onions(?) with a spoon.">
                <p>A deep fried sensation like no other, this signature dish is made of an ambrosia that is worshipped by rock doves all around the world, a treasure that is highly valued by pigeons no matter how stale: breadcrumbs. To merely call this dish a work of art would be an insult not only to the chef who prepared it, but also to the entire culinary world.<br><br>
                This work of art must be enjoyed several days after it has been prepared, preferably stored in a plastic bag so that all of the accumulated oil that has dripped down to the bottom can be marveled at for all of its glistening beauty, as if it were the golden sun kissing the grass and flowers of a verdant meadow.</p>
            </div>
        </div>
    `
};

export { loadMenuComponent };