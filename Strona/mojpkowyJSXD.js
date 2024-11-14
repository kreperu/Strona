//nazwa do zmiany
function averageTemp() {
    let dane = requestData();
    let voivTranslate = {};
    let avTemp = 0;
    for (let i = 0; i < dane.length; i++) {
        avTemp += dane[i].temperatura;
    }
    return avTemp / dane.length;
}

//jestem bezużyteczny...
//nie, za drugim razem zrozumiałeś o co mi chodziło pomimo blędów w mojej własnej wypowiedzi