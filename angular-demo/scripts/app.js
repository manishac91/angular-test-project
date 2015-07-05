/**
 * 
 */

var TodoApp = angular.module("TodoApp", []);

TodoApp.run(function($rootScope){
	$rootScope.tasks = {};
})

TodoApp.mainController = function($scope,$rootScope)
{
	console.log("Inside main controller");
	
	$scope.addTask = function(text)
	{
		console.log(text+" task added!!");
		if($rootScope.tasks.data == undefined) {
			$rootScope.tasks.data = [{
				id: 1,
	            title: text,
	            selected: false,
	            isEditable: false
			}];	
		} else {
			$rootScope.tasks.data.push({
            	id: $scope.tasks.data.length + 1,
            	title: text,
            	selected: false,
            	isEditable: false
        	});	
		}
	}
}


TodoApp.tasksController = function($scope, $rootScope)
{
	console.log($rootScope.tasks);
	//$scope.tasks = $rootScope.tasks;
	$scope.removeTask = function(index){
		console.log("Remove task");
		$rootScope.tasks.data.splice(index, 1);
	},

	$scope.editTask = function(task){
		if(task.selected){
			alert('Completed task cannot be edited');
			return;
		}
		task.isEditable = true;
	},

	$scope.saveTask = function(task){
		console.log(document.getElementById('input_val_'+task.id));
		console.log(task);
		task.isEditable = false;
	}
}

TodoApp.controller("mainController", TodoApp.mainController);
TodoApp.controller("tasksController", TodoApp.tasksController);