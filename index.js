const animacion = document.querySelector("#animacion")



const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

animacion.addEventListener("mouseover", () => {
    animacion.setAttribute('style', `left: ${random(200, 1000)}px; top: ${random(200, 1000)}px;`)
})

animacion.addEventListener("click", () => {
    alert("bueno, el desafio adicional es aumentar al dar click sin mantener")
    animacion.setAttribute('style', `left: 0; top: 0;`)
    animacion.classList.toggle('crecer')
})