angular.module('app').controller('data-sources', ($scope, $http) => {

  $scope.sources = {
    bbc: {
      title: 'BBC News',
      alive: false,
      role: 'News Headlines'
    },
    yahoo: {
      title: 'YAHOO Stocks',
      alive: false,
      role: 'Stock Market Data'
    }
  };

  /* Check if the BBC data source is active. */
  $http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bc9326138cc84ac5a518eb524533ffe7').then((data) => {
    if(data.data.status == 'ok'){
      $scope.sources.bbc.alive = true;
    }
  })

  /* Check if the YAHOO data source is active */
  $http.get('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json').then((data) => {
    data = data.data;

    if(data.list.meta.count && data.list.meta.count > 1){
      $scope.sources.yahoo.alive = true;
    }
    else{
      $scope.sources.yahoo.alive = false;
    }
  });

  /* Recheck the data sources every 5 minutes */
  setInterval(() => {
    $scope.$apply(() => {
      /* Check if the BBC data source is active. */
      $http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bc9326138cc84ac5a518eb524533ffe7').then((data) => {
        if(data.data.status == 'ok'){
          $scope.sources.bbc.alive = true;
        }
      })

      /* Check if the YAHOO data source is active */
      $http.get('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json').then((data) => {
        data = data.data;

        if(data.list.meta.count && data.list.meta.count > 1){
          $scope.sources.yahoo.alive = true;
        }
        else{
          $scope.sources.yahoo.alive = false;
        }
      });
    })
  }, 5*(1000*60));
});
