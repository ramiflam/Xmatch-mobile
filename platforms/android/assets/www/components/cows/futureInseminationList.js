xmatchApp.controller('futureInseminationList', ['$scope', '$state', '$rootScope', '$compile','$interval', function ($scope, $state, $rootScope, $compile,$interval) {
    $rootScope.$broadcast('stateChange', { subHeaderText: 'CREATE FUTURE INSEMINATION LIST', showSearchAndFiter: false });
    $scope.$state = $state;
    $scope.counter = 0;

    $scope.erase = function (e) {
        child = e.target.parentElement;
        var parent = document.getElementById("tag-wrapper-cows");
        parent.removeChild(child);
        $scope.counter = $scope.counter - 1;
    }
    $interval(function(){
      if( (document.getElementById("txtcownum").value.indexOf(' '))!= -1){
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
        if ( e.keyCode == 32) {
            var data = {
                func: 'Check'
            };
            //for(i=0;i<$('.inner-tag-cows').length; i++){
            //data[i] = $('.inner-tag-cows')[i].textContent
            //}
            data[0] = document.getElementById("txtcownum").value;

            //$.ajax({
            //    type: "POST",
            //    dataType: "json",
            //    url: "ajax.php", //Relative or absolute path to response.php file
            //    data: data,
            //    success: function (data) {
            //        if (data == 1) {
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
            //$timeout(function () {
            //    obj.value = '';
            //}, 0);
        }
    }
    $scope.validate = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }
    $scope.creat = function () {
        $scope.chosenCows = [];
        $scope.chosenCowsTags = document.getElementsByClassName("inner-tag-cows");
        for (i = 0; i < $scope.chosenCowsTags.length; i++) {
            $scope.chosenCows.push({ num: $scope.chosenCowsTags[i].innerText.substr(0, $scope.chosenCowsTags[i].innerText.indexOf('X')) });
        }
        document.getElementById("tag-wrapper-cows").innerHTML = '';
        document.getElementById("txtcownum").value = "";
        $state.transitionTo('inseminationList', { chosenCows: JSON.stringify($scope.chosenCows) });
    }
    //$scope.$on("$destroy", function handleDestroyEvent() {
    //    $rootScope.$broadcast('pageDestroy');
    //}
    //);
} ]);