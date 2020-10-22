function HideShowSkillBars(SectionName, Down, Up) {
  var x = document.getElementById(SectionName);
  var y = document.getElementById(Down);
  var z = document.getElementById(Up);
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
