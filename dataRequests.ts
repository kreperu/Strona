/*Data request script
    Copyright (C) 2024  Jakub Sowula, Gabiel Sokalla, Robert Krzywdziński, Aleksander Mateusz, Kacper Zając*/

async function requestData(): Promise<string> {
    //TODO use mapapogoda.pl:8000/data/
    let response = await fetch("http://192.168.1.70:8000/data/", {
        method: "GET"
    });
    return response.json();
}