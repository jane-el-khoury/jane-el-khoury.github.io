let images= document.querySelectorAll('main > a >img');
console.log(images);

function grayscale() {
    images[0].style.filter = 'grayscale(100%)'; //makes image gray
    images[1].style.filter = 'grayscale(100%)';
    images[2].style.filter = 'grayscale(100%)';
    images[3].style.filter = 'grayscale(100%)';
}

function color() {
    images[0].style.filter = 'grayscale(0%)'; //restore color of image
    images[1].style.filter = 'grayscale(0%)';
    images[2].style.filter = 'grayscale(0%)';
    images[3].style.filter = 'grayscale(0%)';

    // keep current image you're interacting with in color
    console.log(this);
    this.style.filter = 'grayscale(0%)';
}


images[0].addEventListener('pointerover', grayscale);
images[1].addEventListener('pointerover', grayscale);
images[2].addEventListener('pointerover', grayscale);
images[3].addEventListener('pointerover', grayscale);

images[0].addEventListener('pointerout', color);
images[1].addEventListener('pointerout', color);
images[2].addEventListener('pointerout', color);
images[3].addEventListener('pointerout', color);