function mostrarRegistro() {
  document.querySelector(".card-login").style.display = "none";
  document.getElementById("registro").style.display = "block";
}

function mostrarLogin() {
  document.querySelector(".card-login").style.display = "block";
  document.getElementById("registro").style.display = "none";
}



var map;
var marcador;

// Mostrar mapa al hacer clic en "cp"
document.getElementById("btnCP").addEventListener("click", function() {
  document.getElementById("contenedorMapa").style.display = "block";

  if (!map) {
    map = L.map('map').setView([20.67, -103.35], 13); // Guadalajara

    // tipo de mapas-------------
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; CARTO'
}).addTo(map);

    // Click manual
    map.on('click', function(e) {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;

      if (marcador) {
        map.removeLayer(marcador);
      }

      marcador = L.marker([lat, lon]).addTo(map)
        .bindPopup("Ubicación seleccionada")
        .openPopup();

      console.log("Manual:", lat, lon);
    });
  }
});

// Ubicación automática (opcional, si quieres agregar otro botón luego)
function ubicar() {
  navigator.geolocation.getCurrentPosition(function(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    if (marcador) {
      map.removeLayer(marcador);
    }

    marcador = L.marker([lat, lon]).addTo(map)
      .bindPopup("Tu ubicación")
      .openPopup();

    map.setView([lat, lon], 15);

    console.log("Auto:", lat, lon);
  });
}
