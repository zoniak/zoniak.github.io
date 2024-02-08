let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";

document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML =
    "¡aaaaAAAaaaa feliz :)!";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";
      //Mod img size 
      var yourImg = document.getElementById("gatitoEstresado");
      if (yourImg && yourImg.style) {
        yourImg.style.height = "300px";
        yourImg.style.width = "240px";
      }
      
      document.getElementById("question").innerHTML =
        "oye :'(";
      

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML =
        "Quien dejaria escapar a un partidazo como yo";
      document.getElementById("siBtn").innerHTML =
        "perdon me confundi de boton";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "20px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML =
        "Chole estaria super enfadado con tu decision";
      document.getElementById("siBtn").innerHTML = "es bromi si quiero";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";
      
      
      var yourImg = document.getElementById("ketaSad");
      if (yourImg && yourImg.style) {
        yourImg.style.height = "300px";
        yourImg.style.width = "240px";
        
      }
      
       document.getElementById("question").innerHTML =
        "¿No quieres ser mi San Valentin? :(";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "30px";
      document.getElementById("siBtn").style.padding = "30px 50px";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML =
        "Te voy a morder cuando te vea :(";
      document.getElementById("siBtn").innerHTML = "Si";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML =
        "Me estas haciendo daño Blanca";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML =
        "Pienso chuparte en cuanto te vea maldita :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "Solo piensa en ello";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML =
        "Si dices que no estaré muy triste";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "80px 100px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML =
        "Estoy dispuesto a ir a buscar el michi gris";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      var yourImg = document.getElementById("piticliSad");
      if (yourImg && yourImg.style) {
        yourImg.style.height = "300px";
        yourImg.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "90px 120px";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML =
        "Estaré muy muy muy MUY triste :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "140px";
      document.getElementById("siBtn").style.padding = "100px 140px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML =
        "Estaré muy muy muy muuuuuuuy triste.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      var yourImg = document.getElementById("piticliSad");
      if (yourImg && yourImg.style) {
        yourImg.style.height = "250px";
        yourImg.style.width = "200px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "160px";
      document.getElementById("siBtn").style.padding = "110px 160px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML =
        "Vale, ya dejaré de preguntar...";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "180px";
      document.getElementById("siBtn").style.padding = "120px 180px";

      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML = "Es broma, POR FAVOR DI SÍ";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      var yourImg = document.getElementById("piticliSad");
      if (yourImg && yourImg.style) {
        yourImg.style.height = "125px";
        yourImg.style.width = "100px";
      }

      document.getElementById("siBtn").style.fontSize = "200px";
      document.getElementById("siBtn").style.padding = "130px 200px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML =
        "Estaré muy muy muy muy muy triste.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "220px";
      document.getElementById("siBtn").style.padding = "140px 220px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML =
        "Estás rompiendo mi corazón :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "240px";
      document.getElementById("siBtn").style.padding = "150px 240px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "NO... ya di que si :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "260px";
      document.getElementById("siBtn").style.padding = "160px 260px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML =
        "Te doy 3 NY Rolls del Mundys si dices que si";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "280px";
      document.getElementById("siBtn").style.padding = "170px 280px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML = "por faaaaaaaaa :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
