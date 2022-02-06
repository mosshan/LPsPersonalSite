function OpenMenu() {
  var mobNav = document.getElementById("mobileNavWrapper");

  if (mobNav.style.height === "0px") {
    mobNav.style.height = "136px";
    mobNav.style.borderBottom = "1px solid rgb(221, 221, 221)";
    mobNav.style.marginBottom = "20px";
  } else {
    mobNav.style.height = "0px";
    mobNav.style.borderBottom = "0px solid #ddd"
    mobNav.style.marginBottom = "10px";
  }
}