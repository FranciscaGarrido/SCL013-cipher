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

// CIFRADO CESAR

	window.onload = function(){
		/*Estas variables enlasan al boton codificar y decodificar*/
			const btnEncode = document.getElementById("send1");
			const btnDecode = document.getElementById("send2");
		/*y estas enlazan al textarea readonly*/
			const textoEn = document.getElementById("codificado1");
			const textoDe = document.getElementById("codificado2");
		
		/*btnEncode*/
			btnEncode.addEventListener('click', () => {
				
				let ingresoEn = document.getElementById("codificar1").value;
				let offset = document.getElementById("desplazamiento").value;
				let send = window.cipher.encode(ingresoEn,offset);
				textoEn.innerHTML = send;
			})

		/*btnDecode*/ 
			btnDecode.addEventListener('click', () => {
			
				let ingresoDe = document.getElementById("codificar2").value;
				let offset = document.getElementById("desplazamiento").value;
				let send = window.cipher.decode(ingresoDe,offset);
				textoDe.innerHTML = send;
			})
		
		
		}