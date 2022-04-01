document.querySelector("ul").children[1]="Granny Smith Apples";
document.querySelector("ul").children[3].remove();

const newLI = document.createElement('li');
newLI.innerHTML = "Kombucha";

document.querySelector("ul").children[0].remove();
document.querySelector("ul").children[1].remove();
document.querySelector("ul").children[2].remove();

let array = ['protein bars', 'almonds', 'peanut butter'];
for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = array[i];
    list.appendChild(li);
}
document.querySelector("ul").children[1].class="Important"