function toggleSidebar() {
    const suwak = document.getElementById("suwak");
    const sidebar = document.getElementById("sidebar");
    sidebar.style.translate = (sidebar.style.translate == "15vw" || sidebar.style.translate === "") ? "0vw" : "15vw";
    suwak.style.display = sidebar.style.display === "0vw" ? "none" : "block";
}

function toggleActive(e) {
    displayDataType = e.id;
    voivodeships.setStyle(styleVoivodeships);
    powiats.setStyle(stylePowiats);
    gminas.setStyle(styleGminas);
}

function miasto(e){
    const sidebar = document.getElementById("miasto");
    const miasto = document.getElementById("woj_sidebar");
    document.getElementById("cityname").innerHTML = e.target.feature.properties.name;
    miasto.style.display = "none";
    sidebar.style.display = (sidebar.style.display === "none" || sidebar.style.display === "") ? "block" : "none";
    document.getElementById("lm").innerHTML = "Ostatni pomiar: " + String(new Date().getHours()) + ":00";
    document.getElementById("nm").innerHTML = "Następny pomiar: " + String(new Date().getHours()+1) + ":00";
    document.getElementById("tmp").innerHTML = "Temperatura: " + weatherData.synop[corellations[e.target.feature.properties.name]]["temperatura"] + " °C";
    document.getElementById("ws").innerHTML = "Prędkość wiatru: " + weatherData.synop[corellations[e.target.feature.properties.name]]["predkosc_wiatru"] + " m/s";
    document.getElementById("rain").innerHTML = "Opady: " + weatherData.synop[corellations[e.target.feature.properties.name]]["suma_opadu"] + " mm";
    document.getElementById("press").innerHTML = "Ciśnienie: " + weatherData.synop[corellations[e.target.feature.properties.name]]["cisnienie"] + " hPa";
}