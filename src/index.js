/* import cipher from './cipher.js';

console.log(cipher); */

// SALUDO

let saveUsersBtn = document.getElementById("save_user_btn")
if (saveUsersBtn != null) {
	saveUsersBtn.addEventListener("click", () => {
		let user1 = document.getElementById("user1").value;
		let user2 = document.getElementById("user2").value;
		let userForm = document.getElementById("form_user");
		if (user1 && user2 != "") {
			localStorage.setItem("name1", user1);
			localStorage.setItem("name2", user2);
			userForm.submit();
		}
		else {
			let nameAlert = document.getElementById("name_alert")
			nameAlert.style.display = "block"
		}
	})
}

let greetings = document.getElementById("greetings")
if (greetings != null) {
	window.addEventListener("load", () => {
		let sayHi = document.getElementById("say_hi");
		sayHi.innerHTML = "Hola, " + localStorage.getItem("name1");
	})
}

//   MODAL

if (document.getElementById("btnModal")) {
	var modal = document.getElementById("tvesModal");
	var btn = document.getElementById("btnModal");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementsByTagName("body")[0];

	btn.onclick = function () {
		modal.style.display = "block";
		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	}

	span.onclick = function () {
		modal.style.display = "none";
		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
			body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
		}
	}
}
