	var app = angular.module('main', ['ui.router']);
	  app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.
	  state('/', {
	  url: '',
	  templateUrl: 'pages/home.php' 
	  })
	  .state('list', {
	  url: '',
	  templateUrl: 'pages/about.php' 
	  });
	}]);


    app.controller('postController', function($scope, $http, $state, uploadFile) {
		$scope.product = {};
		$scope.submitForm = function(){

		$scope.myFile = $scope.files[0];  
		var file = $scope.myFile;   
		var url = "api/upload.php";  
	
		uploadFile.uploadFiletoServer(file, url, $scope.product.name, $scope.product.category, $scope.product.price); 
		 
		}
		
		$scope.uploadedFile = function(element) {  
		var reader = new FileReader();  
		reader.onload = function(event) {  
		$scope.$apply(function($scope) {  
		$scope.files = element.files;  
		$scope.src = event.target.result   
		});  
		}  
		reader.readAsDataURL(element.files[0]);  
		}   
    });
    
    app.controller('productController',function($scope, $http){
		
		$http.post('api/productList.php').success(function(result){  
			$scope.list=result;
        });
	
	
	})
    
    
    
        app.service('uploadFile', ['$http','$state', function ($http,$state) {  
           this.uploadFiletoServer = function(file, uploadUrl, name, category, price){  			   
                 var fd = new FormData();  
                 fd.append('file', file);  
                 fd.append('name', name);  
                 fd.append('category', category);  
                 fd.append('price', price);    
                 $http.post(uploadUrl, fd, {  
                      transformRequest: angular.identity,  
                      headers: {'Content-Type': undefined,'Process-Data': false}  
                 })  
                 .success(function(data){  
                      var filename = data.trim();  
                      $http.post('api/insert.php',{'image':filename,'name':name,'category':category,'price':price})  
                      .success(function(result){  
						  $state.go('list');
                      });  
                 })  
                 .error(function(){  
                     //alert("Error");  
                 });  
            }  
		}]);  
		
	  app.directive("allowNumbersOnly", function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          element.bind("keydown", function(event) {
            if (event.keyCode == 8) {
              return false;
            } else if (!(event.keyCode > 47 && event.keyCode < 58) || event.shiftKey) {
              event.preventDefault();
              return false;
            }
          });
        }
      }
    });




   
