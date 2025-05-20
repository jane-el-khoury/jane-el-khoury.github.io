let images = document.querySelectorAll('.art');
let captions = document.querySelectorAll('.caption');

images.forEach(function(image, index) {
  image.addEventListener('pointerover', function() {
    image.style.border = '3px solid yellow';  // Changes the border of the hovered image
    captions[index].style.backgroundColor = 'yellow';  // Changes the background color of the corresponding caption
  });

  image.addEventListener('pointerout', function() {
    image.style.border = '3px solid white';  // Resets the border when pointer leaves
    captions[index].style.backgroundColor = 'white';  // Resets the background color when pointer leaves
  });
});



function highlightField(event) {
    var label = event.target.closest('label');
    if (label) {
      label.style.textDecoration = 'underline';
    }
  }
  
  function resetLabel() {
    var label = this.closest('label');
    if (label) {
      label.style.textDecoration = 'none';
    }
  }
  
  var inputs = document.querySelectorAll('input, textarea');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', highlightField);
    inputs[i].addEventListener('blur', resetLabel);
  }