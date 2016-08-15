var moduleName='terminator.services';

class MovieService
{
  constructor($http)
  {
    this.$http = $http;
    this.url = 'https://api.themoviedb.org/3';
    this.apiKey = 'b5c405db008c59e3156f8c3e5e802b7d';
  }

  getMovieCollection(collectionId) {
      return this.$http.get(this.url + '/collection/' + collectionId + '?api_key=' + this.apiKey);
  }

  getMovieDetails(movieId) {
      return this.$http.get(this.url + '/movie/' + movieId + '?api_key=' + this.apiKey);
  }

  getMovieCredits(movieId) {
        return this.$http.get(this.url + '/movie/' + movieId + '/credits?api_key=' + this.apiKey);
  }

  static ServiceFactory($http){
    return new MovieService($http);
  }
}

MovieService.ServiceFactory.$inject = ['$http'];

angular.module(moduleName, [])
  .factory('terminatorService', MovieService.ServiceFactory);

export default moduleName;
