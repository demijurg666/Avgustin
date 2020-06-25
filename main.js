function pricaj() {
  let nasaRecenica = document.getElementById("nasaRecenica");
  let recenice = document.getElementById("recenice");
  let vilimoveReci = ["Mrs", "Cekaj", "Dosta"];
  let vilimGovori =
    vilimoveReci[Math.floor(Math.random() * vilimoveReci.length)];

  recenice.innerHTML = "Ti: " + nasaRecenica.value + "<br>";

  recenice.insertAdjacentHTML("beforeend", "Vilim: " + vilimGovori);

  /* setInterval(function() {
    recenice.insertAdjacentHTML("beforeend", vilimGovori);
  }, 500);
}*/
}

function ocisti() {
  document.getElementById("nasaRecenica").value = "";
}
