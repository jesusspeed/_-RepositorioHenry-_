// // document.querySelector("html").onclick = function(){
// //     alert("¡Deja de pinchar!")
// }
let miImage = document.querySelector("img");
miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if(miSrc === "imagenes/firefox.jpg"){
        miImage.setAttribute("src","imagenes/firefox2.png");
    } else {
        miImage.setAttribute("src", "imagenes/firefox.jpg");
    }
};
