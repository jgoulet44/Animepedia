app.factory("AnimeService", ["$resource", "TokenService", function ($resource, tokenService) {
    var resource = $resource(null, { access_token: tokenService.get() }, {
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