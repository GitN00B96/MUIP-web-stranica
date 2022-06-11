function showFunction() {
  var x = document.getElementById("nav-barID");
  if (x.className === "nav-bar") { /* otvara hamburgerr */
    x.className += " responsive";
  } else {
    x.className = "nav-bar"; /* mogucnost klikanja hamburgera da bi sakrio botune */
  }
}

