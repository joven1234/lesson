app.controller("resourcesCtrl", function($location, $http){

    var ctrl = this;
    ctrl.data = null;
    var params = $location.search();
    var item = params.item;
    var grade = params.grade;
    var subject = params.subject;
    ctrl.subject = params.subject;


    var id;

    switch(grade){
        case "early childhood":
            ctrl.grade = "EARLY CHILDHOOD";
            id = 1;
            break;
        case "early elementary":
            ctrl.grade = "EARLY ELEMENTARY";
            id = 2;
            break;
        case "late elementary":
            ctrl.grade = "LATE ELEMENTARY";
            id= 3;
            break;
        case "middle school":
            ctrl.grade = "MIDDLE SCHOOL";
            id = 4;
            break;
        case "high school":
            ctrl.grade = "HIGH SCHOOL";
            id = 5;
            break;
    }

    var paramToPass;

    if(item != null){
        paramToPass = {
            "item" : item,
            "id" : id
        }
    }else{
        paramToPass = {
            "subject" : subject,
            "id" : id
        }
    }

    var req = {
        url: "server/resources.php",
        method: "get",
        params: paramToPass
    };


    $http(req).then(function(response){
        ctrl.data = response.data;
        console.log(response);
    });

});