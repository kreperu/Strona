/*Data display script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/
    let genericStyle = {
        fillOpacity:0.4,
        weight:4,
        opacity:1,
        color:lineColor
    };
    function styleVoivodeships(feature, latlng) {
        let randnum = (Math.random()-0.44)*78;
        return Object.assign({}, genericStyle, {fillColor:generateTempColor(randnum)});
    }
    function stylePowiats(feature, latlng) {
        return Object.assign({}, genericStyle, {fillOpacity:0});
    }
    function styleGminas(feature, latlng) {
        let randnum = (Math.random()-0.44)*78;
        return Object.assign({}, genericStyle, {fillColor:generateTempColor(randnum)});
    }
    

    var voivodeships = new L.GeoJSON(voiv, {style: styleVoivodeships});
    var powiats = new L.GeoJSON(powiat, {style: stylePowiats});
    var gminas = new L.GeoJSON(gmina, {style: styleGminas});

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

    