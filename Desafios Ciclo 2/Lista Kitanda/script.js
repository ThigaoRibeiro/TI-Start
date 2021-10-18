window.onload = function(){

    let produtos = [
        {descricao: 'Banana', preco: 1.50  },
        {descricao: 'Melão', preco: 5.00 },
        {descricao: 'Laranja', preco: 3.25 },
        {descricao: 'Goiaba',  preco: 2.90 },
        {descricao: 'Maracujá', preco: 2.50 },
        {descricao: 'Nevascaranga', preco: 150.99 },
        {descricao: 'Mamão', preco: 4.99 }
    ]

    const listaProdutos = document.querySelector("#produtos");
    const listProdutos = document.querySelectorAll("#produtos");
    
    const cesta = document.querySelector("#cestaDoCliente");
    // const total = document.querySelector("#content-totalCompras")
    // const mostraTotal = document.querySelector("#mostraTotalCompra")



    ( ()=>{
        for (let pro of produtos){
            const filhoLi = document.createElement('li');

            for (listaP in pro){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco' , pro[listaP]);
                    
                }else{
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }

                
            }

        }
    } )
    ()

    

   
    





















}