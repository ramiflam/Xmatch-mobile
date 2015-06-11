xmatchApp.controller('farmSettings', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'GENERAL FARM SETTINGS', showSearchAndFiter: false });
    $scope.$state = $state;
    $scope.clicked1=true;
    $scope.clicked2=true;
    $scope.clicked3=true;
} ]);