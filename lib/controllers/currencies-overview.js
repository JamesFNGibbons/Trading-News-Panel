angular.module('app').controller('currencies-overview', ($scope, $http) => {
  $scope.currencies = [];

  $http.get('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json').then((data) => {
    data = data.data;

    if(!typeof data == 'json'){
      JSON.parse(data);
    }

    let resources = data.list.resources;

    for(let i = 0; i < resources.length; i++){
      let curency = resources[i].resource.fields;
      $scope.currencies.push(curency);
    }
  });

  /* Update the data every minute */
  setInterval(() => {
      $scope.$apply(() => {
        $http.get('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json').then((data) => {
          data = data.data;

          if(!typeof data == 'json'){
            JSON.parse(data);
          }

          let resources = data.list.resources;

          for(let i = 0; i < resources.length; i++){
            let curency = resources[i].resource.fields;
            $scope.currencies.push(curency);
          }
        });
      })
  }, 60*1000);
});
