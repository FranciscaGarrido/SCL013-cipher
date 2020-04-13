window.cipher = {
// desplazamiento hacia adelante
	encode: (ingresoEn, offset) => {

		let listo = "";
		for (let i = 0; i < ingresoEn.length; i++) { //recorre letras
			let posText = ingresoEn.charCodeAt(i); //se guarda la posc. de la letra en ascii - charCodeAt nos da la posc.de una letra
			let posAscii = posText - 65 + offset % 26 + 65;
			listo = listo + String.fromCharCode(posAscii); // en esta funcion se da la letra segun la posc. en ascii
		}//devuelve el texto codificado
		return listo; 
	},
// desplazamiento hacia atras
	decode: (ingresoDe, offset) => {

		let listo2 = "";

		for (let i = 0; i < ingresoDe.length; i++) { //recorre letras
			let posText2 = ingresoDe.charCodeAt(i);//se para guarda la posc. de la letra en ascii
			let posAscii2 = posText2 - 65 - offset % 26 + 65;
			listo2 = listo2 + String.fromCharCode(posAscii2); // en esta funcion se da la letra segun la posc. en ascii 
		}
		return listo2;
	}

}

// export default cipher