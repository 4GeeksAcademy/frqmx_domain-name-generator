/* let multiplicationTable = [];

for(let i=1; i<11; i++) {
    for(let j=1; j<11; j++) {
        multiplicationTable.push(`${i} * ${j} = ${i*j}`); 
    }
}  

console.log(multiplicationTable); */

let prefix = ["big", "important", "very", "cool", "super"];
let word = ["code", "coders", "tech", "stack", "geeks", "computing"];

for (let i = 0; i < prefix.length; i++) {
  for (let j = 0; j < word.length; j++) {
    // console.log(`${prefix[i]}${word[j]}.com`);
    let div = document.createElement("div");
    div.innerText = `
            ${prefix[i]}${word[j]}.com
            ${prefix[i]}${word[j]}.net
            ${prefix[i]}${word[j]}.io
            ${prefix[i]}${word[j]}.us
        `;

    document.body.appendChild(div);
  }
}
