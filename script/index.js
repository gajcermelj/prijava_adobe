document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('#loginForm');
	const email = document.getElementById('email');
	const password = document.getElementById('password');	
	
	const togglePassword = document.getElementById('togglePassword');
	const passwordInput = document.getElementById('password');

	togglePassword.addEventListener('click', function() {
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text';
			togglePassword.src = 'Slike/odprte_oci.svg';
		}else{
			passwordInput.type = 'password';
			togglePassword.src = 'Slike/zaprte_oci.svg';
		}
	});

	form.addEventListener('submit', function(e) {
		e.preventDefault();
	
	 
	 const pravilniEmail="joze.kovac@gmail.com";
	 const pravilnoGeslo="Joze123!";
	 
	 if (email.value === pravilniEmail && password.value === pravilnoGeslo) {
      Swal.fire({
        icon: 'success',
        title: 'Prijava uspešna!',
        text: 'Dobrodošel nazaj',
		confirmButtonColor: '#0265dc'
      });
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Napaka pri prijavi',
        text: 'Napačen e-poštni naslov ali geslo.',
		confirmButtonColor: '#0265dc'
      });
	}
	});
});
function sporocilo(event) {
    event.preventDefault();
    Swal.fire({
        icon: 'info',
        title: 'Credit',
        text: 'Gaj Čermelj',
        confirmButtonColor: '#0265dc'
	}).then=>{
		window.location.href = 'https://www.adobe.com/si/creativecloud.html?mv=search&mv=search&mv2=paidsearch&sdid=D4P81NYZ&ef_id=Cj0KCQiAiqDJBhCXARIsABk2kSkqjspK2DNaL0mAekq0C4fZH1Gvq5XINz_GdMePCN_pNJqzaOOHlQQaAphoEALw_wcB:G:s&s_kwcid=AL!3085!3!759434162045!e!!g!!adobe!22689283866!180587571825&gad_source=1&gad_campaignid=22689283866&gbraid=0AAAAADraYsIJ3pPuPQRT_BmvXer5TQUwI&gclid=Cj0KCQiAiqDJBhCXARIsABk2kSkqjspK2DNaL0mAekq0C4fZH1Gvq5XINz_GdMePCN_pNJqzaOOHlQQaAphoEALw_wcB';
});
});

}
