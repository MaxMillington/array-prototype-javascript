// TODO: Create an array called `simplifiedPhotographs` that takes `photographs` and transforms each one into an object with only two properties: `caption` and `url`.

var simplifiedPhotographs = photographs.map(function(photo) {
    return {
        caption: photo.caption.text,
        url: photo.images.low_resolution.url
    };
});

// TODO: Create an array called `photographElements` that takes `simplifiedPhotographs` and transforms each one into a DOM element.

var photographElements = photographs.map(function(photo) {
    return createImageElementFromPhotograph(photo);
});

//or refactored
//var photographElements = photographs.map(createImageElementFromPhotograph)

