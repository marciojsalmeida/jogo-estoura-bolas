var totalBolas = 0;
var pontos = 0;


function addBola(){

	var escolha = Math.floor(Math.random() * 100);

	if(escolha <= 2){
		geraBola('bola_gold', 100);
	} else if(escolha > 2 && escolha <= 12){
		geraBola('bola_vermelha', 50);
		
	} else if(escolha > 12 && escolha < 40){
		geraBola('bola_verde', 25);
	} else {
		geraBola('bola_preta', 10);
	}


}
function geraBola(corBola, valor){
	var bola = document.createElement('div');

	bola.setAttribute('class', corBola + ' bolinha');
	bola.innerHTML =valor;

	var p1 = Math.floor(Math.random() * 750);
	var p2 = Math.floor(Math.random() * 450);

	bola.setAttribute('style', 'left:'+p1+'px;top:'+p2+'px;');
	bola.setAttribute('onclick', 'estourar(this);');
	var tela = document.querySelector("#tela");
	tela.appendChild(bola);
	totalBolas++;
	document.getElementById('total_bolas').innerHTML = totalBolas;
}

function estourar(elemento){
	var valor = parseInt( elemento.innerHTML );
	var qualBola = elemento.getAttribute('class');
	if(qualBola == 'bola_gold bolinha'){

		var todasBolas = document.getElementsByClassName('bolinha');
		var contador;
		for(contador = 0; todasBolas.length; contador++){
			
			tela.removeChild(todasBolas[contador]);
		}	
		


		totalBolas--;
		document.getElementById('total_bolas').innerHTML = totalBolas;
		pontos += valor;
		document.getElementById('placar').innerHTML = pontos;
	} else {
		tela.removeChild(elemento);
		totalBolas--;
		document.getElementById('total_bolas').innerHTML = totalBolas;
		pontos += valor;
		document.getElementById('placar').innerHTML = pontos;
	}

}


function iniciar(){
	setInterval(addBola, 1000);
}