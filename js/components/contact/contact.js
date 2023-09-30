

function contact() {
	return `
	<div id="formrow" class="container">
	<div  class="row justify-content-center align-items-center g-2">
	  <div id="form" class="col-md-6">
		<h2 id="knowme">Wanna Know more about me!</h2>
		<p id="detail">If you have any work from me or any type of quries related to my development, you can send me message from here. It's my pleasure to help you.</p>

		<form onSubmit= "sendEmail(); reset(); return false;" name="submit-to-google-sheet" id="newRecord" action="">
		  <label for="name">Name:</label> <br>
		  <input type="text" id="name" name="name" class="name" placeholder="Enter your name"><br>
		  <span id="nameError"></span> <br>
		  <label for="name">Email:</label> <br>
		  <input type="text" id="email" name="email" class="email" placeholder="Enter your email"><br>
		  <span id="emailError"></span> <br>
		  <label for="name">Message:</label> <br>
		  <textarea id="message" name="message" rows="4" cols="50" placeholder="Write a message" ></textarea> <br>
		  <span id="messageError"></span> <br>



			
		  <button id="button"  type="submit">Submit</button> 
		</form>
	  </div>
	  <div  class="col-md-6">
		   <img class="img-fluid"  id="contact2"  src="./img/pexels-ink-drop-15387699.jpg"  alt="">
		   <div class="row">
		  
		  
	  </div>
	</div>
   </div>
	`


	
   
}

// Instead, add the event listener after your module has been imported and the DOM is ready
document.addEventListener('DOMContentLoaded', function () {











 


	// for dark 


	const photo2 = document.getElementById('photo2');

photo2.onclick = function () {
  
  document.body.classList.toggle("dark-theme")
  if (document.body.classList.contains("dark-theme")) {
    document.body.style.background="black"
    photo2.src = "./img/sun.png";
  } else {
    document.body.style.background="white"
    photo2.src = "./img/moon.png";
  }
}



   //  spreadsheat 

   const scriptURL = 'https://script.google.com/macros/s/AKfycbwL_PkWHkMJ8kbFoI9XOdIEDIHJFYViDjC3jXtvFj7smnN4_700mGrAmNE5zwL4Pwxf/exec';
   const forme = document.forms['submit-to-google-sheet']
 
   forme.addEventListener('submit', e => {
	 e.preventDefault()
	 fetch(scriptURL, { method: 'POST', body: new FormData(forme)})
	   .then(response => console.log('Success!', response))
	   .catch(error => console.error('Error!', error.message))
   })




//    for project page

var learnMore= document.querySelectorAll(".button");

//   project page end 






//    for validation 

    

    const form = document.getElementById('newRecord');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;

			
		




			let nameError = document.getElementById('nameError');
			let emailError = document.getElementById('emailError');
			let messageError = document.getElementById('messageError');
		  
			if(name == ''){
				nameError.innerHTML = 'Name is required';
			}else if(!name.match(/^[A-Za-z\s]+$/)){
				nameError.innerHTML = 'Name must consist of letters only.';
			}else if (name.length < 3){
				nameError.innerHTML = 'Name must be at least 2 characters';
			}     
			else{
				nameError.innerHTML = '';
			}
		  
		
		
			if(email == ''){
				emailError.innerHTML = 'Email is required';
			}else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
				emailError.innerHTML = 'Email is invalid';
			}else{
				emailError.innerHTML = '';
			}
		
			if(message == ''){
				messageError.innerHTML = 'message is required';
			}
			else{
				messageError.innerHTML = '';
			}
		  
        });
    }
});

export default contact;



