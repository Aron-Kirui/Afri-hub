let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.image-container');
    const descriptions = document.querySelectorAll('.image-description');

    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    }

    images.forEach(img => img.classList.remove('active'));
    descriptions.forEach(desc => desc.style.display = 'none');

    images[currentIndex].classList.add('active');
    descriptions[currentIndex].style.display = 'block';
}

function changeImage(n) {
    currentIndex += n;
    showImage(currentIndex);
}

// Show the initial image
showImage(currentIndex);

