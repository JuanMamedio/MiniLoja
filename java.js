const itens = [
    {
        id: 1,
        nome: 'Produto1',
        img: 'loading.avif',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Produto2',
        img: 'loading.avif',
        quantidade: 0
    },

    {
        id: 3,
        nome: 'Produto3',
        img: 'loading.avif',
        quantidade: 0
    },
    ]

InicializarLoja = () => {`
    var variavel = document.getElementById('produtos');
    itens.map((val) => variavel.innerHTML += <div class='Produto-padrao'><img src="${val.img}" /><p> ${val.nome}</p>
    <a key="${val.id}" href='#menu'> Adicionar Ao Carrinho</a></div>;})`}

InicializarLoja();