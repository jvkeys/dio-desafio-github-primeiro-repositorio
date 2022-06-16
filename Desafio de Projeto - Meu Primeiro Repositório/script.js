function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var periodo = ''
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'  
		periodo = '. Bom dia!.'
    } else if (hora >=12 && hora < 18) {
        img.src = 'tarde.png'
		periodo = '. Boa tarde!'
    } else {
        img.src = 'noite.png'
		periodo = '. Boa noite!'
    }
	msg.innerHTML += periodo;
}