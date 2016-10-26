angular.module('listaTelefonica').factory('contatosAPI', function ($http) {
	var _getContatos = function () {
		return $http.get('http://www.localhost:3000/contatos');
	};

	var _saveContato = function (contato) {
		return $http.post('http://www.localhost:3000/contatos', contato);
	}

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});