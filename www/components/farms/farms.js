xmatchApp.controller('farms', ['$rootScope','$scope','$state', function ($rootScope,$scope,$state) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'CHOOSE FARM' });
    $scope.farmClicked = function (farmName) {
        
        $rootScope.$broadcast('farmChosen', { farmName: farmName });
        $state.transitionTo('main');
    }
} ]);
 