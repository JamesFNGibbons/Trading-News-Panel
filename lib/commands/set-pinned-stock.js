module.exports.RunCommand = function($scope, cmd, callback){
  /* Check that there is a pinned stock chosen */
  if(cmd.split(' ')[1] && !cmd.split(' ')[1] == ''){
    $scope.pinned_stock_title = cmd.split(' ')[1];
    callback(
      "Set pinned stock to " + cmd.split(' ')[1] +
      ". This will now appear in the pinned stock chart."
    );
  }
}
