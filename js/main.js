let sideMenuBtn = document.querySelector('.menu-toggler');
let sideMenuBtn_close = document.querySelector('.close-btn');
let sidebar = document.querySelector('.side-menu');

sideMenuBtn.addEventListener('click', () => {
    sidebar.style.right = 0
})
sideMenuBtn_close.addEventListener('click', () => {
    sidebar.style.right = '-100%'
})


/* popup*/
let mypopup = document.getElementById('mypopup');
function closepopup(){
	mypopup.style.display = "none";
}
	function shwpopup() {
	setTimeout(function(){ 

		mypopup.style.display = "block";

	 }, 3000);
	}

	shwpopup() 

	/* popup*/