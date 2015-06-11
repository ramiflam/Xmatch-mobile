xmatchApp.controller('geneticPlan', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'ACTIVE GENETIC PLAN', showSearchAndFiter: false });
    $scope.chosen = '2+';
    $scope.$state = $state;
} ]);