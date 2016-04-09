app.factory("AnimeService",["$resource",function($resource){
        return $resource(null, null, {
         'search' : {
          method : 'GET', url:'http://anilist.co/api/anime/search/:query', isArray:true
         }
        });
    }]
);