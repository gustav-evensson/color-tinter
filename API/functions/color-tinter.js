var color2k = require('color2k');
function generateLightness(color, format) {
    var lightnessArray = [];
    var colorArray = color2k.parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 1;
    while (i < 10) {
        var newColor = colorArray;
        newColor[2] = i / 10;
        var pushColor = color2k.hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        if (format == "hsla")
            lightnessArray.push(pushColor);
        else if (format == "rgba")
            lightnessArray.push(color2k.toRgba(pushColor));
        else
            lightnessArray.push(color2k.toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return lightnessArray;
}
function generateSaturation(color, format) {
    var lightnessArray = [];
    var colorArray = color2k.parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 1;
    while (i < 10) {
        var newColor = colorArray;
        newColor[1] = i / 10;
        var pushColor = color2k.hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        if (format == "hsla")
            lightnessArray.push(pushColor);
        else if (format == "rgba")
            lightnessArray.push(color2k.toRgba(pushColor));
        else
            lightnessArray.push(color2k.toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return lightnessArray.reverse();
}
function generateDiagonal(color, format) {
    var lightnessArray = [];
    var colorArray = color2k.parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 1;
    while (i < 10) {
        var newColor = colorArray;
        newColor[1] = i / 10;
        newColor[2] = i / 10;
        var pushColor = color2k.hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        if (format == "hsla")
            lightnessArray.push(pushColor);
        else if (format == "rgba")
            lightnessArray.push(color2k.toRgba(pushColor));
        else
            lightnessArray.push(color2k.toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return lightnessArray;
}
function generateOpacity(color, format) {
    var lightnessArray = [];
    var colorArray = color2k.parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 1;
    while (i < 10) {
        var newColor = colorArray;
        newColor[3] = i / 10;
        var pushColor = color2k.hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        if (format == "hsla")
            lightnessArray.push(pushColor);
        else if (format == "rgba")
            lightnessArray.push(color2k.toRgba(pushColor));
        else
            lightnessArray.push(color2k.toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return lightnessArray.reverse();
}
module.exports = { generateDiagonal: generateDiagonal, generateLightness: generateLightness, generateOpacity: generateOpacity, generateSaturation: generateSaturation };
