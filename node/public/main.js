$(document).ready(function(){
    var mostrar_datos = angular.module('MostrarDatos', []);
    mostrar_datos.controller('ControlarDatos',function($scope, $http) {
        $scope.importarData = {
            $http.get('../routes/routes.js').success(function(data) {
                    $scope.todos = data;
                    console.log(data)
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                }
        }
    });
})