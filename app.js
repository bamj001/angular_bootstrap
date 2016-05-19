var app = angular.module("myApp",[]);
app.factory('showTable', function()
{
   return {showTable: false}; 
});
var controller= app.controller('myController',function($scope)
{
    $scope.users= 
    {
        student:[
            {name:'Ahmad',number:'1'},
            {name:'Bob',number:'2'},
            {name:'Christine',number:'3'}
        ]
    };
});

var navController = app.controller('navController',function($scope)
{
    $scope.showTable=false;
    function toggleTable($scope)
    {
        $scope.showTable = !$scope.showTable;
    }
});