xmatchApp.controller('bulls', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    if ($state.includes('bulls')) {
        $rootScope.$broadcast('stateChange', { subHeaderText: 'BULLS', showSearchAndFiter: true });
        $scope.bulls = [{ num: 1011, active: 'YES',name: "Aspland"}, { num: 1012, active: 'YES',name: "Mortron" }, { num: 1013, active: 'NO' ,name: "Ritten"}, { num: 1014, active: 'NO' ,name: "Listed"}, { num: 1015, active: 'YES' ,name: "Ike"}, { num: 1016, active: 'YES',name: "Halak" }, { num: 1017, active: 'YES' ,name: "Lowtide"}, { num: 1018, active: 'NO' ,name: "Manifold"}, { num: 1019, active: 'YES',name: "Brooks"}];
    }
    else {
        $rootScope.$broadcast('stateChange', { subHeaderText: 'UPDATE COWS', showSearchAndFiter: false });
        $scope.bulls = [{ num: 1011, active: 'YES',name: "Hulda"}, { num: 1012, active: 'YES',name: "Karley" }, { num: 1013, active: 'NO' ,name: "Dell"}, { num: 1014, active: 'NO' ,name: "Consuela"}, { num: 1015, active: 'YES' ,name: "Carmen"}, { num: 1016, active: 'YES',name: "Haleigh" }, { num: 1017, active: 'YES' ,name: "Kalina"}, { num: 1018, active: 'NO' ,name: "Genevre"}, { num: 1019, active: 'YES',name: "Beth"}];
    }

    $scope.bullsPage = true;
    $scope.showMoreDetails = false;
    
    $scope.enterInfo = function (id) {
        $state.transitionTo('details', { Id: id });
    }
    $scope.$on('findClicked', function (event, args) {
        $scope.searchText = args.search;
    });
    $scope.$on('filterClicked', function (event, args) {
        $scope.searchText = args.choose;
    });
    
    $scope.$on('match', function (event, args) {
        $scope.chosenCowsNodes = document.getElementsByName('bull-update1');
        $scope.chosenCows = [];

        for (i = 0; i < $scope.chosenCowsNodes.length; i++) {
            if ($scope.chosenCowsNodes[i].checked == true) {
                $scope.chosenCows.push({ num: document.getElementsByClassName("bull-id")[i].textContent.split('#')[1] });
            }

        }
        $state.transitionTo('inseminationList', { chosenCows: JSON.stringify($scope.chosenCows) });
    });
} ]);
 