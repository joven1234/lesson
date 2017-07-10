app.controller("registerCtrl", function($http, $location, $cookieStore){

    var ctrl = this;
    ctrl.isPasswordMatch = true;


    ctrl.formSubmit = function(isValid){
        if(isValid){

            if(ctrl.user.password != ctrl.user.confirmpassword){
                ctrl.isPasswordMatch = false;
            }else{
                ctrl.isPasswordMatch = true;
                checkEmailExistent();
            }
        }
    };


    ctrl.loginModal = function(){
        $("#comment-login-modal").modal();
    };

    function checkEmailExistent(){
        var req = {
            method: "post",
            url: "server/register.php",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: "email=" + ctrl.user.email + "&password=" + ctrl.user.password
        };

        $http(req).then(function(response){
            if(response.data){
                ctrl.isEmailExist = false;
                $location.path("/");
                $cookieStore.put("user", ctrl.user.firstname);
            }else{
                ctrl.isEmailExist = true;
            }
        });
    }

});