const images = [

    "bizonyitvany.png",
    "éretségi.png",
    "szakmai_oklevel.png",
    "angol.png",
    "bmsc_oklevel.png",
    "csico1.png",
    "cisco2.png",
    "cisco3.png",
    "cisco4.png"

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