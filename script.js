$("#button-santa").click(function () {
  var myObj = {};
  var santas = $("#content")
    .val()
    .split("\n");

  var nbSantas = santas.length;

  var htmlSantas = "";
  santas.forEach(santa => {
    myObj[santa] = ""
    htmlSantas += "<p class=\"text-array\">" + santa + "</p>"
  });

  

  console.log(myObj);


  $("main").append("<section class=\"discover-array\"><div id=\"santa-name\" class=\"array-santa-name\"><h2 class=\"title-array\">Pères Noël</h2>" + htmlSantas + "</div><div class=\"array-child\"><h2 class=\"title-array\">Enfants</h2><p class=\"text-array\"></p></div></section>");
});