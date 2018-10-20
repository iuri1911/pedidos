var mainApp = angular.module("pedidoApp", []);
         
         mainApp.controller('pedidoController', function($scope) {
            $scope.pedido = {               
               
                lista:[
                  {nome:'Laranja',preco:5,checked:false},
                  {nome:'Cacau',preco:6,checked:false},
                  {nome:'merda',preco:7,checked:false},
                  {nome:'merda',preco:7,checked:false},
                  {nome:'merda',preco:7,checked:false},
                  {nome:'merda',preco:7,checked:false},
                  {nome:'merda',preco:7,checked:false},
                  {nome:'merda',preco:7,checked:false},  
               ],
               checkout:[
                {nome:'Laranja',preco:5}
               ],
               total:0
            };

            $scope.addProduto = (produto) => {
              angular.forEach(produto, function(item){
                if (item.checked)
                {
                  console.log(item);
                    $scope.pedido.lista[item.id] = item.checked;
                }
              });
              console.log($scope.pedido.lista);

              //$scope.pedido.total += produto.preco;
              //$scope.pedido.checkout.push(produto);
            }
            $scope.removProduto = (produto) => {
              $scope.pedido.total -= produto.preco;
              // $scope.pedido.checkout.push(produto);
            }
         });