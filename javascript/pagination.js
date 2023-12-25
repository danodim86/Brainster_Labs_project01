let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 6;

loadMoreBtn.onclick = () =>{
  let cards = [...document.querySelectorAll('.card-academy')];
  
  for(var i = currentItem; i < Math.min(currentItem + 6, cards.length); i++){
    cards[i].style.display = 'inline-block';
  }

  currentItem += 6;

  if(currentItem >= cards.length){
    loadMoreBtn.style.display = 'none';
  }
}