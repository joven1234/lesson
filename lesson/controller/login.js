app.controller("loginCtrl", function($http, $cookieStore, $window, $timeout, $location){
    var ctrl = this;

    ctrl.isInvalidAccount = false;

    ctrl.login = function(isValid){
        if(isValid){
            checkDatabaseAccount();
        }

    };


    ctrl.closeModal = function(onRegister){
        if(onRegister == null){
            $("#comment-login-modal").modal("hide");
        }else{
            $timeout(function(){
                $location.path("view/user/register");
            }, 500);

            $("#comment-login-modal").modal("hide");
        }
    };

    function checkDatabaseAccount(){
        var req = {
            method: "post",
            url: "server/login.php",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: "email=" + ctrl.user.email + "&password=" + ctrl.user.password
        };

        $http(req).then(function(response){
            console.log(response);
            if(response.data){
                $cookieStore.put("user", response.data);
                $window.location.reload();
            }else{
                ctrl.isInvalidAccount = true;
            }
        });
    }
});