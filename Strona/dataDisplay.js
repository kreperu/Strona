/*Data display script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/

    function styleFeature(feature, latlng) {
        let randnum = (Math.random()-0.44)*78;
        return {
            fillColor:generateTempColor(randnum),
            fillOpacity:0.7,
            weight:4,
            opacity:1,
            color:lineColor
        };
    }

    var voivodeships = new L.GeoJSON(voiv, {style: styleFeature});
    var powiats = new L.GeoJSON(powiat, {style: styleFeature});
    var gminas = new L.GeoJSON(gmina, {style: styleFeature});

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

    