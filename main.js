// Pega os elementos
const selected = document.querySelector('.selected')
const optionsContainer = document.querySelector('.options-container')
const searchBox = document.querySelector('.search-box input')

let optionsList = document.querySelectorAll('.option')

// Faz a consulta na API
// fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/')
//   .then((res) => res.json())
//   .then((res) => {
//     getData()
//     async function getData() {
//       await populateSelect(res)
//     }
//   })

let people = [
  {
    id: 1,
    name: 'Maria Silva'
  },
  {
    id: 2,
    name: 'João Souza'
  },
  {
    id: 3,
    name: 'Matheus Furtado'
  },
  {
    id: 4,
    name: 'Ana Maria'
  },
  {
    id: 5,
    name: 'Diego Alcântara'
  },
  {
    id: 6,
    name: 'Roberto Miranda'
  },
  {
    id: 7,
    name: 'Thiago Oliveira'
  },
  {
    id: 8,
    name: 'Lucas Araújo'
  },
  {
    id: 9,
    name: 'Andreza Sousa'
  },
  {
    id: 10,
    name: 'Amanda Albuquerque'
  },
  {
    id: 11,
    name: 'João Victor'
  },
  {
    id: 12,
    name: 'Pedro Moraes'
  },
  {
    id: 13,
    name: 'Carlos Augusto'
  }
]

for(let i = 0; i < 400; i++) {
  populateSelect()
}

function populateSelect() {
  // for (let i = 0; i < 250; i++) {
    for (let person of people) {
      let $input = document.createElement('input')
      $input.setAttribute('type', 'radio')
      $input.classList.add('radio')
      $input.setAttribute('name', 'person')

      let $label = document.createElement('label')
      $label.innerText = person.name.toLowerCase()
      let $div = document.createElement('div')
      $div.classList.add('option')

      $div.appendChild($input)
      $div.appendChild($label)

      optionsContainer.appendChild($div)
    }
  // }

  optionsList = document.querySelectorAll('.option')
}

filterSelect()
function filterSelect() {
  // Adiciona o evento de click no select
  selected.addEventListener('click', () => {
    // adiciona a classe active para haver o efeito do css quando o usuário clicar
    optionsContainer.classList.toggle('active')

    // zera o valor que ficar no searchBox a cada click no elemento com a classe .selected
    searchBox.value = ''
    filterList('')

    // se o container dos options tiver a classe active ele aplica um focus no input
    if (optionsContainer.classList.contains('active')) {
      searchBox.focus()
    }
  })

  optionsList.forEach((o) => {
    o.addEventListener('click', () => {
      //   pega a label do elemento selecionado e coloca no elemento com a classe select
      selected.innerHTML = o.querySelector('label').innerHTML

      // quando ele seleciona, a classe active é removida
      optionsContainer.classList.remove('active')
    })
  })

  searchBox.addEventListener('keyup', function (e) {
    // pega o objeto event do evento keyup no botão serachBox e passa o texto dentro do componente de pesquisa para a função que irá realizar o filtro
    filterList(e.target.value)
  })

  const filterList = (searchTerm) => {
    // não diferencia de maiúsculas e minúsculas
    searchTerm = searchTerm.toLowerCase()
    optionsList.forEach((option) => {
      //   pega o próximo irmão do input dentro de option que no caso é a label com os nomes
      let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase()

      // para cada label ele verifica se tem o termo pesquisado
      if (label.indexOf(searchTerm) != -1) {
        option.style.display = 'block'
      } else {
        option.style.display = 'none'
      }
    })
  }
}
