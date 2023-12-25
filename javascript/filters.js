document.querySelector("#filter-coding").addEventListener("click", filterCoding);
document.querySelector("#filter-design").addEventListener("click", filterDesign);
document.querySelector("#filter-marketing").addEventListener("click", filterMarketing);
let loadMore = document.querySelector("#load-more");

function filterCoding() {
    loadMore.style.display = 'none';

    hideAllCards();

    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach(codingCard => {
        codingCard.style.display = "inline-block";
    });

    document.getElementById("filter-coding").classList.add("active");
    document.getElementById("filter-design").classList.remove("active");
    document.getElementById("filter-marketing").classList.remove("active");
}

function filterDesign() {
    loadMore.style.display = 'none';

    hideAllCards();

    var designCards = document.querySelectorAll(".design");
    designCards.forEach(designCard => {
        designCard.style.display = "inline-block";
    });

    document.getElementById("filter-coding").classList.remove("active");
    document.getElementById("filter-design").classList.add("active");
    document.getElementById("filter-marketing").classList.remove("active");
}

function filterMarketing() {
    loadMore.style.display = 'none';

    hideAllCards();

    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach(marketingCard => {
        marketingCard.style.display = "inline-block";
    }); 

    document.getElementById("filter-coding").classList.remove("active");
    document.getElementById("filter-design").classList.remove("active");
    document.getElementById("filter-marketing").classList.add("active");
}

function hideAllCards() {
    var allCards = document.querySelectorAll(".card-academy");  

    allCards.forEach(card => {
        card.style.display = "none";
    });
}

