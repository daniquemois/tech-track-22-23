// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';

document.querySelector(".table").addEventListener("click", () => {
    document.querySelector(".table").classList.toggle("change");
    document.querySelector(".music").classList.toggle("change");
  });
 
console.log('Hello, world!');
