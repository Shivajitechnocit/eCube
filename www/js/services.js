angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
  
  
  var products = [{
   
    name: 'Mobile',
    lastText: 'You on your way?',
    face: 'img/ionic.png'
  }];
var productsType=['Loan','Credit Card','General Insuarance'];
  var productsTypefddfh= [{
    
    name: 'Loan',
    value:'Loan'
  },
  {
   
    name: 'Credit Card',
    value:'Credit Card'
  },
  {
   
    name: 'General Insuarance',
    value:'General Insuarance'
  },
  {
   
    name: 'Account & Deposite',
    value:'Account & Deposite'
  },
  {
   
    name: 'Card Services',
    value:'Card Services'
  },
  {
  
    name: 'Carporate Products',
    value:'Carporate Products'
  },
  {
   
    name: 'SME Business Banking',
    value:'SME Business Banking'
  },
  {
   
    name: 'Investment and Fanancial Planing',
    value:'Investment and Fanancial Planing'
  },
  {
  
    name: 'Overdraft Facilities',
    value:'Overdraft Facilities'
  },
  {
   
    name: 'Life and Saving insurance',
    value:'Life and Saving insurance'
  }];


  return {
    all: function() {
      return products;
    },
    getProductType: function() {
      return productsType;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
/*.factory('Users', function() {
var users = [{
    id: 1,
    name: 'Ravi Patil',
	userId:'ravi'
    password: 'xyz',
    face: 'img/ben.png'
  }, {
     id: 2,
    name: 'Baba',
	userId:'baba'
    password: 'baba',
    face: 'img/ben.png'
  }];
  return {
  isUserExist: function(username,password) {
      return true;
    }
  };
  
});  */
