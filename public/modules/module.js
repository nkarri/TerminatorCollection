import { default as homeController} from './controllers/HomeController';
import { default as moviesService} from './services/movies.service';

let moviesModule = angular.module('app.movies', [])
    .controller('homeController', homeController)
    .service('moviesService', moviesService);

export default moviesModule;