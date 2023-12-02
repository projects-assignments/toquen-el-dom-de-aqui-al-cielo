const cuerda_arriba = ['z', 'x', 'c', 'v']
const cuerda_abajo = ['s', 'd']

const cuerdas = document.querySelectorAll('.cuerda')
const cuerdasArriba = document.querySelectorAll('.cuerda.arriba')
const cuerdasAbajo = document.querySelectorAll('.cuerda.abajo')

cuerdas.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const cuerdaArribaIndex = cuerda_arriba.indexOf(key)
  const cuerdaAbajoIndex = cuerda_abajo.indexOf(key)

  if (cuerdaArribaIndex > -1) playNote(cuerdasArriba[cuerdaArribaIndex])
  if (cuerdaAbajoIndex > -1) playNote(cuerdasAbajo[cuerdaAbajoIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}