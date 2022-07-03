class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="canvas">
      <div id="mobileNav" >
        <div id="mobileNavWrapper" class="wrapper" style="height: 0px; margin-bottom: 10px;">
          <nav class="main-nav mobileNav" id="mobileLinks">
            <ul>
              <li id="baseLink"><a href="/" class="mobileLink link">WORK</a></li>
              <li id="blogLink"><a href="/blog/post1/index.html" class="mobileLink link">PERSONAL INTERESTS</a></li>
              <li id="aboutLink"><a href="/about/index.html" class="mobileLink link">ABOUT</a></li>
            </ul>
          </nav>
        </div>
        <div id="mobileMenuLink"><a href= javascript:void(0); onclick="OpenMenu(); highlightActive()"  >Menu</a></div>
      </div>
    
      <header id="header">
        <div id="logo">
          <h1 class="logo"><a href="/" id="title">Lauren Paffrath</a></h1>
          
        </div>
        <div id="topNav" data-content-field="navigation">
          <nav class="main-nav desktopNav">
            <ul>
              <li id="baseLink"><a href="/" class="deskLink link" >WORK</a></li>
              <li id="blogLink"><a href="/blog/post1/index.html" class="deskLink link">PERSONAL INTERESTS</a></li>
              <li id="aboutLink"><a href="/about/index.html" class="deskLink link">ABOUT</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    `;
  }
}

customElements.define('header-component', Header);



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

function highlightActive() {
  var links = document.getElementsByClassName("link");
  /*
  if(mobNav.style.display === "none"){
    var links = document.getElementsByClassName("deskLink");
    alert("here");
  } else{
    var links = document.getElementsByClassName("mobileLink");
  }*/
  for(var i = 0, max = links.length; i < max; i++){
    if(links[i].href == window.location.href && (links[i].classList.contains("mobileLink") || links[i].classList.contains("deskLink") )){
      links[i].classList.add("active-link");
    }
  }
}

