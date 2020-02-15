'use strict';

const change = document.getElementById('change'),
  random = () => {
    return Math.floor(Math.random() * 16);
  },
  parseFF = (val) => {
    switch (val) {
      case 10:
        return 'a';
      case 11:
        return 'b';
      case 12:
        return 'c';
      case 13:
        return 'd';
      case 14:
        return 'e';
      case 15:
        return 'f';
      default:
        return val;
    }
  };

change.addEventListener('click', () => {
  const colors = [];

  for (let i = 0; i < 6; i++) {
    colors.push(parseFF(random()));
  }

  console.log(colors.join());
});
