xmatchApp.controller('footer', ['$rootScope', '$scope', '$state', '$timeout', function ($rootScope, $scope, $state, $timeout) {
    $scope.$state = $state;
    $scope.showOptions = false;
    $scope.match = function () {
        $rootScope.$broadcast('match', {});
    }
    $scope.clear = function () {
        $rootScope.$broadcast('clear', {});
    }
    $scope.showOptions = false;
    $scope.$on('stateChange', function (event, args) {
        $scope.showOptions = false;
    });
    $(document).mouseup(function (e) {
        $timeout(function () {
            if (!angular.equals(document.getElementById('send'), e.target)) {
                $scope.showOptions = false;
            }
        }, 0);
    });
    //$scope.sendEmail = function(){
    //    window.open('mailto:mshira@cambium.co.il');
    //}
} ]);