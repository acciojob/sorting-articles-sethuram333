//your JS code here. If required.


// remove leading articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

console.log(sortedBands);