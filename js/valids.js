$(function() {
	$(".your-number").mask("8(999) 999-9999");
  });

function test (Text){
    let re = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/
    
}


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