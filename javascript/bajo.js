const cuerda_superior = ["z", "x", "c", "v"];
const cuerda_inferior = ["s", "d", "g", "h"];

const cuerdas = document.querySelectorAll(".cuerda");
const cuerdaSuperior = document.querySelectorAll(".cuerda.superior");
const cuerdaInferior = document.querySelectorAll(".cuerda.inferior");

cuerdas.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const cuerdaSuperiorIndex = cuerda_superior.indexOf(key);
  const cuerdaInferiorIndex = cuerda_inferior.indexOf(key);

  if (cuerdaSuperiorIndex > -1) playNote(cuerdaSuperior[cuerdaSuperiorIndex]);
  if (cuerdaInferiorIndex > -1) playNote(cuerdaInferior[cuerdaInferiorIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
