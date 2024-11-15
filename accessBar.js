function onClickBLeft(e) {
    if(colorMode == "dark") colorMode = "light"
    else colorMode = "dark";
    updateColorMode();
    map.removeLayer(actMap);
    actMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/' + colorMode + '_nolabels/{z}/{x}/{y}.png', {attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'});
    actMap.addTo(map);
    
    //voivodeships = new L.GeoJSON(voiv, {style: styleFeature});
    //voivodeships.resetStyle();
    //voivodeships.setStyle(styleFeature)
    //powiats = new L.GeoJSON(powiat, {style: styleFeature});
    //powiats.resetStyle();
    //powiats.setStyle(styleFeature)
    //gminas = new L.GeoJSON(gmina, {style: styleFeature});
    //gminas.resetStyle();
    //gminas.setStyle(styleFeature)
    removeAllBorders(map);
    setBorders(0, map);
    document.getElementById("map").style.filter = colorMode == "dark" ? "sepia(20%)" : "sepia(0%)";
}