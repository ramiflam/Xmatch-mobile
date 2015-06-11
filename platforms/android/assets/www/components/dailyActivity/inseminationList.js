xmatchApp.controller('inseminationList', ['$scope', '$state', '$rootScope', '$compile', '$timeout', '$stateParams', '$interval', function ($scope, $state, $rootScope, $compile, $timeout, $stateParams, $interval) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'CREATE INSEMINATION LIST', showSearchAndFiter: false });
    $scope.$state = $state;
    $scope.cows = [{ num: 1011, active: 'YES', bulls: ["Aspland"] ,name: "Hulda"}, { num: 1012, active: 'YES', bulls: ["Mortron", "Ritten"],name: "Karley"  }, { num: 1013, active: 'NO', bulls: ["Listed", "Ike"]  ,name: "Dell"}, { num: 1014, active: 'NO', bulls: ["Halak"],name: "Consuela" }, { num: 1015, active: 'YES', bulls: ["Brooks", "Manifold", "Lowtide"],name: "Carmen" }, { num: 1016, active: 'YES', bulls: ["Aspland", "Halak"],name: "Haleigh" }, { num: 1017, active: 'YES', bulls: ["Mortron"],name: "Kalina" }, { num: 1018, active: 'NO', bulls: ["Ritten"],name: "Genevre"}, { num: 1019, active: 'YES', bulls: ["Ritten", "Ike", "Brooks", "Lowtide"],name: "Beth" }];
    $scope.erase = function (e) {
        child = e.target.parentElement;
        var parent = document.getElementById("tag-wrapper-cows");
        parent.removeChild(child);
        $scope.counter = $scope.counter - 1;
    }
    //$scope.cows = [{ num: 4580, active: 'YES' }, { num: 4581, active: 'YES' }, { num: 4582, active: 'NO' }, { num: 4583, active: 'NO' }, { num: 4584, active: 'YES' }, { num: 4585, active: 'YES' }, { num: 4586, active: 'YES' }, { num: 4587, active: 'NO' }, { num: 4588, active: 'YES'}];
    $scope.bulls = ["Aspland", "Mortron", "Ritten", "Listed", "Ike", "Halak", "Brooks", "Manifold", "Lowtide"];
    if ($stateParams.chosenCows) {
        $scope.chosenCows = JSON.parse($stateParams.chosenCows);
        for (i = 0; i < $scope.chosenCows.length; i++) {
            $scope.chosenCows[i]["bulls"] = [];
            $scope.bulls.sort( function() { return 0.5 - Math.random()});
            $scope.chosenCows[i]["bulls"].push($scope.bulls[0]);
            $scope.chosenCows[i]["bulls"].push($scope.bulls[1]);
            $scope.chosenCows[i]["bulls"].push($scope.bulls[2]);
        }
    } else {
        $scope.chosenCows = $scope.cows;
    }
    $scope.$on('clear', function (event, args) {
        //window.location.reload();
        $scope.chosenCows = $scope.cows;
    });
    $interval(function () {
        if ((document.getElementById("txtcownum").value.indexOf(' ')) != -1) {
            obj = document.getElementById("txtcownum");
            textToSend = obj.value;

            if (obj.value == '') {
                return;
            }
            obj.value = "";
            var tag = document.createElement("div");
            var x = document.createElement("div");
            var node = document.createTextNode(textToSend);
            tag.appendChild(node);
            var element = document.getElementById("tag-wrapper-cows");
            tag.setAttribute("class", "inner-tag-cows");
            //x.setAttribute("class", "exit-inner-tag");
            //x.setAttribute("onclick", "erase(this)");
            var close = document.createElement("label");
            close.setAttribute("class", "close");
            close.setAttribute("data-ng-click", "erase($event)");
            close.innerHTML = 'X';
            closeBtn = $compile(close)($scope);
            //x.appendChild(close);
            tag.appendChild(close);
            element.appendChild(tag);
            $scope.counter = $scope.counter + 1;
        }
    }, 1000);
    $scope.searchKeyPress = function (e) {
        e = e || window.event;
        if (e.keyCode == 32) {
            obj = document.getElementById("txtcownum");
            textToSend = obj.value;

            if (obj.value == '') {
                return;
            }
            obj.value = "";
            var tag = document.createElement("div");
            var x = document.createElement("div");
            var node = document.createTextNode(textToSend);
            tag.appendChild(node);
            var element = document.getElementById("tag-wrapper-cows");
            tag.setAttribute("class", "inner-tag-cows");
            //x.setAttribute("class", "exit-inner-tag");
            //x.setAttribute("onclick", "erase(this)");
            var close = document.createElement("label");
            close.setAttribute("class", "close");
            close.setAttribute("data-ng-click", "erase($event)");
            close.innerHTML = 'X';
            closeBtn = $compile(close)($scope);
            //x.appendChild(close);
            tag.appendChild(close);
            element.appendChild(tag);
            $scope.counter = $scope.counter + 1;
            $timeout(function () {
                obj.value = '';
            }, 0);
        }
    }
    $scope.createInseminationList = function (cows) {
        $timeout(function () {
            $scope.chosenCows = [];
            $scope.chosenCowsTags = document.getElementsByClassName("inner-tag-cows");
            for (i = 0; i < $scope.chosenCowsTags.length; i++) {
                $scope.chosenCows.push({ num: $scope.chosenCowsTags[i].innerText.substr(0, $scope.chosenCowsTags[i].innerText.indexOf('X')) });
            }
            document.getElementById("tag-wrapper-cows").innerHTML = '';
            document.getElementById("txtcownum").value = "";
        }, 0);

    };
    $scope.$on('clear', function (event, args) {
        $timeout(function () {
            $scope.chosenCows = $scope.cows;
        }, 0);
    });
} ]);