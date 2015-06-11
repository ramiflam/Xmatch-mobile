xmatchApp.controller('login', ['$scope', '$state','$rootScope', function ($scope, $state,$rootScope) {
    $scope.username = '';
    $scope.password = '';
    $scope.login = function () {
        $rootScope.$broadcast('userLoged', { username: $scope.username });
        $state.transitionTo('farms');
    }
} ]);
 