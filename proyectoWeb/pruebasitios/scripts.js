    let miImagen = document.querySelector("img");
    miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute("src");
    if(miSrc === "images/imagen-js.jpg"){
    miImagen.setAttribute("src","https://i.pinimg.com/564x/c2/d0/9d/c2d09d70f2646c698c5550914cce3767.jpg");
    }else {
        miImagen.setAttribute("src", "images/imagen-js.jpg")
    }
}   
    let miBoton = document.querySelector("button");
    let miTitulo = document.querySelector("h1");

    function estableceNombreUsuario(){
        let miNombre = prompt("Introduzca su nombre.");
        if(!miNombre){
            estableceNombreUsuario();
        }else{
            localStorage.setItem("nombre", miNombre);
            miTitulo.innerHTML = `Mozilla is genial, ${miNombre}`
        };
            };
    if(!localStorage.getItem("nombre")){
        estableceNombreUsuario();
    }else{
        let nombreAlmacenado = localStorage.getItem("nombre");
        miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
    };
   miBoton.onclick = function(){
    estableceNombreUsuario();
   }; 