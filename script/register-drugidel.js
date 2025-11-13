document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('loginForm');
	
	 form.addEventListener('submit', function (e) {
	 
	 e.preventDefault();
	
	 
      Swal.fire({
        icon: 'success',
        title: 'Registracija je uspešna!',
        text: 'Dobrodošli',
		confirmButtonColor: '#0265dc'
      });
	  window.location.href = 'index.html';
});
});