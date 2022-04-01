
let headerelement=document.querySelector("header");
console.log(headerelement);

let allsections=document.querySelectorAll("section");
console.log(allsections);

let currentsection= document.querySelector('section').nextElementSibling;
console.log(currentsection);

let nextsection= document.querySelector('section').nextElementSibling.nextElementSibling;
console.log(nextsection);

let h2frompreviousSection= document.querySelector("section.current").previousElementSibling.children;
console.log(h2frompreviousSection);

let highlight=document.querySelector('section').nextElementSibling.firstElementChild;
console.log(highlight);

let allH2= Array.from(document.querySelectorAll("h2")).map(section => section.parentElement);
console.log(allH2),
