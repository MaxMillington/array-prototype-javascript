// TODO: Filter out just the photographs and store them in a variable called `photographs`.

var photographs = instagramAPI.data.filter(function (asset) {
    return asset.type === 'image';
});

// TODO: Filter out just the videos and store them in a variable called `videos`.

var videos = instagramAPI.data.filter(function (asset) {
    return asset.type === 'video';
});

// TODO: Filter out all of the photographs that don't have any likes and store the remaining photographs into a variable called `popularPhotographs`.

var popularPhotographs = photographs.filter(function(photo) {
    return photo.likes.count;
});

// TODO: Map each photograph into a DOM node and append it to the #photographs DIV element.

photographs.map(createImageElementFromPhotograph).
    forEach(addInstagramImageToThePage);
x
