console.log("main.js is running at", new Date());

//setTimeout(() => {location.reload()}, 1000);

const imageRowImages = document.querySelectorAll(".image-row img");

imageRowImages.forEach((img) => {
    img.style.flex = img.naturalWidth / img.naturalHeight;
});
