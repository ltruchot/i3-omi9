function changeBg() {
  var color = document.body.style.backgroundColor;

  if (color !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.textTransform = "uppercase";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.textTransform = "lowercase";
  }
}
