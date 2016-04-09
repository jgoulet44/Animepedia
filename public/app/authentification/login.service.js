app.factory("LoginService",["$resource",function($resource){
        return $resource(null, null, {
         'login' : {
          method : 'POST', url:'http://anilist.co/api/auth/access_token'
         }
        });
    }]
);