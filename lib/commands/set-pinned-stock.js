module.exports.RunCommand = function(cmd, callback){
  /* Check that there is a pinned stock chosen */
  if(cmd.split(' ')[1] && !cmd.split(' ')[1] == ''){
    $scope.pinned_stock_title = cmd.split(' ')[1];
    callback(
      "Set pinned stock to " + cmd.split(' ')[1];
    );
  }
}
