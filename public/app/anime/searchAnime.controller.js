app.controller("SearchAnimeController", ["LoginService", "AnimeService", function(LoginService, AnimeService) {

    this.query = "naruto";
    this.sortProperty = null;
    this.animes = [];
    var that = this;

    this.search = function() {
        AnimeService.search({ query: that.query}, onSearch);
    }

    var onSearch = function(resultat) {
        that.animes = resultat;
    }

    this.sortByTitle = function() {
        that.animes = that.animes.sort(function(animeA,animeB) {
           return animeA.title_romaji.localeCompare(animeB.title_romaji);
        })
    }
    
    this.sortByScore = function() {
        that.animes = that.animes.sort(function(animeB,animeA) {
           return  parseFloat(animeA.average_score) - (parseFloat(animeB.average_score));
        })
    }
}]
);