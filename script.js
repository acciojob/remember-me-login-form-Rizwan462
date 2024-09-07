//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('loginForm');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const remCheckbox = document.getElementById('checkbox');
	const existUserbtn = document.getElementById('existing');

	if(localStorage.getItem('username') && localStorage.getItem('password')){
		existUserbtn.style.display = 'block';
	}
	form.addEventListener('submit', function (e){
		e.preventDefault();
		const username = usernameInput.value;
		const password = passwordInput.value;

		if(remCheckbox.checked) {
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
		}else{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
		alert(`Logged in as ${username}`);
	});

	existUserbtn.addEventListener('click', function(ev){
		ev.preventDefault();
		const savedUsername = localStorage.getItem('username');
		if(savedUsername){
			alert(`Logged in as ${savedUsername}`);
		}
	});
	
});