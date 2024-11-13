/*Data request script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/
async function requestData() {
    //TODO use mapapogoda.pl:8000/data/
    let response = await fetch("http://192.168.1.70:8000/data/", {
        method: "GET"
    });
    return response.json();
}