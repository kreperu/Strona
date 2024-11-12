async function requestData() {
    //TODO use mapapogoda.pl:8000/data/
    let response = await fetch("http://83.22.183.251:8000/data/", {
        method: "GET"
    });
    return response.json();
}
//console.log(requestData());
