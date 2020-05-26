function menuClick(x) {
  if (x.style.display == "none") {
    document.getElementById("mySidenav").style.display = "inline-block";
  } else {
    document.getElementById("mySidenav").style.display = "none";
  }
  x.classList.toggle("change");
}
