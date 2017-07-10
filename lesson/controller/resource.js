app.controller("resourceCtrl", function($window, $routeParams, $http, $cookieStore){

    var ctrl = this;
    var item_id = $routeParams.id;
    var req;

    ctrl.user = $cookieStore.get("user");

    ctrl.comment = "";


    ctrl.loginModal = function(){
        $("#comment-login-modal").modal();
    };


    ctrl.isYoutubeSource = function(source){
        ctrl.isVideoSource = source.indexOf("//www.youtube.com") != -1;
        return ctrl.isVideoSource;
    };

    ctrl.saveComment = function(isValid, item_id){
        if(isValid){
            req = {
                method: "post",
                url: "server/save-comment.php",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: "comment=" + ctrl.comment + "&item_id=" + item_id + "&email=" + $cookieStore.get("user").email
            };

            $http(req).then(function(){
                $window.location.reload();
            });
        }
    };

    req = {
        url: "server/resource.php",
        method: "get",
        params: {
            item_id: item_id
        }
    };

    $http(req).then(function(response){
        ctrl.data = response.data;
        console.log(ctrl.data);
    });

}).directive("comments", function(){
    return {
        restrict: "E",
        templateUrl: "component/comments.html"
    }
}).directive("reply", function(){
    return {
        scope: {},
        restrict: "E",
        template: "<div class='pull-right' id='reply'>REPLY</div>",
        link: function(scope, elem){
            elem.bind("click", function(event){
                angular.element(".reply-field").fadeOut(200);
                elem.siblings(".reply-field").fadeIn(200);
            });
        }
    }
});

app.filter("trusted", function($sce){
    return $sce.trustAsResourceUrl;
});

app.controller("replyCtrl", function($http, $window, $cookieStore){
    var ctrl = this;
    ctrl.saveReply = function(comment_id){

        if($cookieStore.get("user") == null){
            ctrl.isInvalidReply = true;
            ctrl.isNotLoggedIn = true;
        }else{
            ctrl.isNotLoggedIn = false;
            if(ctrl.reply == null){
                ctrl.isInvalidReply = true;
            }else{
                ctrl.isInvalidReply = false;
                var req = {
                    method: "post",
                    url: "server/reply.php",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: "comment_id=" + comment_id + "&reply=" + ctrl.reply + "&owner=" + $cookieStore.get("user").username
                };
                $http(req).then(function(){
                    $window.location.reload();
                });
            }
        }

    };

});

