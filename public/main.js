import { default as controllersModule} from './modules/controllers/movies.controllers';
import { default as servicesModule} from './modules/services/movies.service';

var mainModule = 'terminatorCollection';

function config($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'public/modules/views/home.html',
      controller:'homeController',
      controllerAs:'vm'
    })
    .otherwise({redirectTo:'/'});
}

config.$inject = ['$routeProvider'];

var app = angular.module(mainModule, ['ngRoute','ngMessages', servicesModule, controllersModule])
  .config(config);

export default mainModule;