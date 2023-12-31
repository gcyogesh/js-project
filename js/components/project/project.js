function project(){
	return `
	<section>
    <h1>Projects</h1>

    <div class="container1">
      <div class="item" id="1">
        <img src="https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80" alt="">
        <div class="text">
          <h3>PROJECT 1</h4>
          <p>Short Description</p>
        </div>
        <div class="button">Learn More</div>
      </div>

      <div class="item" id="2">
        <img src="https://images.unsplash.com/photo-1496492352121-593138d42a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3542849cc0459345e3aa82a90ae51a01&auto=format&fit=crop&w=1350&q=80" alt="">
        <div class="text">
          <h3>PROJECT 2</h4>
          <p>Short Description</p>
        </div>
        <div class="button">Learn More</div>
      </div>

      <div class="item" id="3">
        <img src="https://images.unsplash.com/photo-1515215676803-119c88d493cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baf00747bfb9fe41ad9af8cf00dbebbf&auto=format&fit=crop&w=1350&q=80" alt="">
        <div class="text">
            <h3>PROJECT 3</h4>
          <p>Short Description</p>
          </div>
          <div class="button">Learn More</div>
      </div>

      <div class="item" id="4">
        <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e3be993a88feed38e4f5374ff3ba115&auto=format&fit=crop&w=1350&q=80g" alt="">
        <div class="text">
          <h3>PROJECT 4</h4>
          <p>Short Description</p>
        </div>
        <div class="button">Learn More</div>
      </div>

      <div class="item" id="5">
        <img src="https://images.unsplash.com/photo-1504875427817-937a8a12e167?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd7f399ba43093ead08e7dbf5e083f09&auto=format&fit=crop&w=1434&q=80" alt="">
        <div class="text">
          <h3>PROJECT 5</h4>
          <p>Short Description</p>
        </div>
        <div class="button">Learn More</div>
      </div>

      <div class="item" id="6">
        <img src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f758b0379f730e73c03b6153aaad7cf1&auto=format&fit=crop&w=1350&q=80" alt="">
        <div class="text">
          <h3>PROJECT 6</h4>
          <p>Short Description</p>
        </div>
        <div class="button">Learn More</div>
      </div>
  </div>

  <!-- Modal -->
  <div id="preview" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <img id="img" src="">
      <div id="details">
        <h3 id="title"></h3>
        <p id="info">Some text</p>
        <div class="button" id="live">View</div>
          <i class="fab fa-github-square" id="github"></i>
      </div>
    </div>
  </div>
</section>

	`
}
export default project;