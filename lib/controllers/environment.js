angular.module('app').controller('environment', ($scope) => {
  /* Load and reload the time object */
  $scope.current_time = new Date().toTimeString();
  setInterval(()=> {
      $scope.$apply(() => {
        $scope.current_time = new Date().toTimeString();

        if(new Date().getHours() == 1){
          $scope.reload_date_string();
        }
      })
  }, 1000);

  /* Load and reload the current date */
  $scope.current_date = new Date().toDateString();

  /**
    * Function called when the hour reaches 1 in the morning.
  */
  $scope.reload_date_string = function(){
    $scope.current_date = new Date().toDateString();
  }

  /* Work out the market status and check every minuet */
  if(new Date().getHours() >= 9 && new Date().getHours() < 17){
    $scope.market_status = true;
  }
  else{
    $scope.market_status = false;
  }

  /* Check for changes every minuet */
  setInterval(()=> {
    $scope.$apply(()=> {
      if(new Date().getHours() >= 9 && new Date().getHours() < 17){
        $scope.market_status = true;
      }
      else{
        $scope.market_status = false;
      }
    });
  }, 60*1000);
});
