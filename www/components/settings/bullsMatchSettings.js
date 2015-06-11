xmatchApp.controller('bullsMatchSettings', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'GENERAL BULLS MATCHING SETTINGS', showSearchAndFiter: false });
    $scope.$state = $state;
    $scope.valBox11 = 0;
    $scope.valBox21 = 0;
    $scope.valBox41 = 0;
    $scope.Math = window.Math;
    $scope.total = 1891;
} ]);