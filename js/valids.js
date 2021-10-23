$(function() {
	$(".your-number").mask("8(999) 999-9999");

	 if (re.test(e.target.value) ) {
	 	name.classList.add("well")

	 } else {
	 	name.classList.add("wrong")

	 }
	 
  });

$(function() {
const name = document.querySelector(".your-name")

name.addEventListener("input", (e) => {

	 const re = /^[a-zA-Я ,.'-]+$/i

	 if (re.test(e.target.value) ) {
	 	name.classList.add("well")
	 	name.classList.remove("wrong")

	 } else {
	 	name.classList.remove("well")
	 	name.classList.add("wrong")

	 }
 })
});

// let selector2 = document.querySelector('input[type="tel"]');

// selector2.addEventListener('input', function(){
// 	console.log(selector2.value)


// 	const re = /^\d*(\.\d+)?$/

// 	console.log(selector2.value.match(/[0-9]/g).length)


// 	console.log(selector2.value.replace(/[0-9]/g, "0"));
	
// });

// let validateForms = function(selector, rules, successModal, yaGoal) {
// 	new window.JustValidate(selector, {
// 		rules: rules,
// 		submitHandler: function(form) {
// 			let formData = new FormData(form);

// 			let xhr = new XMLHttpRequest();

// 			xhr.onreadystatechange = function() {
// 				if (xhr.readyState === 4) {
// 					if (xhr.status === 200) {
// 						console.log('Отправлено');
// 					}
// 				}
// 			}

// 			xhr.open('POST', 'mail.php', true);
// 			xhr.send(formData);

// 			form.reset();

			
// 		}
// 	});
// }

// validateForms('.form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');