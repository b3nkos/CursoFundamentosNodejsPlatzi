function matFunction(sources, deletePosition) {
  let key = 0;
  const lettersIndex = {};
  
  sources.map((source, index) => {
    if (source.type === 'letter') {
      lettersIndex[key] = index;
      key++;
    }
  });

  return sources.filter((element, index) => {
    return index !== lettersIndex[deletePosition];
  });
};

const sources = [
  { type: 'number', value: '3' },
  { type: 'letter', value: 'J' },
  { type: 'number', value: '7' },
  { type: 'letter', value: 'H' }
];

console.log(matFunction(sources, 10));