(()=>{"use strict";document.querySelector("#content").innerHTML='\n        <div class="header-container">\n            <div class="icon"><img src="assets/logo.PNG" alt="Fuds logo with a fork, spoon, knife, and gun."></div>\n            <div class="tagline">\n                <h1>A JOURNEY IN FOOD-TASTE FROM MOUTH TO TOILET,<br>\n                    TRAVELING THE ULTIMATE EXPANSE OF THE GREEKO-JAPO<br>\n                    PAN-AMERICAN DINING EXPERIENCES.</h1>\n            </div>\n        </div>\n        <nav class="nav-container">\n            <button class="nav-button" id="home-button">HOME</button>\n            <button class="nav-button" id="menu-button">MENU</button>\n            <button class="nav-button" id="apply-button">APPLY</button>\n            <button class="nav-button" id="credits-button">CREDITS</button>\n        </nav>\n        <div class="main-content">\n            <div class="title"><h2>HOME</h2></div>\n            <div class="reviews-container">\n                <div class="review" id="review-1">\n                    <p>\n                        <span class="italics">\n                            "Why did you take this picture?<br>\n                            I said I was going to take off my sunglasses after I took a bite."\n                        </span>\n                        <br>\n                        <span class="bold">\n                            - MysteryGuitarMan\n                        </span>\n                    </p>\n                    <img src="assets/review_1.jpg" alt="Sunglasses-wearing man eats a piece of bread.">\n                </div>\n                <div class="review" id="review-2">\n                    <img src="assets/review_2.jpg" alt="Two women eating pizza, with an out-of-focus child in the background.">\n                    <p>\n                        <span class="italics">\n                            "When is this gonna to be over?<br>\n                            I wanna go home and watch Paw Patrol."\n                        </span>\n                        <br>\n                        <span class="bold">\n                            - Bored Child in the Background\n                        </span>\n                    </p>\n                </div>\n                <div class="review" id="review-3">\n                    <p>\n                        <span class="italics">\n                            0/5<br>\n                            "The food here is awful.<br>\n                            I literally could not take a single bite."\n                        </span>\n                        <br>\n                        <span class="bold">\n                            - Utensil Illiterate Yelp Reviewer\n                        </span>\n                    </p>\n                    <img src="assets/review_3.jpg" alt="Man having trouble eating steak without using any utensils, just his two bare hands.">\n                </div>\n            </div>\n        </div>\n        <div class="footer-container">\n            <div class="contact-container">\n                <p><span class="bold">EMAIL:</span>\n                    FUDSMENU@GMAIL.COM\n                </p>\n            </div>\n            <div class="hours-container">\n                <p><span class="bold">HOURS:</span>\n                    MONDAY - FRIDAY: 5AM - 4AM\n                    SATURDAY: 4PM - 4:45PM\n                    SUNDAY: CLOSED - 2PM\n                </p>\n            </div>\n        </div>\n    ',document.querySelector("#home-button").addEventListener("click",(()=>{document.querySelector(".main-content").innerHTML='\n        <div class="title"><h2>HOME</h2></div>\n        <div class="reviews-container">\n            <div class="review" id="review-1">\n                <p>\n                    <span class="italics">\n                        "Why did you take this picture?<br>\n                        I said I was going to take off my sunglasses after I took a bite."\n                    </span>\n                    <br>\n                    <span class="bold">\n                        - MysteryGuitarMan\n                    </span>\n                </p>\n                <img src="assets/review_1.jpg" alt="Sunglasses-wearing man eats a piece of bread.">\n            </div>\n            <div class="review" id="review-2">\n                <img src="assets/review_2.jpg" alt="Two women eating pizza, with an out-of-focus child in the background.">\n                <p>\n                    <span class="italics">\n                        "When is this gonna to be over?<br>\n                        I wanna go home and watch Paw Patrol."\n                    </span>\n                    <br>\n                    <span class="bold">\n                        - Bored Child in the Background\n                    </span>\n                </p>\n            </div>\n            <div class="review" id="review-3">\n                <p>\n                    <span class="italics">\n                        0/5<br>\n                        "The food here is awful.<br>\n                        I literally could not take a single bite."\n                    </span>\n                    <br>\n                    <span class="bold">\n                        - Utensil Illiterate Yelp Reviewer\n                    </span>\n                </p>\n                <img src="assets/review_3.jpg" alt="Man having trouble eating steak without using any utensils, just his two bare hands.">\n            </div>\n        </div>\n    '})),document.querySelector("#menu-button").addEventListener("click",(()=>{document.querySelector(".main-content").innerHTML='\n        <div class="title"><h2>MENU</h2></div>\n        <div class="menu">\n            <div class="menu-item" id="menu-1">\n                <h3>Worm Stringers</h3>\n                <img src="assets/menu_1.jpg" alt="A bunch of fresh worms slithering around in the dirt.">\n                <p>"Served with mud and dirt from outside," this dish contains earthy notes and a rich base of nitrogen and other key nutrients. Sourced from farm to table, worm stringers come straight from the place where all our ingredients originate from. They can also be found in your backyard or even the park! Enjoy nature in its purest form. Disregard the lies propagated by "How to Eat Fried Worms", written by Thomas Rockwell.<br><br>\n                Begin by admiring the unique form and composition of the dish. Experience each element with all 5 senses. Press your ears against the dish and listen to the cries of Mother Earth, then shove a fistful of the slimy stringers into your gaping mouth. If any bystanders question your tastes, threaten them by saying "I\'m gonna put some dirt in your eye."</p>\n            </div>\n            <div class="menu-item" id="menu-2">\n                <h3>Three Trouts</h3>\n                <img src="assets/menu_2.jpg" alt="3 dead trouts laying on ice.">\n                <p>A sublime taste into the world beneath the surface of the sunny cliffside coast, this dish is sure to conquer the fears of even the most seafood abstinent landlubbers. The three aquatic rapscallions are placed "on top of each other" and secured with an oversized fishing hook. Don\'t get too excited, or you\'re gonna get caught yourself!<br><br>\n                Looks are deceiving. Do not underestimate this dish. If you can\'t finish this dish, plop the remaining fish in your pocket to keep them warm and comfortable.</p>\n            </div>\n            <div class="menu-item" id="menu-3">\n                <h3>Floury Crisper Crumbs</h3>\n                <img src="assets/menu_3.jpg" alt="A bowl of fried crispy onions(?) with a spoon.">\n                <p>A deep fried sensation like no other, this signature dish is made of an ambrosia that is worshipped by rock doves all around the world, a treasure that is highly valued by pigeons no matter how stale: breadcrumbs. To merely call this dish a work of art would be an insult not only to the chef who prepared it, but also to the entire culinary world.<br><br>\n                This work of art must be enjoyed several days after it has been prepared, preferably stored in a plastic bag so that all of the accumulated oil that has dripped down to the bottom can be marveled at for all of its glistening beauty, as if it were the golden sun kissing the grass and flowers of a verdant meadow.</p>\n            </div>\n        </div>\n    '}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ29CQSxTQUFTQyxjQUFjLFlBQy9CQyxVQUFZLGcyR0NLREYsU0FBU0MsY0FBYyxnQkFDL0JFLGlCQUFpQixTQ1JOLEtBQ0ZILFNBQVNDLGNBQWMsaUJBQy9CQyxVQUFZLDYzRERVTEYsU0FBU0MsY0FBYyxnQkFDL0JFLGlCQUFpQixTRWJOLEtBQ0ZILFNBQVNDLGNBQWMsaUJBQy9CQyxVQUFZLG92RiIsInNvdXJjZXMiOlsid2VicGFjazovL25vbmUvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9ub25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25vbmUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9ub25lLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbExvYWRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+PGltZyBzcmM9XCJhc3NldHMvbG9nby5QTkdcIiBhbHQ9XCJGdWRzIGxvZ28gd2l0aCBhIGZvcmssIHNwb29uLCBrbmlmZSwgYW5kIGd1bi5cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XG4gICAgICAgICAgICAgICAgPGgxPkEgSk9VUk5FWSBJTiBGT09ELVRBU1RFIEZST00gTU9VVEggVE8gVE9JTEVULDxicj5cbiAgICAgICAgICAgICAgICAgICAgVFJBVkVMSU5HIFRIRSBVTFRJTUFURSBFWFBBTlNFIE9GIFRIRSBHUkVFS08tSkFQTzxicj5cbiAgICAgICAgICAgICAgICAgICAgUEFOLUFNRVJJQ0FOIERJTklORyBFWFBFUklFTkNFUy48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBpZD1cImhvbWUtYnV0dG9uXCI+SE9NRTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBpZD1cIm1lbnUtYnV0dG9uXCI+TUVOVTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idXR0b25cIiBpZD1cImFwcGx5LWJ1dHRvblwiPkFQUExZPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ1dHRvblwiIGlkPVwiY3JlZGl0cy1idXR0b25cIj5DUkVESVRTPC9idXR0b24+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDI+SE9NRTwvaDI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3XCIgaWQ9XCJyZXZpZXctMVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRhbGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2h5IGRpZCB5b3UgdGFrZSB0aGlzIHBpY3R1cmU/PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgc2FpZCBJIHdhcyBnb2luZyB0byB0YWtlIG9mZiBteSBzdW5nbGFzc2VzIGFmdGVyIEkgdG9vayBhIGJpdGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gTXlzdGVyeUd1aXRhck1hblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3Jldmlld18xLmpwZ1wiIGFsdD1cIlN1bmdsYXNzZXMtd2VhcmluZyBtYW4gZWF0cyBhIHBpZWNlIG9mIGJyZWFkLlwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXZpZXdcIiBpZD1cInJldmlldy0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3Jldmlld18yLmpwZ1wiIGFsdD1cIlR3byB3b21lbiBlYXRpbmcgcGl6emEsIHdpdGggYW4gb3V0LW9mLWZvY3VzIGNoaWxkIGluIHRoZSBiYWNrZ3JvdW5kLlwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRhbGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hlbiBpcyB0aGlzIGdvbm5hIHRvIGJlIG92ZXI/PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgd2FubmEgZ28gaG9tZSBhbmQgd2F0Y2ggUGF3IFBhdHJvbC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBCb3JlZCBDaGlsZCBpbiB0aGUgQmFja2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJldmlld1wiIGlkPVwicmV2aWV3LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0YWxpY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLzU8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgZm9vZCBoZXJlIGlzIGF3ZnVsLjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIGxpdGVyYWxseSBjb3VsZCBub3QgdGFrZSBhIHNpbmdsZSBiaXRlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIFV0ZW5zaWwgSWxsaXRlcmF0ZSBZZWxwIFJldmlld2VyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcmV2aWV3XzMuanBnXCIgYWx0PVwiTWFuIGhhdmluZyB0cm91YmxlIGVhdGluZyBzdGVhayB3aXRob3V0IHVzaW5nIGFueSB1dGVuc2lscywganVzdCBoaXMgdHdvIGJhcmUgaGFuZHMuXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cImJvbGRcIj5FTUFJTDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIEZVRFNNRU5VQEdNQUlMLkNPTVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVwiYm9sZFwiPkhPVVJTOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgTU9OREFZIC0gRlJJREFZOiA1QU0gLSA0QU1cbiAgICAgICAgICAgICAgICAgICAgU0FUVVJEQVk6IDRQTSAtIDQ6NDVQTVxuICAgICAgICAgICAgICAgICAgICBTVU5EQVk6IENMT1NFRCAtIDJQTVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59XG5cbmV4cG9ydCB7IGluaXRpYWxMb2FkQ29tcG9uZW50IH07IiwiaW1wb3J0IHsgaW5pdGlhbExvYWRDb21wb25lbnQgfSBmcm9tIFwiLi9pbml0aWFsXCI7XG5pbXBvcnQgeyBsb2FkSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGxvYWRNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5pbml0aWFsTG9hZENvbXBvbmVudCgpO1xuXG5jb25zdCBhZGRIb21lQnV0dG9uQ2xpY2tlciA9ICgpID0+IHtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZUNvbXBvbmVudCk7XG59XG5cbmNvbnN0IGFkZE1lbnVCdXR0b25DbGlja2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51Q29tcG9uZW50KVxufVxuXG5hZGRIb21lQnV0dG9uQ2xpY2tlcigpO1xuYWRkTWVudUJ1dHRvbkNsaWNrZXIoKTsiLCJjb25zdCBsb2FkSG9tZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PGgyPkhPTUU8L2gyPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXZpZXdcIiBpZD1cInJldmlldy0xXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRhbGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaHkgZGlkIHlvdSB0YWtlIHRoaXMgcGljdHVyZT88YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJIHNhaWQgSSB3YXMgZ29pbmcgdG8gdGFrZSBvZmYgbXkgc3VuZ2xhc3NlcyBhZnRlciBJIHRvb2sgYSBiaXRlLlwiXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIC0gTXlzdGVyeUd1aXRhck1hblxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3Jldmlld18xLmpwZ1wiIGFsdD1cIlN1bmdsYXNzZXMtd2VhcmluZyBtYW4gZWF0cyBhIHBpZWNlIG9mIGJyZWFkLlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3XCIgaWQ9XCJyZXZpZXctMlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3Jldmlld18yLmpwZ1wiIGFsdD1cIlR3byB3b21lbiBlYXRpbmcgcGl6emEsIHdpdGggYW4gb3V0LW9mLWZvY3VzIGNoaWxkIGluIHRoZSBiYWNrZ3JvdW5kLlwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0YWxpY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hlbiBpcyB0aGlzIGdvbm5hIHRvIGJlIG92ZXI/PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgSSB3YW5uYSBnbyBob21lIGFuZCB3YXRjaCBQYXcgUGF0cm9sLlwiXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIC0gQm9yZWQgQ2hpbGQgaW4gdGhlIEJhY2tncm91bmRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJldmlld1wiIGlkPVwicmV2aWV3LTNcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGFsaWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAwLzU8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBmb29kIGhlcmUgaXMgYXdmdWwuPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgSSBsaXRlcmFsbHkgY291bGQgbm90IHRha2UgYSBzaW5nbGUgYml0ZS5cIlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAtIFV0ZW5zaWwgSWxsaXRlcmF0ZSBZZWxwIFJldmlld2VyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcmV2aWV3XzMuanBnXCIgYWx0PVwiTWFuIGhhdmluZyB0cm91YmxlIGVhdGluZyBzdGVhayB3aXRob3V0IHVzaW5nIGFueSB1dGVuc2lscywganVzdCBoaXMgdHdvIGJhcmUgaGFuZHMuXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufVxuXG5leHBvcnQgeyBsb2FkSG9tZUNvbXBvbmVudCB9OyIsImNvbnN0IGxvYWRNZW51Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDI+TUVOVTwvaDI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgaWQ9XCJtZW51LTFcIj5cbiAgICAgICAgICAgICAgICA8aDM+V29ybSBTdHJpbmdlcnM8L2gzPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL21lbnVfMS5qcGdcIiBhbHQ9XCJBIGJ1bmNoIG9mIGZyZXNoIHdvcm1zIHNsaXRoZXJpbmcgYXJvdW5kIGluIHRoZSBkaXJ0LlwiPlxuICAgICAgICAgICAgICAgIDxwPlwiU2VydmVkIHdpdGggbXVkIGFuZCBkaXJ0IGZyb20gb3V0c2lkZSxcIiB0aGlzIGRpc2ggY29udGFpbnMgZWFydGh5IG5vdGVzIGFuZCBhIHJpY2ggYmFzZSBvZiBuaXRyb2dlbiBhbmQgb3RoZXIga2V5IG51dHJpZW50cy4gU291cmNlZCBmcm9tIGZhcm0gdG8gdGFibGUsIHdvcm0gc3RyaW5nZXJzIGNvbWUgc3RyYWlnaHQgZnJvbSB0aGUgcGxhY2Ugd2hlcmUgYWxsIG91ciBpbmdyZWRpZW50cyBvcmlnaW5hdGUgZnJvbS4gVGhleSBjYW4gYWxzbyBiZSBmb3VuZCBpbiB5b3VyIGJhY2t5YXJkIG9yIGV2ZW4gdGhlIHBhcmshIEVuam95IG5hdHVyZSBpbiBpdHMgcHVyZXN0IGZvcm0uIERpc3JlZ2FyZCB0aGUgbGllcyBwcm9wYWdhdGVkIGJ5IFwiSG93IHRvIEVhdCBGcmllZCBXb3Jtc1wiLCB3cml0dGVuIGJ5IFRob21hcyBSb2Nrd2VsbC48YnI+PGJyPlxuICAgICAgICAgICAgICAgIEJlZ2luIGJ5IGFkbWlyaW5nIHRoZSB1bmlxdWUgZm9ybSBhbmQgY29tcG9zaXRpb24gb2YgdGhlIGRpc2guIEV4cGVyaWVuY2UgZWFjaCBlbGVtZW50IHdpdGggYWxsIDUgc2Vuc2VzLiBQcmVzcyB5b3VyIGVhcnMgYWdhaW5zdCB0aGUgZGlzaCBhbmQgbGlzdGVuIHRvIHRoZSBjcmllcyBvZiBNb3RoZXIgRWFydGgsIHRoZW4gc2hvdmUgYSBmaXN0ZnVsIG9mIHRoZSBzbGlteSBzdHJpbmdlcnMgaW50byB5b3VyIGdhcGluZyBtb3V0aC4gSWYgYW55IGJ5c3RhbmRlcnMgcXVlc3Rpb24geW91ciB0YXN0ZXMsIHRocmVhdGVuIHRoZW0gYnkgc2F5aW5nIFwiSSdtIGdvbm5hIHB1dCBzb21lIGRpcnQgaW4geW91ciBleWUuXCI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBpZD1cIm1lbnUtMlwiPlxuICAgICAgICAgICAgICAgIDxoMz5UaHJlZSBUcm91dHM8L2gzPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL21lbnVfMi5qcGdcIiBhbHQ9XCIzIGRlYWQgdHJvdXRzIGxheWluZyBvbiBpY2UuXCI+XG4gICAgICAgICAgICAgICAgPHA+QSBzdWJsaW1lIHRhc3RlIGludG8gdGhlIHdvcmxkIGJlbmVhdGggdGhlIHN1cmZhY2Ugb2YgdGhlIHN1bm55IGNsaWZmc2lkZSBjb2FzdCwgdGhpcyBkaXNoIGlzIHN1cmUgdG8gY29ucXVlciB0aGUgZmVhcnMgb2YgZXZlbiB0aGUgbW9zdCBzZWFmb29kIGFic3RpbmVudCBsYW5kbHViYmVycy4gVGhlIHRocmVlIGFxdWF0aWMgcmFwc2NhbGxpb25zIGFyZSBwbGFjZWQgXCJvbiB0b3Agb2YgZWFjaCBvdGhlclwiIGFuZCBzZWN1cmVkIHdpdGggYW4gb3ZlcnNpemVkIGZpc2hpbmcgaG9vay4gRG9uJ3QgZ2V0IHRvbyBleGNpdGVkLCBvciB5b3UncmUgZ29ubmEgZ2V0IGNhdWdodCB5b3Vyc2VsZiE8YnI+PGJyPlxuICAgICAgICAgICAgICAgIExvb2tzIGFyZSBkZWNlaXZpbmcuIERvIG5vdCB1bmRlcmVzdGltYXRlIHRoaXMgZGlzaC4gSWYgeW91IGNhbid0IGZpbmlzaCB0aGlzIGRpc2gsIHBsb3AgdGhlIHJlbWFpbmluZyBmaXNoIGluIHlvdXIgcG9ja2V0IHRvIGtlZXAgdGhlbSB3YXJtIGFuZCBjb21mb3J0YWJsZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBpZD1cIm1lbnUtM1wiPlxuICAgICAgICAgICAgICAgIDxoMz5GbG91cnkgQ3Jpc3BlciBDcnVtYnM8L2gzPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL21lbnVfMy5qcGdcIiBhbHQ9XCJBIGJvd2wgb2YgZnJpZWQgY3Jpc3B5IG9uaW9ucyg/KSB3aXRoIGEgc3Bvb24uXCI+XG4gICAgICAgICAgICAgICAgPHA+QSBkZWVwIGZyaWVkIHNlbnNhdGlvbiBsaWtlIG5vIG90aGVyLCB0aGlzIHNpZ25hdHVyZSBkaXNoIGlzIG1hZGUgb2YgYW4gYW1icm9zaWEgdGhhdCBpcyB3b3JzaGlwcGVkIGJ5IHJvY2sgZG92ZXMgYWxsIGFyb3VuZCB0aGUgd29ybGQsIGEgdHJlYXN1cmUgdGhhdCBpcyBoaWdobHkgdmFsdWVkIGJ5IHBpZ2VvbnMgbm8gbWF0dGVyIGhvdyBzdGFsZTogYnJlYWRjcnVtYnMuIFRvIG1lcmVseSBjYWxsIHRoaXMgZGlzaCBhIHdvcmsgb2YgYXJ0IHdvdWxkIGJlIGFuIGluc3VsdCBub3Qgb25seSB0byB0aGUgY2hlZiB3aG8gcHJlcGFyZWQgaXQsIGJ1dCBhbHNvIHRvIHRoZSBlbnRpcmUgY3VsaW5hcnkgd29ybGQuPGJyPjxicj5cbiAgICAgICAgICAgICAgICBUaGlzIHdvcmsgb2YgYXJ0IG11c3QgYmUgZW5qb3llZCBzZXZlcmFsIGRheXMgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlcGFyZWQsIHByZWZlcmFibHkgc3RvcmVkIGluIGEgcGxhc3RpYyBiYWcgc28gdGhhdCBhbGwgb2YgdGhlIGFjY3VtdWxhdGVkIG9pbCB0aGF0IGhhcyBkcmlwcGVkIGRvd24gdG8gdGhlIGJvdHRvbSBjYW4gYmUgbWFydmVsZWQgYXQgZm9yIGFsbCBvZiBpdHMgZ2xpc3RlbmluZyBiZWF1dHksIGFzIGlmIGl0IHdlcmUgdGhlIGdvbGRlbiBzdW4ga2lzc2luZyB0aGUgZ3Jhc3MgYW5kIGZsb3dlcnMgb2YgYSB2ZXJkYW50IG1lYWRvdy48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufVxuXG5leHBvcnQgeyBsb2FkTWVudUNvbXBvbmVudCB9Il0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9