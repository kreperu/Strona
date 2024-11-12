/*Data display script
    Copyright (C) 2024  Jakub Sowula, Gabiel Sokalla, Robert Krzywdziński, Aleksander Mateusz, Kacper Zając*/

    var voivodeships = new L.GeoJSON(voiv, {style: {fillColor:'#ff0000',fillOpacity:0.01,weight:4,opacity:1,color:'#ff0000'}});
    var powiats = new L.GeoJSON(powiat, {style: {fillColor:'#ff00ff',fillOpacity:0.01,weight:2,opacity:1,color:'#ff00ff'}});
    var gminas = new L.GeoJSON(gmina, {style: {fillColor: '#0000ff',fillOpacity:0.05,weight:1,opacity:1,color:'#0000dd'}});

    function removeAllBorders(map) {
        if(map.hasLayer(voivodeships)) voivodeships.remove();
        if(map.hasLayer(powiats)) powiats.remove();
        if(map.hasLayer(gminas)) gminas.remove();
    }

    function setBorders(level, map) {
        switch(level) {
            case 0:
                removeAllBorders(map);
                voivodeships.addTo(map);
                break;
            case 1:
                removeAllBorders(map);
                powiats.addTo(map);
                voivodeships.addTo(map);
                
                break;
            case 2:
                removeAllBorders(map);
                powiats.addTo(map);
                break;
            case 3:
                removeAllBorders(map);
                gminas.addTo(map);
                powiats.addTo(map);
                
                break;
            case 4:
                removeAllBorders(map);
                gminas.addTo(map);
                break;
            default:
                removeAllBorders(map);
                voivodeships.addTo(map);
                break;
        }
    }