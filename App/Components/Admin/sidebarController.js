app.controller('sidebarController',function($uibModal, $log, $scope){
	$scope.menu=[
		{icon:'glyphicon glyphicon-user',content:'ACCOUNT',click:''},
		{icon:'glyphicon glyphicon-shopping-cart',content:'STORE', click:''},
		{icon:'fa fa-file-text',content:'CONTENT', click: 'content'},
		{icon:'glyphicon glyphicon-folder-close',content:'CATEGORIES',click:''},	
		{icon:'glyphicon glyphicon-tags',content:'TAGS', click:''},
		{icon:'fa fa-users',content:'USERS', click:'users'}
	];
	$scope.checkForm = {value:''};


});
