function HideShowSkillBars() {
  var x = document.getElementById("skill-bars");
  var y = document.getElementById("chevronDown");
  var z = document.getElementById("chevronUp");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "inline-block";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
    z.style.display = "none";
  }
}
