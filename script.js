const images = [

    "images/bizonyitvany.PNG",
    "images/éretségi.PNG",
    "images/szakmai_oklevel.PNG",
    "images/angol.PNG",
    "images/bmsc_oklevel.PNG",
    "images/csico1.PNG",
    "images/cisco2.PNG",
    "images/cisco3.PNG",
    "images/cisco4.PNG"

];

let currentImage = 0;

const image = document.getElementById("certificateImage");

document.getElementById("nextBtn").addEventListener("click", () => {

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

    image.src = images[currentImage];

});

document.getElementById("prevBtn").addEventListener("click", () => {

    currentImage--;

    if(currentImage < 0){

        currentImage = images.length - 1;

    }

    image.src = images[currentImage];

});