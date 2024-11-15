/*Data request script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/
async function requestData() {
    let response = await fetch("http://mapapogoda.pl:2052/data/", {
        method: "GET"
    });
    return response.json();
}