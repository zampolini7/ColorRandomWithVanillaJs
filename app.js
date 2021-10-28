let colorRandom = () =>{
    simbolos = "0123456789ABCDEF";
    color = "#";

    for(let i = 0; i < 6; i++){
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    return color 
}

let cambiarColorBackGroud = (colorRandom1) =>{
    console.log(colorRandom1);
    document.body.style.backgroundColor  = colorRandom1
    // return (colorRandom1) no se usa
}

let cambiarTextoHexa = (colorRandom1) =>{
    let colorRandom2 = colorRandom1;
    let pBackground = document.getElementById("textoBackGround")
    let newText = document.createTextNode(`${colorRandom2}`)
    pBackground.style = (`color:${colorRandom1}`)
    pBackground.innerHTML = newText.nodeValue

}
let cambiarColorFF = ()=>{
    let colorRandom1 = colorRandom()
    cambiarColorBackGroud(colorRandom1)
    cambiarTextoHexa(colorRandom1)
}

cambiarColorFF()
let atackId = document.getElementById("cambiarColor")
atackId.addEventListener("click", cambiarColorFF)

