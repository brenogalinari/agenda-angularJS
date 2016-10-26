angular.module('listaTelefonica')
	.controller('listaTelefonicaCtrl', function ($scope, $http, contatosAPI, operadoras, contatos) {
		$scope.appName = 'Lista Telefonica';

		$scope.contatos = contatos.data;
		$scope.operadoras = operadoras.data;

		$scope.contato = {
			data: new Date().getTime()
		};

		$scope.apagarContatos = function (contatos) {
			$scope.contatos = contatos.filter(function (contato) {
				if(!contato.selecionado){
					return contato;
				}
			});

		};
		$scope.isContatoSelecionado = function (contatos) {
			return contatos.some(function (contato) {
				return contato.selecionado;
			});
		};
		$scope.ordenarPor = function (criterio) {
			$scope.criterio = criterio;
			$scope.direcao = !$scope.direcao;
		};

	});