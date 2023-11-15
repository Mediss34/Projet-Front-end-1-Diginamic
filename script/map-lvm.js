let map = L.map("map").setView([43.316667, 3.466667], 6);
let Agde = L.marker([43.316667, 3.466667]).addTo(map);
let SDP = L.marker([43.633331, 5.1]).addTo(map);
let SN = L.marker([47.283329, -2.2]).addTo(map);
let K6 = L.marker([43.160701, 5.618477]).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
Agde.bindPopup("<b>Magasin de Agde</b><br>04.XX.XX.XX.XX").openPopup();
SDP.bindPopup(
  "<b>Magasin de Salon de provence</b><br>04.XX.XX.XX.XX"
).openPopup();
SN.bindPopup("<b>Magasin de Saint-Nazaire</b><br>04.XX.XX.XX.XX").openPopup();
K6.bindPopup("<b>Magasin de Cassis</b><br>04.XX.XX.XX.XX").openPopup();
