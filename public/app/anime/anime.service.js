app.factory("AnimeService", ["$resource", "TokenService", function ($resource, tokenService) {
    var resource = $resource(null, null, {
        'search': {
            method: 'GET', url: 'http://anilist.co/api/anime/search/:query', isArray: true
        },
        'getAnime': {
            method: 'GET', url: 'http://anilist.co/api/anime/:id'
        }
    });

    resource = tokenService.wrapActions(resource, ["query", "update", "save", "search", "getAnime"]);
    return resource;
}]
);