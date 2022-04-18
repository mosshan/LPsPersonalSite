class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="projects">
      <div class="row">
          <a class="project" href="/projectPages/digitalDessertDesigner/">
            <div class="project-image">
              <img src="images/digitalDessertImage.jpg"  dimensions="1741x1286">
            </div>
            <div class="project-title">Digital Dessert Designer</div>
          </a>
          <a class="project" href="/projectPages/solidworkPrints/">
            <div>
              <div class="project-image">
                <img src="images/solidworkPrints.jpg"  dimensions="1124x961" >
              </div>
              <div class="project-title">solidwork prints</div>
            </div>
          </a>
          <a class="project" href="/projectPages/mazeRacing/">
            <div>
              <div class="project-image">
                <img src="images/mazeRacing.jpeg"  dimensions="2500x1582" >
              </div>
              <div class="project-title">Robot Maze Racing</div>
            </div>
          </a>
          <a class="project" href="/projectPages/stageDesign/">
            <div>
              <div class="project-image">
                <img src="images/stageDesign.jfif"  dimensions="2428x2761" >
              </div>
              <div class="project-title">stage design</div>
            </div>
          </a> 

          <a class="project" href="/projectPages/interactiveChess/">
            <div class="project-image">
              <img src="images/chessProject.jpg"  dimensions="1333x1730">
            </div>
            <div class="project-title">Interactive Chess Board</div>
          </a>
          <a class="project" href="/projectPages/blanketClothes/">
            <div>
              <div class="project-image">
                <img src="images/blanketClothes.jpg"  dimensions="1333x2000" >
              </div>
              <div class="project-title">blanket clothes</div>
            </div>
          </a>
          <a class="project" href="/projectPages/dogDrawing/">
            <div>
              <div class="project-image">
                <img src="images/dogDrawing.jfif"  dimensions="2500x1875" >
              </div>
              <div class="project-title">Dog Drawing</div>
            </div>
          </a>
          <a class="project" href="/projectPages/efficientSolar/">
            <div>
              <div class="project-image">
                <img src="images/efficientSolar.png"  dimensions="246x241" >
              </div>
              <div class="project-title">Creating More Efficient Solar Panels</div>
            </div>
          </a> 

          <a class="project" href="/projectPages/fluxFlow/">
            <div class="project-image">
              <img src="images/fluxFlow.jpg"  dimensions="2000x1333">
            </div>
            <div class="project-title">flux flow</div>
          </a>
          <a class="project" href="/projectPages/bb8Modeling/">
            <div>
              <div class="project-image">
                <img src="images/bb8.png"  dimensions="984x766" >
              </div>
              <div class="project-title">modeling bb8 mechanism</div>
            </div>
          </a>
          <a class="project" href="/projectPages/surfNTurf/">
            <div>
              <div class="project-image">
                <img src="images/surfTurf.jfif"  dimensions="2500x1875" >
              </div>
              <div class="project-title">surf n' turf</div>
            </div>
          </a>
          <a class="project" href="/projectPages/stageDesignMOH/">
            <div>
              <div class="project-image">
                <img src="images/matterOfHusbands.jfif"  dimensions="2448x2204" >
              </div>
              <div class="project-title">a matter of husbands stage design</div>
            </div>
          </a>
      </div>
    </div>
    `;
  }
}

customElements.define('project-squares', Projects);


