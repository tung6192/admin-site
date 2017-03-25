app.controller('contentController',function($scope,$uibModal, $log){
// Content data
	$scope.content=[
		{category:'ARTHRISTIS (2 Posts)', main:[
			{title:'What causes rumatory arthritis?',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'},
			{title:'LIVING WITH ARTHRITIS',body:'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'}
			]},
		{category:'BRAIN TRAUMA (6 Posts)', main:[
			{title:'SPORTS INJURIES AND BRAIN TRAUMA',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'},
			{title:'FORMER FOOTBALL PLAYERS SPEAK UP...',body:'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'}
			]}
	];

// Open IMPORT HTML
  $scope.open = function (size) {
    var modalInstance = $uibModal.open({
      templateUrl: 'App/Components/Admin/content/import.html',
      controller: function ($scope, $uibModalInstance) {
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };      	
      },
      size: size
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

//Category
	$scope.categories=[
		'Arthritis',
		'Brain Trauma',
		'Cancer: All',
		'Diabetes',
		'Emphysema',
		'Fibromyalgia',
		'Glaucoma',
		'Heart Disease',
		'Irritable Bowel Syndrome',
		'Jaundice',
		'Kidney Stone',
		'Lyme Disease',
		'Melanoma',
		'Narcolepsy',
		'Obesity',
		'Paralysis',
		'Q Fever',
		'Rabies',
		'Scabies',
		'Tendinitis',
		'Ulcerative Colitis',
		'Vascular Disease',
		'Whooping Cough'
	];
//Import HTML
	$scope.import=[
		[
			{index:'1',title:'DIABETES IN YOUNG ADULTS',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'},
			{index:'2',title:'MY CHILD HAS TYPE I DIABETES',body:'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'}
		],		
		[
			{index:'3',title:'DIABETIC DIETS FOR KIDS',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'},
			{index:'4',title:'YOUNG ADULTS WITH DIABETES',body:'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue faucibus lorem, ac dapibus augue hendrerit vel. Quisque pulvinar tellus arcu, ultricies bibendum augue convallis et. Maecenas tempor vehicula consequat. Ut vel porttitor sem. Sed enim nulla, pellentesque at sagittis rhoncus, posuere a lorem. Fusce mollis pretium mollis. Cras ornare massa et neque consectetur dictum. Proin suscipit nulla sed nisi sodales, eu varius est consectetur. Etiam tincidunt feugiat elit sed elementum. Sed et nunc dapibus, condimentum nibh sed, ultrices mauris. Fusce quis leo eu leo sollicitudin ornare vel sed velit. Vestibulum suscipit lectus sit amet faucibus venenatis. Etiam efficitur quam sed ultricies gravida. Vestibulum congue sapien et sagittis consequat. Nullam tristique tincidunt arcu nec tempus.'}
		]
	];

});

