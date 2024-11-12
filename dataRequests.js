/*type weatherData = {
    data: string;
}*/
async function requestData() {
    //TODO use mapapogoda.pl:8000/data/
    let response = await fetch("http://192.168.1.70:8000/data/", {
        method: "GET"
    });
    return response.json();
}
//console.log(requestData());
