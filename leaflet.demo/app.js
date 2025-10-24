var map = L.map('map').setView([8.422573, 124.811023], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([8.422573, 124.811023]).addTo(map);

var circle = L.circle([8.422573, 124.811023], {
    color: 'blue',
    fillColor: 'rgba(128, 195, 240, 1)',
    fillOpacity: 0.5,
    radius: 250
}).addTo(map);

var polygon = L.polygon([
    [8.422802, 124.811270],
    [8.422573, 124.811023],
    [8.422467, 124.811031]
]).addTo(map);

marker.bindPopup("<b>Welcome Home!</b><br>I am a popup.");
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");