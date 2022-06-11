function showFunction() {
  var x = document.getElementById("nav-barID");
  if (x.className === "nav-bar") { 
    x.className += " responsive";
  } else {
    x.className = "nav-bar"; 
  }
}

