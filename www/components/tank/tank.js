xmatchApp.controller('tank', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'STOCK MANAGEMENT' });
} ]);
 