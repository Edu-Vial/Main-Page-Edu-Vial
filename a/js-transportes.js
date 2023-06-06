'use strict'
//bici
let boton = document.querySelector(".reproductor")
let audioEtiqueta = document.querySelector("audio")

boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "transportes/sonidos/bicicleta.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })

  //moto
let boton2 = document.querySelector(".reproductor2")
let audioEtiqueta2 = document.querySelector("audio")

boton2.addEventListener("click", () => {
    audioEtiqueta2.setAttribute("src", "transportes/sonidos/moto.mp3")
    audioEtiqueta2.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })


  //auto
let boton3 = document.querySelector(".reproductor3")
let audioEtiqueta3 = document.querySelector("audio")

boton3.addEventListener("click", () => {
    audioEtiqueta3.setAttribute("src", "transportes/sonidos/auto.mp3")
    audioEtiqueta3.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })



  //ambulancia
  let boton4 = document.querySelector(".reproductor4")
  let audioEtiqueta4 = document.querySelector("audio")
  
  boton4.addEventListener("click", () => {
      audioEtiqueta4.setAttribute("src", "transportes/sonidos/ambulancia.mp3")
      audioEtiqueta4.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })


    //autobomba
    let boton5 = document.querySelector(".reproductor5")
    let audioEtiqueta5 = document.querySelector("audio")
    
    boton5.addEventListener("click", () => {
        audioEtiqueta5.setAttribute("src", "transportes/sonidos/autobomba.mp3")
        audioEtiqueta5.play()
        console.log(`Reproduciendo: ${audioEtiqueta.src}`)
      })


//colectivo
let boton6 = document.querySelector(".reproductor6")
let audioEtiqueta6 = document.querySelector("audio")

boton6.addEventListener("click", () => {
    audioEtiqueta6.setAttribute("src", "transportes/sonidos/colectivo.mp3")
    audioEtiqueta6.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })


//camion
let boton7 = document.querySelector(".reproductor7")
let audioEtiqueta7 = document.querySelector("audio")

boton7.addEventListener("click", () => {
    audioEtiqueta7.setAttribute("src", "transportes/sonidos/camión.mp3")
    audioEtiqueta7.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })


//bici
let boton8 = document.querySelector(".reproductor8")
let audioEtiqueta8 = document.querySelector("audio")

boton8.addEventListener("click", () => {
    audioEtiqueta8.setAttribute("src", "transportes/sonidos/tren.mp3")
    audioEtiqueta8.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
  })
