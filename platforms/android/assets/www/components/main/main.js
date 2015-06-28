xmatchApp.controller('main', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'THE MATCHING PROGRAM' });

    $scope.enterBulls = function () {
        $state.transitionTo('bulls');
    }
    $scope.enterCows = function () {
        $state.transitionTo('cows');
    }
    $scope.enterSettings = function () {
        $state.transitionTo('geneticPlan');
    }
    $scope.enterDaily = function () {
        $state.transitionTo('inseminationList');
    }
    $scope.enterTank = function () {
        $state.transitionTo('tank');
    }
} ]);