document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('loginForm');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	
	 form.addEventListener('submit', function (e) {
	 
	 e.preventDefault();
	 
	 email.style.border = '1px solid #909090';
	password.style.border = '1px solid #909090';
	email.style.backgroundImage='none';
	password.style.backgroundImage='none';
	
	 
	 const pravilniEmail="joze.kovac@gmail.com";
	 const pravilnoGeslo="Joze123!";
	 
	 if (email.value === pravilniEmail && password.value === pravilnoGeslo) {
      Swal.fire({
        icon: 'success',
        title: 'Prijava uspešna!',
        text: 'Dobrodošel nazaj'
      });
    } else if(email.value!==pravilniEmail){
      email.style.border = '1px solid red';
	  email.style.backgroundImage='url("../Slike/oznaka.svg")';
      Swal.fire({
        icon: 'error',
        title: 'Napaka pri prijavi',
        text: 'Napačen e-poštni naslov.'
      });
    }else if(password.value!==pravilnoGeslo){
      password.style.border = '1px solid red';
	  password.style.backgroundImage='url("../Slike/oznaka.svg")';
      Swal.fire({
        icon: 'error',
        title: 'Napaka pri prijavi',
        text: 'Napačeno geslo.'
      });
    }
});
});