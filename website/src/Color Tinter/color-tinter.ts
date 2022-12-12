// var color2k = require('color2k');
import {parseToHsla, hsla, toHex, adjustHue, lighten, darken} from 'color2k'

export function getLightness(color: string) {
    var exportArray: string[] = [];
    var colorArray = parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 0;
    while (i < 11) {
        var newColor = colorArray;
        var diff = 1 - newColor[2];
        var newLightness = newColor[2] + ((diff/10)*i);
        var pushColor = hsla(newColor[0], newColor[1], newLightness, newColor[3]);
        exportArray.push(toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return exportArray;
}
export function getDarkness(color: string) {
    var exportArray: string[] = [];
    var colorArray = parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 0;
    while (i < 11) {
        var newColor = colorArray;
        var diff = newColor[2];
        var newLightness = newColor[2] - ((diff/10)*i);
        var pushColor = hsla(newColor[0], newColor[1], newLightness, newColor[3]);
        exportArray.push(toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return exportArray;
}
export function getSaturation(color: string) {
    var exportArray: string[] = [];
    var colorArray = parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 0;
    while (i < 11) {
        var newColor = colorArray;
        newColor[1] = i / 10;
        var pushColor = hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        exportArray.push(toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return exportArray.reverse();
}
export function getDiagonal(color: string) {
    var exportArray: string[] = [];
    var colorArray = parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 0;
    while (i < 11) {
        var newColor = colorArray;
        newColor[1] = i / 10;
        newColor[2] = i / 10;
        var pushColor = hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        exportArray.push(toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return exportArray;
}
export function getOpacity(color: string) {
    var exportArray: string[] = [];
    var colorArray = parseToHsla(color); //This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
    var i = 1;
    while (i < 11) {
        var newColor = colorArray;
        newColor[3] = i / 10;
        var pushColor = hsla(newColor[0], newColor[1], newColor[2], newColor[3]);
        exportArray.push(toHex(pushColor)); //Then we push the color put back to gether in hsla format.
        i++;
    }
    return exportArray.reverse();
}
export function getComplementary(color: string){
    return [color, toHex(adjustHue(color, 180))]
}
export function getComplementaryPair(color: string){
    return [color, toHex(adjustHue(color, 150)), toHex(adjustHue(color, 210))]
}
export function getTrio(color: string){
    return [color, toHex(adjustHue(color, 120)), toHex(adjustHue(color, 240))]
}
export function getSquare(color: string){
    return [color, toHex(adjustHue(color, 60)), toHex(adjustHue(color, 180)), toHex(adjustHue(color, 300))]
}
export function getMonocrom(color: string){
    return [toHex(lighten(color, 0.1)), color, toHex(darken(color, 0.1))]
}
// module.exports = { getDiagonal: getDiagonal, getLightness: getLightness, getOpacity: getOpacity, getSaturation: getSaturation };
