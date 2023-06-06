/*let boton = document.querySelector(".btn1");
boton.addEventListener("click", ()=> {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "/señales/sonidos/prohibido_estacionar");
    etiquetaAudio.play();
}) */

/* let sound = new Audio();
sound.src = "file:///D:/martu/Vial%20kids/pagina%20web%202/se%C3%B1ales/sonidos/contramano.mp3"
 */

// Audio 1
let boton = document.querySelector(".reproductor")
let audioEtiqueta = document.querySelector("audio")

boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "señales/sonidos/contramano.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio prohibido estacionar
let boton2 = document.querySelector(".reproductor2")
let audioEtiqueta2 = document.querySelector("audio")

boton2.addEventListener("click", () => {
    audioEtiqueta2.setAttribute("src", "señales/sonidos/prohibido_estacionar.mp3")
    audioEtiqueta2.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio prohibido girar a la derecha
let boton3 = document.querySelector(".reproductor3")
let audioEtiqueta3 = document.querySelector("audio")

boton3.addEventListener("click", () => {
    audioEtiqueta3.setAttribute("src", "señales/sonidos/prohibido_girarDerecha.mp3")
    audioEtiqueta3.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio prohibido girar a la izquierda
let boton4 = document.querySelector(".reproductor4")
let audioEtiqueta4 = document.querySelector("audio")

boton4.addEventListener("click", () => {
    audioEtiqueta4.setAttribute("src", "señales/sonidos/prohibido_girarizquierda.mp3")
    audioEtiqueta4.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio pare
let boton5 = document.querySelector(".reproductor5")
let audioEtiqueta5 = document.querySelector("audio")

boton5.addEventListener("click", () => {
    audioEtiqueta5.setAttribute("src", "señales/sonidos/pare.mp3")
    audioEtiqueta5.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio cruce ferroviario (tren)
let boton6 = document.querySelector(".reproductor6")
let audioEtiqueta6 = document.querySelector("audio")

boton6.addEventListener("click", () => {
    audioEtiqueta6.setAttribute("src", "señales/sonidos/cruce_ferroviario.mp3")
    audioEtiqueta6.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio cruce de peatones
let boton7 = document.querySelector(".reproductor7")
let audioEtiqueta7 = document.querySelector("audio")

boton7.addEventListener("click", () => {
    audioEtiqueta7.setAttribute("src", "señales/sonidos/cruce_peatones.mp3")
    audioEtiqueta7.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio atención
let boton8 = document.querySelector(".reproductor8")
let audioEtiqueta8 = document.querySelector("audio")

boton8.addEventListener("click", () => {
    audioEtiqueta8.setAttribute("src", "señales/sonidos/atencion.mp3")
    audioEtiqueta8.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio escolar
let boton9 = document.querySelector(".reproductor9")
let audioEtiqueta9 = document.querySelector("audio")

boton9.addEventListener("click", () => {
    audioEtiqueta9.setAttribute("src", "señales/sonidos/escolar.mp3")
    audioEtiqueta9.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio niños 
let boton10 = document.querySelector(".reproductor10")
let audioEtiqueta10 = document.querySelector("audio")

boton10.addEventListener("click", () => {
    audioEtiqueta10.setAttribute("src", "señales/sonidos/niños.mp3")
    audioEtiqueta10.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio rotonda
let boton11 = document.querySelector(".reproductor11")
let audioEtiqueta11 = document.querySelector("audio")

boton11.addEventListener("click", () => {
    audioEtiqueta11.setAttribute("src", "señales/sonidos/rotonda.mp3")
    audioEtiqueta11.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio permitido estacionar
let boton12 = document.querySelector(".reproductor12")
let audioEtiqueta12 = document.querySelector("audio")

boton12.addEventListener("click", () => {
    audioEtiqueta12.setAttribute("src", "señales/sonidos/permitido_estacionar.mp3")
    audioEtiqueta12.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio permitido girar a la derecha
let boton13 = document.querySelector(".reproductor13")
let audioEtiqueta13 = document.querySelector("audio")

boton13.addEventListener("click", () => {
    audioEtiqueta13.setAttribute("src", "señales/sonidos/permitido_girarderecha.mp3")
    audioEtiqueta13.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

// Audio permitido girar a la izquierda
let boton14 = document.querySelector(".reproductor14")
let audioEtiqueta14 = document.querySelector("audio")

boton14.addEventListener("click", () => {
    audioEtiqueta14.setAttribute("src", "señales/sonidos/permitido_girarizquierda.mp3")
    audioEtiqueta14.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })