var myApp = angular.module("myApp", ['ui.router']);

myApp.controller('myCtrl', function($http, $scope, $state){
    
    $http.get('dir_listing.json').then(function(data){
                
        $scope.files = data.data;
    });            
    
    $scope.open_file = function(id){
        //if (id == "1") {}
        //if (id == "2") {}
        //if (id == "3") {}
        //if (id == "4") {}
        if (id == "5") {
            $http.get("projects_content_listings.json").then(function(resp){
                $scope.is5 = true;
                $scope.file_names = resp.data
            })
        }
    }
    
    $scope.open_content = function(id){
        $state.go('content');
        $http.get('file.json').then(function(response){
            $scope.filaFinalName = response;
        })
    }
    
})

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/files');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('files', {
            url: '/files',
            templateUrl: 'main.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('content', {
            url: '/content',
            templateUrl: 'interview.html'
            // we'll get to this in a bit       
        });

});