// menu responsivo
let ham = document.querySelector('#hamb')
let close = document.querySelector('#fechar')
let men_lat = document.querySelector('#items-menu')
let resp_bg = document.querySelector('#resp-bg')

function add() {
  men_lat.classList.add('open')
  resp_bg.classList.add('bgblack')
}

function remove() {
  men_lat.classList.remove('open')
  resp_bg.classList.remove('bgblack')
}

// envia o formulário
function enviar() {
  let name = document.querySelector('#txtname').value
  let cont = document.querySelector('#txtcont').value
  let urg = document.querySelector('#txtrange').value
  let text = document.querySelector('#txtarea').value

  if (name == '' || cont == '' || text == '') {
    alert('[ERRO] Informe os dados e tente novamente!')
  } else {
    console.clear()

    console.log(`Nome: ${name}`)
    console.log(`Contato: ${cont}`)
    console.log(`Urgencia: ${urg}`)
    console.log(`Detalhes: ${text}`)
  }  
}
