var app = angular.module("animepedia", ["ui.router", "ui.bootstrap", "ngResource", "ngSanitize"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("searchAnime", {
        url: "/search", templateUrl: "app/anime/searchAnime.html", controller: "SearchAnimeController", controllerAs: "searchAnimeController"
    }).state("test", {
        url: "/test", templateUrl: "app/tests/test.html", controller: "TestController", controllerAs: "testController"
    }).state("anime", {
        url: "/anime/:id", templateUrl: "app/anime/anime.html", controller: "AnimeController", controllerAs: "animeController"
    });
    $urlRouterProvider.otherwise("/search");
});

app.run(["LoginService", "TokenService", "$timeout", function(loginService, tokenService, $timeout) {
    const login = function(){
        loginService.login({
            grant_type: "client_credentials",
            client_id: "rensshin-ma2el",
            client_secret: "CV6NRqh0Fzsr5ARUhVKb3xywMMGg4d"
        }, function(data){
            tokenService.set(data);
        });
    }
    $timeout(login,60000);
    login();
}]);