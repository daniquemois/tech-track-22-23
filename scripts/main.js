// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'
import '../scripts/api.js';
import '../scripts/audio.js';
import '../scripts/three.js';
import '../scripts/slotmachine.js';

// We can use node_modules directely in the browser!
import * as d3 from 'd3';

const inspect = document.querySelector(".inspect");

if(inspect) {
  inspect.addEventListener("click", () => {
    document.querySelector(".table").classList.toggle("change");
    document.querySelector(".music").classList.toggle("change");
  });
}
 
console.log('Hello, world!');

