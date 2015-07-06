xmatchApp.controller('bulls', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
    if ($state.includes('bulls')) {
        $rootScope.$broadcast('stateChange', { subHeaderText: 'BULLS', showSearchAndFiter: true });
        $scope.bulls = [{ num: 1011, active: 'YES', name: "Aspland", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 99, General_udder: 98, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1012, active: 'YES', name: "Mortron", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 99, General_udder: 98, Teats_location: 103, Udder_depth: 97,  General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1013, active: 'NO', name: "Ritten", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 105, General_udder: 95, Teats_location: 103, Udder_depth: 103, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1014, active: 'NO', name: "Listed", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size:  90, General_udder: 103, Teats_location: 103, Udder_depth: 111, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1015, active: 'YES', name: "Ike", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 99, General_udder: 98, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1016, active: 'YES', name: "Halak", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size:94, General_udder: 98, Teats_location: 103, Udder_depth: 92, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1017, active: 'YES', name: "Lowtide", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 87, General_udder: 79, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1018, active: 'NO', name: "Manifold", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 98, General_udder: 98, Teats_location: 103, Udder_depth: 90, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1019, active: 'YES', name: "Brooks", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 113, General_udder: 107, Teats_location: 103, Udder_depth: 91, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }];
    }
    else {
        $rootScope.$broadcast('stateChange', { subHeaderText: 'UPDATE COWS', showSearchAndFiter: false });
        $scope.bulls = [{ num: 1011, active: 'YES', name: "Hulda", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 99, General_udder: 98, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1012, active: 'YES', name: "Karley", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 99, General_udder: 98, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1013, active: 'NO', name: "Dell", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 105, General_udder: 95, Teats_location: 103, Udder_depth: 103, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1014, active: 'NO', name: "Consuela", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 90, General_udder: 103, Teats_location: 103, Udder_depth: 111, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1015, active: 'YES', name: "Carmen", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 94, General_udder: 98, Teats_location: 103, Udder_depth: 92, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1016, active: 'YES', name: "Haleigh", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 87, General_udder: 79, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1017, active: 'YES', name: "Kalina", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 98, General_udder: 98, Teats_location: 103, Udder_depth: 90, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1018, active: 'NO', name: "Genevre", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 113, General_udder: 107, Teats_location: 103, Udder_depth: 91, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }, { num: 1019, active: 'YES', name: "Beth", bull_no: 7631, CVM: 0, KG_ECM: 969, Actuall_inseminations: 0, Usage_order: 0, General_size: 99, General_udder: 113, Teats_location: 103, Udder_depth: 97, General_legs: 97, Pelvis_stucture: 100, Fat_percentage: 100, Protein_percentage: 100, MGS: 7060, PGS: 0, SCC: 100, sire: 7149, breed: 1, KG_milk: 114, Fertility: 97, Match_status: 1, Heifer_status: 0, From_insemination: 1, To_insemination: 99, Limited: 1, StrawColor: '#FFFFFF', StrawSize: 0, StrawType: 'Regular', Order_by_Fertility: 1, Planned_usage: 1
        }];
    }

    $scope.bullsPage = true;
    $scope.showMoreDetails = false;

    $scope.enterInfo = function (id) {
        $state.transitionTo('details', { Id: id });
    }
    $scope.widthCalc = function (value) {
        return (Math.abs(100-value)*17/10)+'px';
    }
    $scope.marginCalc = function (value) { 
        if(value<100){
            return (76-(Math.abs(100-value)*17/10))+'px';
        }  else {
            return '78px';
        }
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
 