GuideLines para Mail Marketing




Bd utilizado: 
	
	MongoDB;




A aplicação é desenvolvido como sendo uma api, utilizando arquitetura REST:
	https://www.w3.org/2001/sw/wiki/REST

	
	sobre REST:
	"A Representational State Transfer (REST), em português Transferência de Estado Representacional, 
é uma abstração da arquitetura da World Wide Web (Web), um estilo arquitetural que consiste de um conjunto 
coordenado de restrições arquiteturais aplicadas a componentes, conectores e elementos de dados dentro de
 um sistema de hipermídia distribuído. O REST ignora os detalhes da implementação de componente e a sintaxe 
de protocolo com o objetivo de focar nos papéis dos componentes, nas restrições sobre sua interação com
 outros componentes e na sua interpretação de elementos de dados significantes."

Utilização da api:
	Requisições para listar informações, devem ser realizadas utilizando get.
	Requisições para enviar dados para a api, requisitando que uma ação seja realizada, devem ser realizadas utilizando post,
	enviando assim os dados necessários para a operação ser realizada.


Instruções para o desenvolvimento.
	No desenvolvimento deve ser usado a linguagem javascript, com o NodeJS e o mongoDB
	Utilizar o PostMan para realizar os testes sobre a api.
	O espaçamento usado usado nas linhas é tab.
	Recomenda-se a utilização do Visual Studio Code, Atom ou o sublime, 
		pelos recursos que facilitam o desenvolvimento na linguagem.
	O projeto é versionado utilizando o GIT.
	sequência de ações para trabalhar com o repositório:
	https://image.slidesharecdn.com/gameplanapp-simple-daily-git-workflow1-120403121618-phpapp01/95/simple-daily-workflow-with-git-1-728.jpg?cb=1333455417
	

Preparo do Ambiente de desenvolvimento:
	1º clonar o repositório https://github.com/JosielFaleiros/m-m.git
	2º dentro da pasta do projeto, executar o comando por CLI:
	    npm install  
	(irá instalar as dependências para o projeto)

Para adição de novos filtros:
	

Para utilização diferente de filtros existentes:
	1º localizar o controller responsável por tratar as requisições para este endpoint, e alterar os métodos conforme a necessidade.


Para adição de novas funcionalidades:
	Quando criando uma nova funcionalidade, se esta precisar de um novo endpoint, 
	1º criar o arquivo dentro da pasta routes, no seguinte padrão para nome do arquivo: 
	/projeto/api/routes/'funcionalidade'Routes.js onde 'funcionalidade' é o nome do novo serviço para atender a funcionalidade.
	Caso a nova funcionalidade tenha como objetivo envio de dados para

	2º criar o controler dentro da pasta controller, utilizando o seguinte padrão para nome do arquivo:
	/projeto/api/controller/'funcionalidade'Controller.js, onde 'funcionalidade' é o nome do novo serviço para atender a funcionalidade.
	dentro do controller, deve ser escrito os métodos que serão chamados pelo arquivo de rotas criado.'		

	3º Se necessário criar o modelo na pasta model
