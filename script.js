'use strict';

const change = document.getElementById('change'),
  color = document.getElementById('color'),
  random = () => {
    return Math.floor(Math.random() * 255);
  };

change.addEventListener('click', () => {
  const colorsHEX = random().toString(16) + random().toString(16) + random().toString(16);

  document.body.style.backgroundColor = `#${colorsHEX}`;
  color.textContent = `#${colorsHEX}`;
  change.style.color = `#${colorsHEX}`;
});
