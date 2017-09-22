angular.module('app').controller('dashboard-news', ($scope, $http) => {
  $(document).ready(() => {
    $http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bc9326138cc84ac5a518eb524533ffe7').then((data) => {
      data = data.data;

      $scope.articles = data.articles;
    });

    /* Reload the data source every 2 minutes */
    setInterval(()=> {
      $scope.$apply(() => {
        $http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bc9326138cc84ac5a518eb524533ffe7').then((data) => {
          data = data.data;

          $scope.articles = data.articles;
        });
      })
    }, 2*(1000*60));
  })
});
