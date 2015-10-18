function createImageElementFromPhotograph(photograph) {
    var image = document.createElement('img');
    image.alt = photograph.caption.text;
    image.src = photograph.images.low_resolution.url;
    image.className = "instagram-image";
    return image;
}


var photographsDiv = document.getElementById('photographs');

function addInstagramImageToThePage(photograph) {
    photographsDiv.appendChild(photograph);
}
