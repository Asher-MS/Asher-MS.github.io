var searchbutton = document.querySelector(".search");
var searchfield = document.querySelector(".searchinput");

searchbutton.addEventListener("click", function () {
  var searchquery = searchfield.value;
  console.log(searchquery);
});

var listofsoftware = document.querySelectorAll(".software");
console.log(listofsoftware);

for (var i = 0; i < listofsoftware.length; ++i) {
  console.log(listofsoftware[i].innerHTML);
}
