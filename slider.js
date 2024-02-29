let currentIndex = 0;

function scrollGallery(direction, galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) {
    console.error(`Gallery element with id '${galleryId}' not found.`);
    return;
  }
  const imageWidth = gallery.clientWidth;
  const totalImages = gallery.children.length;
  if (direction === "left") {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  } else {
    currentIndex = (currentIndex + 1) % totalImages;
  }
  const newPosition = currentIndex * imageWidth;
  const transformValue = `translateX(-${newPosition}px)`;
  gallery.style.transform = transformValue;
}