$(document).ready(function () {
  $("#button-santa").click(function (e) {
    e.preventDefault();
    var textarea = $("#content");
    var names = parseNames(textarea.val());

    var matches = assignSantas(names);
    displayNames(matches);
  })
});

function parseNames(value) {
  var names = []
  var vals = value.split("\n");
  for (let i = 0; i < vals.length; i++) {
    var name = vals[i].trim();
    if (name === '') continue;
    names.push(name);
  }
  return names;
}

function assignSantas(array) {
  var matches = [];

  if (!array || !array.length)
    return null;

  var santas = array.slice(); // Crée une copie du tableau
  shuffle(santas);

  for (let i = 0; i < santas.length; i++) {
    var santa = santas[i];
    var child;

    // Eviter de tomber sur soi-meme
    if (i !== santas.length - 1)
      child = santas[i + 1];
    else
      child = santas[0];

    matches.push({
      "santa": santa,
      "child": child
    })
  }

  return matches;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function displayNames(matches) {
  var list = document.getElementById("santa-list");
  var input = $("#content");

  input.val("");
  list.innerHTML = "";

  var divSanta = document.createElement("div"),
    divChild = document.createElement("div"),
    h2Santa = document.createElement("h2"),
    h2Child = document.createElement("h2");

  divSanta.setAttribute("class", "array-santa-name");
  h2Santa.setAttribute("class", "title-array");
  h2Santa.innerHTML = "Pères Noël";

  divChild.setAttribute("class", "array-child");
  h2Child.setAttribute("class", "title-array");
  h2Child.innerHTML = "Enfants";

  divSanta.appendChild(h2Santa);
  divChild.appendChild(h2Child);

  for (let i = 0; i < matches.length; i++) {
    var pairing = matches[i],
      santa = pairing.santa,
      child = pairing.child,
      pSanta = document.createElement("p"),
      pChild = document.createElement("p");

    pSanta.setAttribute("class", "text-array")
    pSanta.innerHTML = santa;

    pChild.setAttribute("class", "text-array")
    pChild.innerHTML = child;

    divSanta.appendChild(pSanta);
    divChild.appendChild(pChild);
  }
  list.appendChild(divSanta);
  list.appendChild(divChild);
}