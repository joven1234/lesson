app.controller("navbarCtrl", function($cookieStore, $window){
    var ctrl = this;
    ctrl.isLoggedIn = false;
    if($cookieStore.get("user")){
        ctrl.isLoggedIn = true;
        ctrl.user = $cookieStore.get("user");
    }

    ctrl.userLogout = function(){
        $cookieStore.remove("user");
        $window.location.reload();
    };


    ctrl.loginModal = function(){
        $("#comment-login-modal").modal();
    };

});