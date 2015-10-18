// TODO: We saw before that each photo/video
// has a count for the number of likes stored in
// `likes.count`. What is the total number of likes for
// all of the photos/videos fetch from the API?

var totalLikes = instagramAPI.data.reduce(function (total, element) {
    return total + element.likes.count;
}, 0);

// TODO: Given an API response stored in `instagramAPI.data`,
// can you count up the number of times each tag appears?

var getTags = instagramAPI.data

var popularTags = instagramAPI.data.reduce(function (total, object) {
    object.tags.forEach(function(tag){
        if (!total[tag]) {
            total[tag] = 1;
        } else {
            total[tag]++
        }
    });
    return total;
}, {});

console.log(popularTags);
