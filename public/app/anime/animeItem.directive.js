app.directive("animeItem", function() {
    return {
        restrict : "EA",
        scope : {
            anime : "="
        },
        templateUrl : "app/anime/animeItem.html"
    }
});
 