var mainApp = angular.module("pedidoApp", []);
         
         mainApp.controller('pedidoController', function($scope) {
            $scope.pedido = {               
               
                lista:[
                  {nome:'Laranja',preco:5},
                  {nome:'Cacau',preco:6},
                  {nome:'merda',preco:7},
                  {nome:'merda',preco:7},
                  {nome:'merda',preco:7},
                  {nome:'merda',preco:7},
                  {nome:'merda',preco:7},
                  {nome:'merda',preco:7},  
               ],
               checkout:[
                {nome:'Laranja',preco:5}
               ],
               total:0
            };

            $scope.addProduto = (produto) => {
              $scope.pedido.total += produto.preco;
              $scope.pedido.checkout.push(produto);
            }
         });