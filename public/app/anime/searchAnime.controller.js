app.controller("SearchAnimeController", ["LoginService", "AnimeService", function(LoginService, AnimeService) {

    this.auth = null;
    this.query = "naruto";
    this.sortProperty = null;
    this.animes = [];
    var that = this;

    this.login = function() {
        LoginService.login({
            grant_type: "client_credentials",
            client_id: "rensshin-ma2el",
            client_secret: "CV6NRqh0Fzsr5ARUhVKb3xywMMGg4d"
        }, onLogin);
    };

    var onLogin = function(resultat) {
        that.auth = resultat;
    }

    this.search = function() {
        AnimeService.search({ query: that.query, access_token: that.auth.access_token }, onSearch);
    }

    var onSearch = function(resultat) {
        that.animes = resultat;
    }

}]
);