document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('form');
	
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		
		Swal.fire({
			title: "Odlično!",
			text: "Račun je bil uspešno ustvarjen!",
			icon: "success",
			confirmButtonText: "V redu"
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = 'index.html';
			}
		});
	});
});