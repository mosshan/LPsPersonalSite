var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var code = this.nextElementSibling;
    if (code.style.display === "block") {
      code.style.display = "none";
    } else {
      code.style.display = "block";
    }
  });
}


function setupGallery(images) {
  let currentImageIndex = 0;
  const galleryImage = document.getElementById('galleryImage');

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      currentImageIndex = index;
      galleryImage.src = images[currentImageIndex];
    }
  }

  function prevImage() {
    showImage(currentImageIndex - 1);
  }

  function nextImage() {
    showImage(currentImageIndex + 1);
  }

  // Return functions to be accessible from HTML
  return {
    prevImage,
    nextImage
  };
}