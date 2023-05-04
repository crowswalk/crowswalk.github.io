let slideShow = document.getElementById("picmodal");
let closeButton = document.getElementById("x");
let currentSlideshowArray;

document.querySelector('.gridbox').addEventListener('DOMNodeInserted', function(event) {


    currentSlideshowArray = document.querySelector(".gridbox").childNodes;

    for (let i = 0; i < currentSlideshowArray.length; i++) {
        //childNodes[i].dataset.groupindex = i
        focusedImg.addEventListener('click', openSlides(currentSlideshowArray, i))
            //dataset image url property should be child node's url attribute
        currentSlideshowArray[i].dataset.imageurl = focusedImg.childNodes[0].src
    }

})

function openSlides(arrayName, arrayIndex) {
    slideShow.style.display = "flex"
    let focusedImg = document.getElementById("focusedImg")
    focusedImg.dataset.groupindex = arrayIndex
    focusedImg.src = currentSlideshowArray[arrayIndex].dataset.imagurl
    closeButton.style.display = "block"
}

function nextSlide(indexChange) {
    let focusedImg = document.getElementById("focusedImg")
    let newIndex = parseInt(focusedImg.dataset.groupindex)

    newIndex += indexChange
    focusedImg.dataset.groupindex = newIndex
    console.log(focusedImg.dataset.groupindex)

    focusedImg.src = currentSlideshowArray[newIndex % currentSlideshowArray.length]
}

function closeSlides() {
    slideShow.style.display = "none"
    closeButton.style.display = "none"
}