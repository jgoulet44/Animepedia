app.controller("AnimeController", ["LoginService","$stateParams", "AnimeService", function(LoginService, StateParams, AnimeService) {
    
    var id =  StateParams.id;
    var that = this;
    this.anime = {};
    
    this.getAnime = function() {
        AnimeService.getAnime({ id: id }, onGetAnime)
    }
    
    var onGetAnime = function(resultat) {
        that.anime = resultat;
    }
    
}])