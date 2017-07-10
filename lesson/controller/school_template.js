app.controller("schoolCtrl", function($http, $location){
    var ctrl = this;
    ctrl.infoText = "";
    var id;
    if($location.path().indexOf("pre-school") != -1){
        ctrl.title = "PRESCHOOL SUBJECTS";
        ctrl.infoText = "From preschool activities, lessons plans, and games, we have your " +
            "PreK students covered with free resources in all subject areas.";
        id = 1;
    }else if($location.path().indexOf("early-elementary") != -1){
        ctrl.title = "Elementary (Grades K-2) Subjects";
        id = 2;
    }else if($location.path().indexOf("late-elementary") != -1){
        ctrl.title = "Elementary (Grades 3-5) Subjects";
        id = 3;
    }else if($location.path().indexOf("middle-school") != -1){
        ctrl.title = "Middle School Subjects";
        id = 4;
    }else{
        ctrl.title = "High School Subjects";
        ctrl.infoText = "Find free high quality high school lessons plans, project based learning ideas, " +
            "and teacher resources in all subject areas.";
        id = 5;
    }

    var req = {
        method: "get",
        url: "server/subject.php",
        params: {
            id: id
        }
    };

    $http(req).then(function(response){
        ctrl.data = response.data;
        for(var gradeName in ctrl.data){
            for(var comp in ctrl.data[gradeName]){
                ctrl.data[gradeName][comp].push(comp.replace(/\s/g, "_"));
            }
        }
    });
});

