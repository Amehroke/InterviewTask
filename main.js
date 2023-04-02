window.onload = init; 

function init() {
    const mymap = L.map('mapid', {
        center: [37,-120], 
        zoom: 6,
        zoomControl: false,
        layers:[
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
    });

    // Add the zoom control to the bottom right corner
    L.control.zoom({ position: 'bottomright' }).addTo(mymap);
}
