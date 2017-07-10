var app = angular.module("lessonApp", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "view/main.html"
        })
        .when("/view/grades/pre-school", {
            templateUrl : "view/grades/pre-school.html"
        })
        .when("/view/grades/early-elementary", {
            templateUrl : "view/grades/early-elementary.html"
        })
        .when("/view/grades/late-elementary", {
            templateUrl : "view/grades/late-elementary.html"
        })
        .when("/view/grades/middle-school", {
            templateUrl : "view/grades/middle-school.html"
        })
        .when("/view/grades/high-school", {
            templateUrl : "view/grades/high-school.html"
        })
        .when("/view/resources", {
            templateUrl : "view/resources.html"
        })
        .when("/view/resource/id/:id", {
            templateUrl : "view/resource.html"
        })
        .when("/view/user/register", {
            templateUrl : "view/user/register.html"
        })
        .when("/view/standards", {
            templateUrl: "view/standards.html"
        })
        .when("/view/professional-development", {
            templateUrl: "view/professional-development.html"
        })
        .when("/view/partners", {
            templateUrl: "view/partners.html"
        })
        .when("/view/about-us", {
            templateUrl: "view/about-us.html"
        });
});