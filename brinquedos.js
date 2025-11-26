const filtrosCategoria = document.querySelectorAll('.filtro-categoria');
const filtrosIdade = document.querySelectorAll('.filtro-idade');
const produtos = document.querySelectorAll('.produto');

// Função para filtrar os produtos
function filtrar() {
    let categoriasSelecionadas = [];
    let idadesSelecionadas = [];

    // Ver quais categorias estão marcadas
    filtrosCategoria.forEach(f => {
        if (f.checked) categoriasSelecionadas.push(f.value);
    });

    // Ver quais idades estão marcadas
    filtrosIdade.forEach(f => {
        if (f.checked) idadesSelecionadas.push(f.value);
    });

    // Mostrar ou esconder produtos
    produtos.forEach(produto => {
        let categoria = produto.dataset.categoria;
        let idade = produto.dataset.idade;

        // Regra: produto aparece se bater com algum filtro OU se não tiver filtro marcado
        let categoriaOk = categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(categoria);
        let idadeOk = idadesSelecionadas.length === 0 || idadesSelecionadas.includes(idade);

        if (categoriaOk && idadeOk) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}

// Adiciona evento nos checkboxes
filtrosCategoria.forEach(f => f.addEventListener('change', filtrar));
filtrosIdade.forEach(f => f.addEventListener('change', filtrar)); 

// ===== MODAL DE LOGIN =====
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ===== MODAL DO CARRINHO =====
const cartBtn = document.querySelector('.nav-link[href="#"]:nth-child(3)');
const cartModal = document.getElementById('cartModal');
const closeCart = document.querySelector('.close-cart');

cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartModal.style.display = 'block';
});

closeCart.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = 'none';
  }
});
