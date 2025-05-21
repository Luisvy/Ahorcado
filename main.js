window.addEventListener("load", () => { //obtenemos el evento load para asegurarnos de que la pagina se haya cargado 
// completamente antes de ejecutar el script
  const placeholderContainer = document.getElementById("palabraPlaceholder");
  const inputLetra = document.getElementById("inputLetra");
  const botonComprobar = document.getElementById("botonComprobar");
  const historialCompletoContainer = document.getElementById("historialDeLetras");
  let vidasContainer = document.getElementById("vidas");

  let palabraAadivinar = "PATATA";
  const limiteDeFallos = 5;
  let contadorDeFallos = 0;
  let vidas= 5;

  let historicoAciertos = [];
  let historialCompleto = [];

  pintarPalabraPlaceholder();

  botonComprobar.addEventListener("click", () => {
    const letra = inputLetra.value.toLowerCase();

    historialCompleto.push(letra);

    inputLetra.value = "";

    if (letra.length != 1) {
      console.error("NO INTENTES HACER COSAS MALAS");
      return;
    }

    if (palabraAadivinar.includes(letra)) {
      console.log("Correcto!");

      historicoAciertos.push(letra);

      placeholderContainer.innerText = "";

      for (let i = 0; i < palabraAadivinar.length; i++) {
        const letraAPintar = palabraAadivinar[i];

        if (historicoAciertos.includes(letraAPintar)) {
          placeholderContainer.innerText += letraAPintar;
        } else {
          placeholderContainer.innerText += "_";
        }

      }
    } else {
      console.warn("FALLO");
      contadorDeFallos++;
      vidas--;
      vidasContainer.innerText = "Vidas: " + vidas;

      if (contadorDeFallos == limiteDeFallos) {
        window.location.reload(); //Recarga la página si supera el limite de fallos
      }
    }

    actualizarHistorial();

    if (placeholderContainer.innerText == palabraAadivinar) {
      alert("Has ganado!");
    }
  });

  function pintarPalabraPlaceholder() {
    palabraAadivinar = palabraAadivinar.toLowerCase();

    for (let i = 0; i < palabraAadivinar.length; i++) {
      placeholderContainer.innerText += "_";
    }
  }

  function actualizarHistorial() {
    historialCompletoContainer.innerHTML = "Letras usadas: ";

    for (let i = 0; i < historialCompleto.length; i++) {
      historialCompletoContainer.innerHTML +=  historialCompleto[i];

      if (i < historialCompleto.length - 1) {
        historialCompletoContainer.innerHTML += ",";
      }
    }
  }
});

// Carrousel de imagenes =D 
window.addEventListener("load", () => {

  const botonSiguiente = document.getElementById("siguiente");
  const botonAnterior = document.getElementById("anterior");
  const imagenCarrousel = document.getElementById("imagenCarrousel");

  let imagenesIndex = 0;

  const imagenes = [
    "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg",
    "https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg",
    "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1900&h=1400",
  ];

  botonAnterior.addEventListener("click", () => {
    if (imagenesIndex == 0) {
      imagenesIndex = imagenes.length - 1;
    } else {
      imagenesIndex--;
    }
    actualizarImagen();
  });

  botonSiguiente.addEventListener("click", () => {
    if (imagenesIndex == imagenes.length - 1) {
      imagenesIndex = 0;
    } else {
      imagenesIndex++;
    }
    actualizarImagen();
  });

  function actualizarImagen() {
    imagenCarrousel.src = imagenes[imagenesIndex];
  }
});