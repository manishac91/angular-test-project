/**
 * 
 */

var TodoApp = angular.module("TodoApp", []);

TodoApp.run(function($rootScope){
	$rootScope.tasks = [];
})

TodoApp.mainController = function($scope,$rootScope)
{
	console.log("Inside main controller");
	
	$scope.addTask = function(text)
	{
		console.log(text+" task added!!");
		$rootScope.tasks.push(text);
	}
}


TodoApp.tasksController = function($scope, $rootScope)
{

}

TodoApp.controller("mainController", TodoApp.mainController);
TodoApp.controller("tasksController", TodoApp.tasksController);