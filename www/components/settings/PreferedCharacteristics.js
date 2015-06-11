xmatchApp.controller('PreferedCharacteristics', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'PREFERED CHARACTERISTICS', showSearchAndFiter: false });
    $scope.$state = $state;
} ]);