angular.module("listaTelefonica").config(function ($routeProvider) {

	var operadoras = function ($http) {
		return $http.get('http://www.localhost:3000/operadoras');
	};

	var contatos = function (contatosAPI) {
		return contatosAPI.getContatos();
	};		

    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: 'listaTelefonicaCtrl',
        resolve: {
        	operadoras: operadoras,
        	contatos: contatos
        }
    });

    $routeProvider.when("/novoContato", {
    	templateUrl: 'view/novoContato.html',
    	controller: 'novoContatoCtrl',
    	resolve: {
    		operadoras: operadoras
    	}
    });

    $routeProvider.otherwise('/contatos');
});