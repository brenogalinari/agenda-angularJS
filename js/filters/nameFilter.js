angular.module('listaTelefonica').filter('name',function () {
	return function (input) {
		var listaNome = input.split(' ');
		var listaFormatada = listaNome.map(function (nome) {
			var regexp = /^da|de/;
			if(regexp.test(nome)){
				return nome.toLowerCase();
			}
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaFormatada.join(' ');
	};
});