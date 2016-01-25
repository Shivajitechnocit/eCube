angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$location) {
$scope.LogIn = function(user) {
    //$state.go('app.playlists');
	//alert("Login successfully ");
	if(user.username!="ravi" || user.password!="xyz")
	{
		alert("User name or password wrong");
		return;
	}
	else
	{
		$location.path('/tab/dashboard');
	}
  };
})

.controller('ChatsCtrl', function($scope, Chats,$state) {
   $scope.productPage = function() {
   
        $state.go('productList');
    }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope) {

  $scope.chat = Chats.get($stateParams.chatId);

})
.controller('ProductListCtrl', function($scope,Chats) {
 // $scope.chat = Chats.get($stateParams.chatId);

 $scope.Account = [{ name: 'Loan',value:'Loan'},{ name: 'General Insuarance',value:'General Insuarance'}];
$scope.items = [{ name: 'Loan',value:'Loan'},{ name: 'General Insuarance',value:'General Insuarance'},{ name: 'Account & Deposite',value:'Account & Deposite'},{ name: 'Card Services',value:'Card Services'},{ name: 'Carporate Products',value:'Carporate Products'},{ name: 'SME Business Banking',value:'SME Business Banking'},{ name: 'Investment and Fanancial Planing',value:'Investment and Fanancial Planing'},{ name: 'Overdraft Facilities',value:'Overdraft Facilities'},{ name: 'Life and Saving insurance',value:'Life and Saving insurance'}];
$scope.selected = $scope.items[0];
$scope.showSelectValue = function(mySelect) {
    if (mySelect=='Loan') { 
       $scope.Loan = [{ name: 'Auto Loan',value:'Auto Loan'},{ name: 'Home Loan-Non UAE Recident',value:'Home Loan non UAE Recident'},{ name: 'Home Loan UAE Recident',value:'Home Loan UAE Recident'}];
    }
    else{
       $scope.Loan = [{ name: 'option 1',value:'option 1'},{ name: 'option 2',value:'option 2'}];
    }
   
}

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.directive('hideTabs', function($rootScope) {
  return {
      restrict: 'A',
      link: function($scope, $el) {
          $rootScope.hideTabs = 'tabs-item-hide';
          $scope.$on('$destroy', function() {
              $rootScope.hideTabs = '';
          });
      }
  };
});
