app.filter("animeFilter",function(){
    return _.memoize( function(animes, sortProperty){
        if( sortProperty === "title"){
            return ( animes.sort(function(animeA,animeB){
                return animeA.title_romaji.localeCompare(animeB.title_romaji)
            }))
        }
        else if(sortProperty === "average_score"){
            return ( animes.sort(function(animeA,animeB){
                return parseInt(animeA.average_score) + parseInt(animeB.average_score)
            }))
        }
        else{
            return animes;
        }
    },function(animes, sortProperty){
        return sortProperty;
    })
})
