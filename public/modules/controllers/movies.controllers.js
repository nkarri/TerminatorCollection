import HomeController from './HomeController';

var moduleName='controllersModule';

angular.module(moduleName, [])
    .controller('homeController', HomeController);
    
export default moduleName;