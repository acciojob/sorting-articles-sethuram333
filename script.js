const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '');
}

const sortedBands = bands.slice().sort((a, b) =>
  stripArticle(a).localeCompare(stripArticle(b), undefined, {
    sensitivity: 'base'
  })
);

const ul = document.getElementById('band');

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.innerText = band;
  ul.appendChild(li);
});
