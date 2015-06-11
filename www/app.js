var xmatchApp = angular.module('xmatchApp', ['ui.router']);

/**** UI Router ****/
xmatchApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
		.state("login", {
		    url: "/login",
		    views: {
		        "main": {
		            templateUrl: "./components/login/login.html",
		            controller: "login"
		        }
		    }
		})
        .state("main", {
            url: "/main",
            views: {
                "main": {
                    templateUrl: "./components/main/main.html",
                    controller: "main"
                }
            }
        })
        .state("bulls", {
            url: "/bulls",
            views: {
                "main": {
                    templateUrl: "./components/bulls/bulls.html",
                    controller: "bulls"
                }
            }
        })
        .state("cows", {
            url: "/cows",
            views: {
                "main": {
                    templateUrl: "./components/bulls/bulls.html",
                    controller: "bulls"
                }
            }
        })
        .state("farms", {
            url: "/farms",
            views: {
                "main": {
                    templateUrl: "./components/farms/farms.html",
                    controller: "farms"
                }
            }
        })
        .state("geneticPlan", {
            url: "/geneticPlan",
            views: {
                "main": {
                    templateUrl: "./components/settings/geneticPlan.html",
                    controller: "geneticPlan"
                }
            }
        })
        .state("PreferedCharacteristics", {
            url: "/PreferedCharacteristics",
            views: {
                "main": {
                    templateUrl: "./components/settings/PreferedCharacteristics.html",
                    controller: "PreferedCharacteristics"
                }
            }
        })
        .state("bullsMatchSettings", {
            url: "/bullsMatchSettings",
            views: {
                "main": {
                    templateUrl: "./components/settings/bullsMatchSettings.html",
                    controller: "bullsMatchSettings"
                }
            }
        })
        .state("farmSettings", {
            url: "/farmSettings",
            views: {
                "main": {
                    templateUrl: "./components/settings/farmSettings.html",
                    controller: "farmSettings"
                }
            }
        })
        .state("inseminationList", {
            url: "/inseminationList:chosenCows",
            //params:['chosenCows'],
            views: {
                "main": {
                    templateUrl: "./components/dailyActivity/inseminationList.html",
                    controller: "inseminationList"
                }
            }
        })
        .state("futureInseminationList", {
            url: "/futureInseminationList",
            views: {
                "main": {
                    templateUrl: "./components/cows/futureInseminationList.html",
                    controller: "futureInseminationList"
                }
            }
        })
        .state("details", {
            url: "/details/:Id",
            views: {
                "main": {
                    templateUrl: "./components/cows/details.html",
                    controller: "details"
                }
            }
        });
    //.state("ManualImport", {
    //    url: "/ManualImport",
    //    views: {
    //        "main": {
    //            templateUrl: "./components/settings/ManualImport.html",
    //            controller: "ManualImport"
    //        }
    //    }
    //});
});

xmatchApp.directive('sidebar', ['$state', '$timeout', function ($state, $timeout) {
    return {
        restrict: 'E',
        templateUrl: './components/header/sidebar.html',
        link: function (scope, el, attrs) {
            scope.$on('userLoged', function (event, args) {
                scope.username = args.username;
            });
            scope.$on('farmChosen', function (event, args) {
                scope.farmName = args.farmName;
            });
            scope.moveTo = function (stat) {
                scope.openSideBar();
                switch (stat) {
                    case "bulls":
                        scope.$state.transitionTo('bulls');
                        break;
                    case "cows":
                        scope.$state.transitionTo('cows');
                        break;
                    case "geneticPlan":
                        scope.$state.transitionTo('geneticPlan');
                        break;
                    case "PreferedCharacteristics":
                        scope.$state.transitionTo('PreferedCharacteristics');
                        break;
                    case "bullsMatchSettings":
                        scope.$state.transitionTo('bullsMatchSettings');
                        break;
                    case "farmSettings":
                        scope.$state.transitionTo('farmSettings');
                        break;
                    case "inseminationList":
                        scope.$state.transitionTo('inseminationList');
                        break;
                    case "futureInseminationList":
                        scope.$state.transitionTo('futureInseminationList');
                        break;
                    default:
                        return;
                }
            }
        }
    }
} ]);

xmatchApp.filter('selectedCows', function() {
    return function(allCows, chosenCows) {
        return allCows.filter(function(cow) {

            for (var i=0;i < chosenCows.length;i++) {
                if (chosenCows[i].num == cow.num) {
                    return true;
                }
            }
            return false;

        });
    };
});