tutoriais = ["Joe Jumper", "Zombie Waves", "Xadrez", "Database", "Campo Minado", "Jogo de Corrida"];

videos = ["XqMozzvr8-w", "-YF7SV_HhJE", "anJXfirDa0Y", "c5RHoN9vqLs", "BcOqpzXN-OU", "Fqv6YngIZbc"];

secoes = [
["Introdução", "Download do Compilador", "Começando a Escrever", "Conhecendo o Compilador", "Código em Linguagem C", "Arquivo Executável", "Tiny C Compiler & dos-like", "Modo Gráfico", "Desenhando o Obstáculo", "Fazendo o obstáculo se mover", "Desenhando o Joe", "Fazendo o Joe Pular", "Acabamento"],
["Introdução", "Compilador / I.D.E.", "Imagens do Jogo", "Iniciando o projeto", "Editando o Manifest", "Imagens no projeto", "Escrevendo Código", "O arquivo MainActivity", "extends View", "Usando onDraw e Canvas", "Colocando o Joe na tela", "Mudando a posição do Joe", "Colocando Zumbis na Tela", "Código Final"],
["Introdução", "Desenhando o Tabuleiro", "Desenhando as Peças", "Peça Mudando de Posição", "Uma lista de Jogadas"],
["Introdução", "Instalar o notepad++", "Instalar o Xampp", "Criar um arquivo html", "Xampp emula websever", "php / htdocs / localhost", "Tela de Cadastro", "Create table", "Comando insert", "Lista de Produtos", "Comando delete", "Update"],
["Introdução", "anWriter", "Código html", "O arquivo css", "O arquivo js", "getImmediateNeighbors", "placeMines & placeNums", "clickFlag & clickCell", "Teste", "App compilador", "código-base", "A pasta 'res'", "O arquivo manifest", "Compilando", "Arquivo código java"],
["Introdução", "Cenário", "Movimento", "Rotação do Carrinho", "Dirigibilidade", "Pista", "Fora da Pista", "Fases", "Rotation", "Adversário, Arquivo hta"]
];

window.addEventListener("hashchange", function() {
	if(location.hash[1] == 'l') {
		licao(parseInt(location.hash.substr(2)));
		return;
	}

	if(!licoes) licoes = document.getElementById('principal').innerHTML.split("<hr>");

	listalicoes();
});

function listalicoes() {
	lista = "<h2>" + tutoriais[idcurso] + "</h2>";
	lista += "<div id=listagem>";

	for(x = 0; x < secoes[idcurso].length; x++) {
		lista += "<div class=licao>";
		lista += " <li>" + secoes[idcurso][x] + "</li>";
		lista += " <button onclick=\"location.hash='#l" + x + "';\">acessar</button>";
		lista += "</div><br>\n";
	}

	htm = lista + "</div>";

	htm += "<iframe width=340 height=200 src='https://www.youtube.com/embed/" + videos[idcurso] + "' title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>";

	htm += "<h2>::..</h2>";
	htm += "<button onclick=\"location.href='../../index.htm';\">home</button><br><br>";

	document.getElementById('principal').innerHTML = "<div id=\"main\">" + htm + "</div>";
	document.getElementById('principal').style.margin = "0px";
	window.scrollTo(0, 0);
}

function licao(x) {
	htm = licoes[x].replace("</h2>", "</h2><div id=conteudo>") + "</div>";

	htm += "<button onclick=\"location.hash='#l" + (x + licoes.length-1) % licoes.length + "';\">&lt;&lt;</button>\n";
	htm += "<button onclick=\"location.href='../../index.htm';\">home</button>\n";
	htm += "<button onclick=\"location.hash='#c" + idcurso + "';\">lições</button>\n";
	htm += "<button onclick=\"location.hash='#l" + (x + 1) % licoes.length + "';\">&gt;&gt;</button><br>\n";

	htm += "<h2>::..</h2>";

	document.getElementById('principal').innerHTML = "<div id=\"main\">" + htm + "</div>";
	window.scrollTo(0, 0);
}

licoes = false;
idcurso = location.href.split("/")[location.href.split("/").length - 2];
location.hash = Math.random().toString().substr(2);
