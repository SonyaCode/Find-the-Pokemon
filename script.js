var oddish = document.querySelector(".oddish");
var mystery1 = document.getElementById("first");
var starly = document.querySelector(".starly");
var mystery2 = document.getElementById("second");
var diglett = document.querySelector(".diglett");
var mystery3 = document.getElementById("third");
var slakoth = document.querySelector(".slakoth");
var mystery4 = document.getElementById("fourth");
var lotad = document.querySelector(".lotad");
var mystery5 = document.getElementById("fifth");
var tree = document.querySelector(".tree")

oddish.onclick = function() {
  mystery1.style.filter = "brightness(1)";
}

starly.onclick = function() {
  mystery2.style.filter = "brightness(1)";
}

diglett.onclick = function() {
  mystery3.style.filter = "brightness(1)";
}

tree.onclick = function() {
  tree.style.display = "none";
}

slakoth.onclick = function() {
  mystery4.style.filter = "brightness(1)";
}

lotad.onclick = function() {
  mystery5.style.filter = "brightness(1)";
}

