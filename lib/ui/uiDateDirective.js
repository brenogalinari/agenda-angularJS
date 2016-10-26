angular.module('ui').directive('uiDate', function ($filter) {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (value) {
				value = value.replace(/[^0-9]+/g, "");
				if(value.length > 2){
					value = value.substring(0,2) + '/' + value.substring(2);
				}
				if (value.length > 5) {
					value = value.substring(0, 5) + '/' + value.substring(5, 9);
				}
				return value;
			};

			element.bind('keyup', function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			ctrl.$parsers.push(function (value) {
				if(value.length === 10) {
					var dateArray = value.split('/');
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
				}
			});

			ctrl.$formatters.push(function (value) {
				return $filter('date')(value, 'dd/MM/yyyy');
			});
		}

	};
});