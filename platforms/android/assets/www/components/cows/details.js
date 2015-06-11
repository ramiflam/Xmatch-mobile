xmatchApp.controller('details', ['$scope', '$state', '$rootScope', '$stateParams', function ($scope, $state, $rootScope, $stateParams) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'GENERAL INFOTMATION', showSearchAndFiter: false });
    $scope.$state = $state;

    $scope.cowId = $stateParams.Id;
} ]);