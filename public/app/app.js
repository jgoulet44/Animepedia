var app = angular.module("animepedia", ["ui.router", "ui.bootstrap", "ngResource"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("searchAnime", {
        url: "/search", templateUrl: "app/anime/searchAnime.html", controller: "SearchAnimeController", controllerAs: "searchAnimeController"
    }).state("test", {
        url: "/test", templateUrl: "app/tests/test.html", controller: "TestController", controllerAs: "testController"
    });
    $urlRouterProvider.otherwise("/search");
});