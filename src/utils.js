export   function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/static/images/produtos/produto-1.svg',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Sandália Branco Blanc Tratorada',
                    image: '/static/images/produtos/produto-4.svg',
                    price: { amount: 459.9, isDiscount: 319.89 },
                    id: 2,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/static/images/produtos/produto-3.svg',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 3,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/static/images/produtos/produto-5.svg',
                    price: { amount: 159.90, isDiscount: null },
                    id: 4,
               },
               {
                    name: 'Slingback Branco Tiras Bico Fino Couro',
                    image: '/static/images/produtos/produto-2.svg',
                    price: { amount: 379.90, isDiscount: null },
                    id: 5,
               },
          ]);
     });
}

export function fecharModal() {
     document.body.style.overflow = ''
     const modal1 = document.getElementById('modal1')
     const modal2 = document.getElementById('modal2')

     modal1.style.display = 'none'
     modal2.style.display = 'none'
}

export function abrirModal() {
     document.body.style.overflow = 'hidden'
     const modal1 = document.getElementById('modal1')
     const modal2 = document.getElementById('modal2')

     modal1.style.display = 'flex'
     modal2.style.display = 'flex'
}

export function salvarCEP() {
     const cep = document.getElementById('cep').value
     const cidade = document.getElementById('cidade').value
     const estado = document.getElementById('estado').value

     if (cep !== '') {
          localStorage.setItem("cep", cep);
          localStorage.setItem("city", cidade);
          localStorage.setItem("state", estado);

          document.body.style.overflow = ''
          const modal1 = document.getElementById('modal1')
          const modal2 = document.getElementById('modal2')

          modal1.style.display = 'none'
          modal2.style.display = 'none'
     }
     else{alert("Preencha o Código postal")}
     
}

export function fecharAbaProdutos() {
     const div = document.getElementById('div-produtos')
     const fundo = document.getElementById('fundo-produtos')

     div.style.display = 'none'
     document.body.style.overflow = ''
     fundo.style.display = 'none'
}

export function abrirCarrinho() {
     const carrinho = document.getElementById('carrinho')
     const fundo = document.getElementById('fundo-carrinho')

     document.body.style.overflow = 'hidden'

     carrinho.classList.add('carrinho-open')
     fundo.style.display = 'block'
}

export function fecharCarrinho() {
     const carrinho = document.getElementById('carrinho')
     const fundo = document.getElementById('fundo-carrinho')

     document.body.style.overflow = ''

     carrinho.classList.remove('carrinho-open')
     fundo.style.display = 'none'
}

export function enviarNewsletter() {
     const div = document.getElementById('inputs-cupom')
     const pos_div = document.getElementById('cupom-ativo')
     const input = document.getElementById('input-email')

     const txt1 = document.getElementById('text-cupom')
     const txt2 = document.getElementById('text2-cupom')

     console.log("teste")

     if (input.value !== "") {
          div.style.display = 'none'
          pos_div.style.display = 'flex'
          
          txt1.style.display = 'none'
          txt2.style.display = 'flex'
     }
}

export function copiado() {
     const btn = document.getElementById('btn-copiar')

     btn.textContent = 'Copiado'
}

export function openMenu() {
     const div = document.getElementById('menu')
     const fundo = document.getElementById('fundo-menu')

     document.body.style.overflow = 'hidden'

     div.classList.add('menu-open')
     fundo.style.display = 'block'
}

export function closeMenu() {
     const div = document.getElementById('menu')
     const fundo = document.getElementById('fundo-menu')

     document.body.style.overflow = ''

     div.classList.remove('menu-open')
     fundo.style.display = 'none'
}

export function openSapatos() {
     const div = document.getElementById('option-sapatos')
     const seta = document.getElementById('seta-sapatos')

     if (div.style.display === 'none') {
          div.style.display = 'flex'
          seta.style.rotate = '90deg'
     }
     else {
          div.style.display = 'none'
          seta.style.rotate = '0deg'
     }
}
