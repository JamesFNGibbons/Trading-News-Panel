angular.module('app').controller('command-input', ($scope, $interval) => {
  $scope.display_cmd_input = false;
  $scope.cmd_response = null;

  /**
    * Handles the shortcut commands dialog key keyboard shortcut
  */
  if(typeof window !== 'undefined'){
    window.addEventListener('keyup', (key) => {
      if('F1' == key.key){
        /* Display to display or hide the command bar */
        if($scope.display_cmd_input){
          $scope.display_cmd_input = false;
        }
        else{
          $scope.display_cmd_input = true;
        }
      }
    });

    $scope.run_command = function(command){
      $scope.command = command;

      /* Check that there is a command in the box */
      if(!$scope.command == ''){
        /* Get the first part of the command and check its exists */
        let command = $scope.command.split(' ')[0];
        let dir = process.env.root_dir;

        if(fs.existsSync(dir + '/lib/commands/' + command + '.js')){
          require(dir + '/lib/commands/' + command + '.js').RunCommand($scope.command, (response) => {
            $scope.cmd_response = response;

            /* Close the command dialog after 2 seconds. */
            $interval(function(){
              $scope.cmd_response = null;
            }, 2000);
          });
        }
        else{
          // Command does not exist.
          $scope.cmd_exist_error = true;

          /* Close the warning after 1.5 seconds */
          $interval(function(){
            $scope.cmd_exist_error = false;
          }, 1500);
        }
      }
      else{
        /* No command in the box. */
      }
    }

    /**
      * Handles the enter key being pressed to execute the
      * command that has been entered into the box.
    */
    window.addEventListener('keyup', (key) => {
      if(key.key == 'Enter'){
      }
    })
  }
});
