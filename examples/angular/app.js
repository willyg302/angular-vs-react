angular.module('App', [])
       .controller('Example', ['$scope', function($scope) {
	$scope.greetings = ['Hello', 'So long'];
	$scope.greeting = $scope.greetings[0];
	$scope.subject = 'world!';
}]);
