var app = angular.module("animepedia", ["ui.router", "ui.bootstrap"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("searchAnime", {
        url: "/search", templateUrl: "searchAnime.html", controller: "SearchAnimeController", controllerAs: "searchAnimeController"
    }).state("test", {
        url: "/test", templateUrl: "test.html", controller: "TestController", controllerAs: "testController"
    });
    $urlRouterProvider.otherwise("/search");
});