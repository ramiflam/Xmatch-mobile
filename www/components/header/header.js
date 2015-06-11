xmatchApp.controller('headerCtrl', ['$rootScope', '$scope', '$state', '$timeout', function ($rootScope, $scope, $state, $timeout) {
    $scope.$state = $state;
    $scope.dailyClicked = false;
    $scope.bullsClicked = false;
    $scope.cowsClicked = false;
    $scope.settingsClicked = false;
    $scope.searchClicked = false;
    $scope.searchIconClicked = false;
    $scope.filterIconClicked = false;
    $scope.overed = 1;
    $scope.$on('stateChange', function (event, args) {
        $scope.$state = $state;
        $timeout(function () {
            $scope.subHeaderText = args.subHeaderText;
            $scope.showSearchAndFiter = args.showSearchAndFiter;
            $scope.isOpenSideBar = false;
            $('#navbar-btn').removeClass('margin-left');
            $('.subtitle').removeClass('margin-left');
            $('#main-view').removeClass('margin-left');
            $('.header-image').removeClass('margin-left');
            $('.footer').removeClass('margin-left');
        }, 0);

    });

    $scope.$on('userLoged', function (event, args) {
        $scope.username = args.username;
    });

    //$scope.$on('pageDestroy', function (event, args) {
    //    $timeout(function () {
    //        $scope.isOpenSideBar = false;
    //        $('#navbar-btn').removeClass('margin-left');
    //        $('.subtitle').removeClass('margin-left');
    //        $('#main-view').removeClass('margin-left');
    //        $('.header-image').removeClass('margin-left');
    //    }, 0);

    //});

    if ($scope.$state == 'bulls') {
        $scope.bullsPage = true;
    }
    $scope.find = function () {
        $rootScope.$broadcast('findClicked', { search: $scope.search });
    }
    $scope.filter = function (chosen) {
        $rootScope.$broadcast('filterClicked', { choose: chosen });
    }
    $scope.openSideBar = function () {
        $timeout(function () {
            $scope.isOpenSideBar = !$scope.isOpenSideBar;
            $scope.searchIconClicked = false;
            $scope.filterIconClicked = false;
            $scope.overed = 0;
            if ($scope.isOpenSideBar) {
                $('#navbar-btn').addClass('margin-left');
                $('.subtitle').addClass('margin-left');
                $('#main-view').addClass('margin-left');
                $('.header-image').addClass('margin-left');
                $('.footer').addClass('margin-left');
            } else {
                $('#navbar-btn').removeClass('margin-left');
                $('.subtitle').removeClass('margin-left');
                $('#main-view').removeClass('margin-left');
                $('.header-image').removeClass('margin-left');
                $('.footer').removeClass('margin-left');
            }
        }, 0);
    }
    $scope.returnToMain = function () {
        $state.transitionTo('main');
    }
    $(document).mouseup(function (e) {
        $timeout(function () {
            if (!angular.equals(document.getElementById('filter'), e.target)) {
                $scope.filterIconClicked = false;
            }
        }, 0);
    });
} ]);




