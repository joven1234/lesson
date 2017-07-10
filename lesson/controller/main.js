app.controller("footerCtrl", function($http){
    var ctrl = this;
    var req = {
        url: "server/grades.php",
        method: "get"
    };

    $http(req).then(function(response){
        ctrl.data = response.data;
        console.log(response);
    });
});