var mainApp = angular.module("pedidoApp", []);
         
         mainApp.controller('pedidoController', function($scope) {
            $scope.pedido = {               
               
                lista:[
                  {nome:'Laranja',preco:5,desab:false},
                  {nome:'Laranja',preco:5,desab:false},
                  {nome:'Laranja',preco:5,desab:false},
                  {nome:'Laranja',preco:5,desab:false},
                  {nome:'Laranja',preco:5,desab:false},
                  {nome:'Laranja',preco:5,desab:false},
                  {nome:'Laranja',preco:5,desab:false},
                    
               ],
               checkout:[
                {nome:'Laranja',preco:5, qtd:1}
               ],
               total:0,
            };

            $scope.addProduto = (produto) => {
              $scope.pedido.checkout.push(produto);
            }
            $scope.updateTotal = (value) => {
              $scope.pedido.total += value;
              console.log(value,$scope.pedido.total);
            }
            $scope.somaProduto = (produto) => {
              //$scope.pedido.total += qtd*lista.preco;
              $scope.pedido.checkout.qtd = $scope.qtd;
              //$scope.pedido.total += produto.preco;
              console.log($scope.pedido.checkout.qtd);
            }
            $scope.removProduto = (produto) => {
              $scope.pedido.total -= produto.preco;
            }
         });