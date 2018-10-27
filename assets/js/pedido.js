var mainApp = angular.module("pedidoApp", []);
         
         mainApp.controller('pedidoController', function($scope) {
            $scope.pedido = {               
               
                lista:[
                  {nome:'Laranja',preco:5,disabled:false},
                  {nome:'Cacau',preco:6,disabled:false},
                  {nome:'merda',preco:7,disabled:false},
                  {nome:'merda',preco:7,disabled:false},
                  {nome:'merda',preco:7,disabled:false},
                  {nome:'merda',preco:7,disabled:false},
                  {nome:'merda',preco:7,disabled:false},
                  {nome:'merda',preco:7,disabled:false},  
               ],
               checkout:[
                {nome:'Laranja',preco:5}
               ],
               total:0
            };

            $scope.addProduto = (produto) => {

              $scope.pedido.total += produto.preco;
              $scope.pedido.checkout.push(produto);
              $scope.pedido.lista.forEach(function(el) {
                el.disabled = true;
              });
            }
            $scope.removProduto = (produto) => {
              $scope.pedido.total -= produto.preco;
            }
         });