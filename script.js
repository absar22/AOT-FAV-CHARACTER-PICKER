const eren = document.querySelector('#eren')
const erwin = document.querySelector('#erwin')
const levi = document.querySelector('#levi')
const mikasa = document.querySelector('#mikasa')

document.querySelector('#erenNext').addEventListener('click', clickEren)
document.querySelector('#erwinNext').addEventListener('click', clickErwin)
document.querySelector('#leviNext').addEventListener('click', clickLevi)
document.querySelector('#mikasaNext').addEventListener('click', clickMikasa)

function clickEren(){
  eren.classList.toggle('hidden')
  erwin.classList.add('hidden')
  levi.classList.add('hidden')
  mikasa.classList.add('hidden')
}

function clickErwin(){
  eren.classList.add('hidden')
  erwin.classList.toggle('hidden')
  levi.classList.add('hidden')
  mikasa.classList.add('hidden')
}

function clickLevi(){
  eren.classList.add('hidden')
  erwin.classList.add('hidden')
  levi.classList.toggle('hidden')
  mikasa.classList.add('hidden')
}

function clickMikasa(){
  eren.classList.add('hidden')
  erwin.classList.add('hidden')
  levi.classList.add('hidden')
  mikasa.classList.toggle('hidden')
}