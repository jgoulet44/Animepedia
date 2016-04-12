app.controller("AnimeController", ["LoginService","$stateParams", "AnimeService", function(LoginService, StateParams, AnimeService) {
    
    var id =  StateParams.id;
    var that = this;
    this.auth = null;
    this.anime = {};
    
    this.login = function() {
        LoginService.login({
            grant_type: "client_credentials",
            client_id: "rensshin-ma2el",
            client_secret: "CV6NRqh0Fzsr5ARUhVKb3xywMMGg4d"
        }, onLogin);
    };

    var onLogin = function(resultat) {
        that.auth = resultat;
        that.getAnime();
    }

    this.getAnime = function() {
        AnimeService.getAnime({ id: id, access_token: that.auth.access_token }, onGetAnime)
    }
    
    var onGetAnime = function(resultat) {
        that.anime = resultat;
        console.log(that.anime);
    }
    
    this.login();
}])