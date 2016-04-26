(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Sebastian',
      email: 'contact@turninternational.co.uk',
      firstName: 'Sebastian',
      lastName: 'Fuentes' ,
      company: 'TURN International.' ,
      address: 'Golsmith 40' ,
      city: 'Mexico' ,
      state: 'Mexico' ,
      biography: 'Lorem ipsum dolor sit amet ipsicum lastem oremao. ',
      postalCode : '11550'
    };
  }

})();
