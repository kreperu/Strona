/*Data request script
    Copyright (C) 2024  Jakub Sowula, Gabiel Sokalla, Robert Krzywdziński, Aleksander Mateusz, Kacper Zając*/
async function requestData() {
    //TODO use mapapogoda.pl:8000/data/
    let response = await fetch("http://192.168.1.70:8000/data/", {
        method: "GET"
    });
    return response.json();
}
async function requestGeoJsonVoiv() {
    let response = await fetch("https://github.com/jusuff/PolandGeoJson/blob/main/data/poland.voivodeships.json", {
        method: "GET",
        mode: "no-cors"
    });
    return response.json();
}
