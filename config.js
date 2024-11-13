/*Utility script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/

const borderStep = 0.08;
var colorMode = "light" //"dark" or "light";
//var colorMode = "light";
var lineColor = colorMode == "light" ? "#3c3836" : "#3c3836";


let st = document.body.style;
function sp(key, val) {st.setProperty("--"+key,val);}

function updateColorMode() {
    lineColor = colorMode == "light" ? "#3c3836" : "#504945";
    if(colorMode == "dark") {
        sp("set-bg", "var(--dark-bg)");
        sp("set-fg", "var(--light-bg)");
        sp("brightness", "130%");
        sp("saturation", "500%");
        sp("hue", "-20deg")
        sp("bright-push", "10%");
        sp("sat-push", "250%");
    } else {
        sp("set-bg", "var(--light-bg)");
        sp("set-fg", "var(--dark-bg)");
        sp("brightness", "70%");
        sp("saturation", "250%");
        sp("hue", "-20deg")
        sp("bright-push", "-10%");
        sp("sat-push", "-250%");
    }
}

updateColorMode();

function borderLevel(x) {
    return 3.899 * Math.pow(x, -8.915);
}

function generateTempR(t) {
    let ret = parseInt(-0.003017*t*t*t-0.03058*t*t+5.28*t+196.638);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateTempG(t) {
    let ret = parseInt(-0.1288*t*t+0.1009*t+211.158);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateTempB(t) {
    let ret = parseInt(-0.04023*t*t-2.278*t+178.36);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function hexStr(dec) {
    let ret = dec.toString(16);
    ret = ret.length < 2 ? "0" + ret : ret;
    return ret;
}
function generateTempColor(t) {
    return "#" + hexStr(generateTempR(t)) + hexStr(generateTempG(t)) + hexStr(generateTempB(t));
}