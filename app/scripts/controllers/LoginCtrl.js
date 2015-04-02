(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('LoginCtrl', function ($scope, Data, $http, $location, $mdDialog) {
      $scope.data = Data.login;
      $scope.viewport = Data.viewport;
      $scope.login = function () {

        // Request Server
        $http.post(Data.url.login, {
          enroll: Data.login.enroll,
          key: Data.login.key
        })
          .success(function (response) {
            if (response.ok) {
              Data.login.isLoggedIn = true;
              $location.url('/form');
            } else if(typeof response.error != 'undefined' && response.error.indexOf('credentials') >= 0) {

              // Wrong Credentials

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Wrong Title')
                  .content('Wrong Content')
                  .ok('Lemme Retry')
              );
            } else if (typeof response.error != 'undefined' && response.error.indexOf('voted') >= 0) {

              // Already Voted

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Voted Title')
                  .content('Voted Content')
                  .ok('My Bad')
              );
            } else {

              // Unknown Error

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Unknown Title')
                  .content('Unknown Content')
                  .ok('Lemme Retry')
              );
            }
          })
          .error(function () {

            // Error Occurred

            $mdDialog.show(
              $mdDialog.alert()
                .title('Error Title')
                .content('Error Content')
                .ok('Lemme Retry')
            );
          });
      };

      //
      //$scope.showConfirm = function(ev) {
      //  // Appending dialog to document.body to cover side nav in docs app
      //  var confirm = $mdDialog.confirm()
      //    .parent(angular.element(document.body))
      //    .title('Would you like to delete your debt?')
      //    .content('All of the banks have agreed to forgive you your debts.')
      //    .ariaLabel('Lucky day')
      //    .ok('Please do it!')
      //    .cancel('Sounds like a scam')
      //    .targetEvent(ev);
      //  $mdDialog.show(confirm).then(function() {
      //    $scope.alert = 'You decided to get rid of your debt.';
      //  }, function() {
      //    $scope.alert = 'You decided to keep your debt.';
      //  });
      //};

      $scope.showRegistration = function(event) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('Registration Title')
            .content('Registration Content')
            .ok('Got it!')
            .targetEvent(event)
        );
      };

      if(Data.login.isLoggedIn){
        $location.url('/form');
      }

    });

})();