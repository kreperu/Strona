/*Utility script
    Copyright (C) 2024  Jakub Sowula, Gabriel Sokalla, Robert Krzywdziński, Mateusz Aleksander, Kacper Zając*/

const borderStep = 0.08;
var colorMode = "dark" //"dark" or "light";
//var colorMode = "light";
var lineColor = colorMode == "light" ? "#3c3836" : "#3c3836";

var displayDataType = "temperatura";

let st = document.body.style;
function sp(key, val) {st.setProperty("--"+key,val);}

var exageration = 1;

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
    let ret = 3.268 * Math.pow(x, -7.317);
    return (ret < 2.5 && ret > 1.5) ? (Math.floor(ret) == 2 ? 3 : 1) : ret;
}

function generateTempR(t) {
    t *= exageration;
    let ret = parseInt(-0.003017*t*t*t-0.03058*t*t+5.28*t+196.638);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateTempG(t) {
    t *= exageration;
    let ret = parseInt(-0.1288*t*t+0.1009*t+211.158);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateTempB(t) {
    t *= exageration;
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


function generatePressR(t) {
    t *= exageration;
    let ret = parseInt(-0.0650085*t*t+129.675*t-64420.98);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generatePressG(t) {
    t *= exageration;
    let ret = parseInt(-0.1033574*t*t+209.8168*t-106243.128);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generatePressB(t) {
    t *= exageration;
    let ret = parseInt(-0.019028*t*t+39.8159*t-20654.535);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generatePressColor(t) {
    return "#" + hexStr(generatePressR(t)) + hexStr(generatePressG(t)) + hexStr(generatePressB(t));
}

function generateWindR(t) {
    t *= exageration;
    let ret = parseInt(-0.03981*t*t+1.914*t+243.315);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateWindG(t) {
    t *= exageration;
    let ret = parseInt(-3.688*t+273.311);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateWindB(t) {
    t *= exageration;
    let ret = parseInt(-2.073*t+167.822);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateWindColor(t) {
    return "#" + hexStr(generateWindR(t)) + hexStr(generateWindG(t)) + hexStr(generateWindB(t));
}

function generateRainR(t) {
    t *= exageration;
    let ret = parseInt(-0.01677*t*t+1.225*t+243.573);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateRainG(t) {
    t *= exageration;
    let ret = parseInt(-2.409*t+272.599);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateRainB(t) {
    t *= exageration;
    let ret = parseInt(-1.347*t+167.011);
    ret = ret < 0 ? 0 : ret;
    ret = ret > 255 ? 255 : ret;
    return ret;
}
function generateRainColor(t) {
    return "#" + hexStr(generateRainR(t)) + hexStr(generateRainG(t)) + hexStr(generateRainB(t));
}