
// Make current link marked in different color
$(document).ready(function() {
  $("[href]").each(function() {
      if (this.href == window.location.href) {
          $(this).addClass("active-link");
      }
  });
});

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="canvas">
      <div id="mobileNav">
        <div id="mobileNavWrapper" class="wrapper" style="height: 0px; margin-bottom: 10px;">
          <nav class="main-nav mobileNav" id="mobileLinks">
            <ul>
              <li id="baseLink"><a href="/" class="mobileLink">WORK</a></li>
              <li id="blogLink"><a href="/blog/post1/index.html" class="mobileLink">PERSONAL INTERESTS</a></li>
              <li id="aboutLink"><a href="/about/index.html" class="mobileLink">ABOUT</a></li>
            </ul>
          </nav>
        </div>
        <div id="mobileMenuLink"><a href= javascript:void(0); onclick="OpenMenu()" >Menu</a></div>
      </div>
    
      <header id="header">
        <div id="logo">
          <h1 class="logo"><a href="/" id="title">Lauren Paffrath</a></h1>
          
        </div>
        <div id="topNav" data-content-field="navigation">
          <nav class="main-nav desktopNav">
            <ul>
              <li class="deskLink"><a href="/" id="baseLink" >WORK</a></li>
              <li class="deskLink"><a href="/blog/post1/index.html" id="blogLink" >PERSONAL INTERESTS</a></li>
              <li class="deskLink"><a href="/about/index.html" id="aboutLink" >ABOUT</a></li>
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

