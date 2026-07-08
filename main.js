console.log("main.js is running at", new Date());

//setTimeout(() => {location.reload()}, 1000);

const doubleImages = document.querySelectorAll(".double-images img");

doubleImages.forEach((img) => {
    img.style.flex = img.naturalWidth / img.naturalHeight;
});
