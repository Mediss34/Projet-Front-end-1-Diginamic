let map2 = L.map("map2").setView([44.51667, 3.5], 17);
let mende = L.marker([44.51667, 3.5]).addTo(map2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map2);
mende.bindPopup("<b>Notre Usine à Mende</b><br>04.XX.XX.XX.XX").openPopup();
