var searchbutton = document.querySelector(".search");
var searchfield = document.querySelector(".searchinput");
var searchquery = "";
var searchfind = false;
var listofsoftware = document.querySelectorAll(".software");

searchbutton.addEventListener("click", function () {
  var searchquery = searchfield.value;
  //   console.log(searchquery);

  for (var i = 0; i < listofsoftware.length; ++i) {
    //   console.log(listofsoftware[i].innerHTML);
    if (searchquery == listofsoftware[i].innerHTML) {
      console.log(i);
      searchfind = true;
    } else {
      listofsoftware[i].classList.add("hidden");
    }
    if (!searchfind) {
      document.querySelector(".nomessage").innerHTML = "SoftWARE Not FOund";
    }
  }
});

// console.log(listofsoftware);
