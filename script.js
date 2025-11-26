// Dados dos Produtos
const produtos = [
    {
        id: 1,
        nome: "Alfajor Clássico",
        descricao: "Dois discos de massa amanteigada que derretem na boca, recheados com uma camada generosa de doce de leite argentino e banhados em chocolate meio amargo.",
        preco: 8.50,
        // Link verificado do Alfajor
        imagem: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        nome: "Brownie Supremo",
        descricao: "O equilíbrio perfeito. Casquinha crocante por fora, interior denso e úmido (fudgy) por dentro. Feito com manteiga extra e chocolate 70%.",
        preco: 12.00,
        // NOVO Link do Brownie (Corrigido)
        imagem: "https://images.unsplash.com/photo-1564355808539-22a97c631368?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

// Função para renderizar o menu
function carregarMenu() {
    const container = document.getElementById('menu-container');
    
    // Limpa o conteúdo atual
    container.innerHTML = '';

    // Cria os elementos
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto-card');

        card.innerHTML = `
            <div class="produto-img" style="background-image: url('${produto.imagem}')"></div>
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="produto-desc">${produto.descricao}</p>
                <span class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                <button class="btn" onclick="pedir('${produto.nome}')">Adicionar à Sacola</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função de interação do botão
function pedir(item) {
    alert(`Você escolheu o nosso delicioso ${item}!`);
}

// Iniciar quando a janela carregar
window.onload = carregarMenu;