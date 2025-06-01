let mapOptions = {
    center: [56.963298, 24.164767],
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let apiKey = "47a2e92646d5469b98865cc56a0956ab", //Geoapify API key (https://myprojects.geoapify.com/)
marker = null;

const addressSearchControl = L.control.addressSearch(apiKey, {
    position: "topleft",
    placeholder: "Ievadiet adresi šeit",
    resultCallback : (address) => {
        if(!address) {
            return;
        }
        if(marker !== null) {
            map.removeLayer(marker);
        }
        marker = L.marker([address.lat, address.lon]).addTo(map);
        map.setView([address.lat, address.lon], 17);
    }
});

map.addControl(addressSearchControl);