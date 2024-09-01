var cards = Array.from(document.querySelectorAll(".card img"));
var layer = document.querySelector(".layer");
var cardImg = document.querySelector(".img-card");
var nextElem = document.querySelector(".next");
var prevElem = document.querySelector(".prev");
var closeElem = document.querySelector(".close");
var currentImgIndex;

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    layer.classList.replace("d-none", "d-flex");
    var imgUrl = e.target.src;
    currentImgIndex = cards.indexOf(e.target);
    cardImg.style.cssText = `
    background-image: url(${imgUrl});
    `;
  });
}

//prev img
prevElem.addEventListener("click",function(){
prevImg();
})

function prevImg() {
    // Decrease the currentImgIndex by one
    currentImgIndex--;
    // If the currentImgIndex is less than 0, set it to the last index of the cards array
    if (currentImgIndex < 0) {
        currentImgIndex = cards.length - 1 ;
    }
    // Set the background image of the .img-card to the image of the card at the currentImgIndex
    cardImg.style.cssText = `
    background-image: url(${cards[currentImgIndex].src});
    `;
}


// next img
nextElem.addEventListener("click", function () {
  nextImg();
});
function nextImg() {
currentImgIndex ++;
  if(currentImgIndex > cards.length-1){
    currentImgIndex =0;
}
cardImg.style.cssText = `
background-image: url(${cards[currentImgIndex].src});
`;


}

//close img
closeElem.addEventListener("click",function(){
closeImg();
})
function closeImg() {
     layer.classList.replace("d-flex","d-none");
}

//slide by key 
document.addEventListener("keydown",function(e){
    if(e.code =="ArrowRight"){
        nextImg();
    }else if(e.code =="ArrowLeft"){
        prevImg();
    }else if (e.code =="Escape") {
        closeImg();
    }
})
