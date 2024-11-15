/*Data display script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/
    let genericStyle = {
        fillOpacity:0.7,
        weight:4,
        opacity:1,
        color:lineColor
    };
    var weatherData;
    let _data = requestData();
    function dataUpdate(val) {
        if(val == null || val == undefined || val == {}) {
            setTimeout(() => {_data.then((value) => dataUpdate(value));}, 1000);
            return 1;
        }
        weatherData = val;
        return 0;
    }
    setTimeout(() => {_data.then((value) => dataUpdate(value));}, 1000);
    

    function getAverageFor(what) {
        const voivTranslate = {"WP": 0, "MZ": 1, "DS": 2, "KP": 3, "LB": 4, "LD": 5, "LU": 6,"MA": 7, "OP": 8, "PK": 9, "PD": 10, "PM": 11, "SK": 12, "SL": 13,"ZP": 14, "WN": 15};
        
        let sum = new Array(16).fill(0);
        let count = new Array(16).fill(0);
        let av = new Array(16).fill(0);

        for (let i = 0; i < weatherData.synop.length; i++) {
            if(weatherData.synop[i] == null || weatherData.synop[i] == undefined || weatherData.synop[i] == {} || weatherData.synop[i].stacja == null || weatherData.synop[i].stacja == undefined || weatherData.synop[i].stacja == "") continue;
            let x = cityCorellation[weatherData.synop[i].stacja];
            if(x == null || x == undefined || x == []) continue;
            x = voivTranslate[x[0]];
            
            sum[x] += parseFloat(weatherData.synop[i][what]);
            count[x] += 1;
        }

        for (let i = 0; i < av.length; i++) {
            if (count[i] > 0) {
                av[i] = sum[i] / count[i];
                //console.log(av[i]);
            }
        }
        
      return av;
    }

    function styleVoivodeships(feature, latlng) {
        const voivEncode = {"DOLNOŚLĄSKIE":2, "KUJAWSKO-POMORSKIE":3, "LUBELSKIE":6, "LUBUSKIE":4, "ŁÓDZKIE":5, "MAŁOPOLSKIE":7, "MAZOWIECKIE":1, "OPOLSKIE":8, "PODKARPACKIE":9, "PODLASKIE":10, "POMORSKIE":11, "ŚLĄSKIE":13, "ŚWIĘTOKRZYSKIE":12, "WARMIŃSKO-MAZURSKIE":15, "WIELKOPOLSKIE":0, "ZACHODNIOPOMORSKIE":14};
        let data = getAverageFor(displayDataType)[voivEncode[feature.properties.name]];
        let color;
        if(displayDataType == "temperatura") color = generateTempColor(data);
        else if(displayDataType == "cisnienie") color = generatePressColor(data);
        else if(displayDataType == "predkosc_wiatru") color = generateWindColor(data);
        else if(displayDataType == "suma_opadu") color = generateRainColor(data);
        else color = "#000000";
        return Object.assign({}, genericStyle, {fillColor:color,fillOpacity:0.7});
    }
    function stylePowiats(feature, latlng) {
        return Object.assign({}, genericStyle, {fillOpacity:0, weight: 6});
    }
    function styleGminas(feature, latlng) {
        let randnum = (Math.random()-0.44)*78;
        //var color;
        //let weather = weatherData.then((value) => {let weather = value["synop"][corellations[feature.properties.name]];if(weather == null || weather == undefined) return 1; return weather;});
        //let style;
        //weather.then((value) => {style = Object.assign({}, genericStyle, {fillColor:generateTempColor(value.temperatura)});});
        let data = weatherData.synop[corellations[feature.properties.name]];
        if(data == null || data == undefined || data == {}) return Object.assign({}, genericStyle, {fillColor:"#000000", weight: 2.5});
        let color;
        if(displayDataType == "temperatura") color = generateTempColor(data[displayDataType]);
        else if(displayDataType == "cisnienie") color = generatePressColor(data[displayDataType]);
        else if(displayDataType == "predkosc_wiatru") color = generateWindColor(data[displayDataType]);
        else if(displayDataType == "suma_opadu") color = generateRainColor(data[displayDataType]);
        else color = "#000000";
        return Object.assign({}, genericStyle, {fillColor:color});
    }
    


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
                gminas.addTo(map);
                powiats.addTo(map);
                break;
            case 3:
                removeAllBorders(map);
                
                powiats.addTo(map);
                gminas.addTo(map);
                
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

