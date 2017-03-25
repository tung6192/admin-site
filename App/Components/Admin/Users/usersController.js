app.controller('usersController',function($scope){
	$scope.users=[
		{lastName:'Bergen', firstName:'Ravi', email:'cory.bergen@qfor.com', userName:'corybergen', title:'Staff Writer', group:'Group 1, Group 2, Group 2'},
		{lastName:'Hoang', firstName:'Tuan', email:'tuan.hoang@qfor.com', userName:'tuanhoang', title:'Product Manager', group:'Group 2, Group 4, Group 5'},
		{lastName:'Bergen', firstName:'Ravi', email:'cory.bergen@qfor.com', userName:'corybergen', title:'Staff Writer', group:'Group 1, Group 2, Group 2'},
		{lastName:'Hoang', firstName:'Tuan', email:'tuan.hoang@qfor.com', userName:'tuanhoang', title:'Product Manager', group:'Group 2, Group 4, Group 5'},
		{lastName:'Bergen', firstName:'Ravi', email:'cory.bergen@qfor.com', userName:'corybergen', title:'Staff Writer', group:'Group 1, Group 2, Group 2'}
	];
	$scope.activities=[
		{user:'corybergen', activity:'Published', object:'Article', title:'How to control your diebetes', time:'March 25, 2016 2:30PM'},
		{user:'hoangtuan', activity:'Edited', object:'Article', title:'How to use AngularJS effectively', time: 'March 20, 2016 8:00AM'},
		{user:'corybergen', activity:'Published', object:'Article', title:'How to control your diebetes', time:'March 25, 2016 2:30PM'},
		{user:'hoangtuan', activity:'Edited', object:'Article', title:'How to use AngularJS effectively', time: 'March 20, 2016 8:00AM'},
		{user:'corybergen', activity:'Published', object:'Article', title:'How to control your diebetes', time:'March 25, 2016 2:30PM'},
		{user:'hoangtuan', activity:'Edited', object:'Article', title:'How to use AngularJS effectively', time: 'March 20, 2016 8:00AM'}
	];
	$scope.groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
});
