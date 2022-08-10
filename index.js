
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();
}





































// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(catName) {
//     return cats.push(catName);
// }

// function destructivelyPrependCat(catName) {
//     return cats.unshift(catName);
// }

// function destructivelyRemoveLastCat() {
//     return cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//     return cats.shift();
// }

// function appendCat(catName) {
//     const copyOfCats = [...cats];
//     copyOfCats.push(catName);
//     return copyOfCats;
// }


// function prependCat(catName) {
//     const copyOfCats = [...cats];
//     copyOfCats.unshift(catName);
//     return copyOfCats;
// }

// function removeLastCat(catName) {
//     const copyOfCats = [...cats];
//     copyOfCats.pop(catName);
//     return copyOfCats;
// }


// function removeFirstCat(catName) {
//     const copyOfCats = [...cats];
//     copyOfCats.shift(catName);
//     return copyOfCats;
// }