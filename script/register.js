document.addEventListener('DOMContentLoaded', function() {
	const passwordInput = document.getElementById('password');
	const emailInput = document.getElementById('email');
	const zahteve = document.getElementById('zahteve');
	const form = document.querySelector('form');
	
	const commonPasswords = ['password', '12345678', 'qwerty', 'abc123', 'password123', 'admin123'];
	
	function checkPasswordRequirements(password, email) {
		const emailLocal = email.split('@')[0].toLowerCase();
		
		const requirements = {
			length: password.length >= 8,
			case: /[a-z]/.test(password) && /[A-Z]/.test(password),
			number: /[0-9]/.test(password) || /[^a-zA-Z0-9]/.test(password),
			email: !(emailLocal && password.toLowerCase().includes(emailLocal)),
			common: !commonPasswords.some(common => password.toLowerCase().includes(common))
		};
		
		return requirements;
	}
	
	function updateRequirementUI(requirements) {
		const lengthReq = document.getElementById('req-length');
		if (requirements.length) {
			lengthReq.classList.add('valid');
			lengthReq.classList.remove('invalid');
			lengthReq.querySelector('.req-icon').textContent = '✓';
		} else {
			lengthReq.classList.remove('valid');
			lengthReq.classList.add('invalid');
			lengthReq.querySelector('.req-icon').textContent = '✗';
		}
		
		const caseReq = document.getElementById('req-case');
		if (requirements.case) {
			caseReq.classList.add('valid');
			caseReq.classList.remove('invalid');
			caseReq.querySelector('.req-icon').textContent = '✓';
		} else {
			caseReq.classList.remove('valid');
			caseReq.classList.add('invalid');
			caseReq.querySelector('.req-icon').textContent = '✗';
		}
		
		const numberReq = document.getElementById('req-number');
		if (requirements.number) {
			numberReq.classList.add('valid');
			numberReq.classList.remove('invalid');
			numberReq.querySelector('.req-icon').textContent = '✓';
		} else {
			numberReq.classList.remove('valid');
			numberReq.classList.add('invalid');
			numberReq.querySelector('.req-icon').textContent = '✗';
		}
		
		const emailReq = document.getElementById('req-email');
		if (requirements.email) {
			emailReq.classList.add('valid');
			emailReq.classList.remove('invalid');
			emailReq.querySelector('.req-icon').textContent = '✓';
		} else {
			emailReq.classList.remove('valid');
			emailReq.classList.add('invalid');
			emailReq.querySelector('.req-icon').textContent = '✗';
		}
		
		const commonReq = document.getElementById('req-common');
		if (requirements.common) {
			commonReq.classList.add('valid');
			commonReq.classList.remove('invalid');
			commonReq.querySelector('.req-icon').textContent = '✓';
		} else {
			commonReq.classList.remove('valid');
			commonReq.classList.add('invalid');
			commonReq.querySelector('.req-icon').textContent = '✗';
		}
	}
	
	passwordInput.addEventListener('input', function() {
		if (passwordInput.value.length > 0) {
			zahteve.style.display = 'block';
			const requirements = checkPasswordRequirements(passwordInput.value, emailInput.value);
			updateRequirementUI(requirements);
		} else {
			zahteve.style.display = 'none';
		}
	});
	
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		
		const password = passwordInput.value;
		const email = emailInput.value;
		
		zahteve.style.display = 'block';
		const requirements = checkPasswordRequirements(password, email);
		updateRequirementUI(requirements);
		
		const allValid = requirements.length && requirements.case && 
		                requirements.number && requirements.email && requirements.common;
		
		if (!allValid) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Geslo ne izpolnjuje vseh zahtev.",
			});
			return;
		}
		window.location.href = 'register-drugidel.html';
	});
});