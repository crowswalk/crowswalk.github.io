document.addEventListener("DOMContentLoaded", function() {

    //create lightbox div in the footer


    //add classes to links to be able to initiate lightboxes
    var elements = document.querySelectorAll('.artpage');
    elements.forEach(element => {
        var newdiv = document.createElement("h1");
        // newdiv.setAttribute('id', "lightbox");
        newdiv.innerHTML = element.title;
        element.appendChild(newdiv);
    });
});