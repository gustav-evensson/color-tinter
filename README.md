## About the project
![](https://github.com/gustav-evensson/color-tinter-public/blob/main/website/src/assets/Color%20Tinter.png?raw=true)

### Why did i build it?
[Color Tinter](https://color-tinter.web.app/) is a project i started because i didnt really find a color "picker" that returned an entire spectrum of colors in the way that Color Tinter does.

I also wanted to learn more about how colors work, what are they actually made up of and how and why do they fit together.

## What exactly is Color Tinter?

Color Tinter is a color tool mainly diracted towards frontend developers. It takes a color as the input and the return to the users a wide variety of different color spectrums. The color can be copied by clicking it but what makes Color Tinter different is its ability to return a copyable text of the entire spectrum wich can be changed from CSS variable to SCSS variables or an array with the colors in string format.

### Tints

The "tints" of a color includes changes in mainly the lightness and saturation of the color. Here we return 5 different spectrums:

1. The Darkness spectrum

![](https://github.com/gustav-evensson/color-tinter-public/blob/main/readmeAssets/Darkness.png)

This returns 11 variations of the color where the first one is the inputed color and the last one is black. In between thos two the color gradually gets darker.

2. The Lightness spectrum

![](https://github.com/gustav-evensson/color-tinter-public/blob/main/readmeAssets/Lightness.png)

This return similarly to the darkness spectrum 11 colors but instead of going from the main color to black this one goes from main to white with the colors in between gradually getting lighter. 

Both if these to are creatad by onlu changing the lightness variable of the HSLA format. 

3. The Diagonal spectrum

![](https://github.com/gustav-evensson/color-tinter-public/blob/main/readmeAssets/Diagonal.png)

This spectrum takes use of both lightness and saturation when it is being created. It returns 11 colors where th first one has its lightness and saturation set to 0%, the last color has the lightness and saturation set to 100% and in between we increse both the lightness and saturation gradually to achive a in my opinion quiet usefull spectrum.

4. The saturation spectrum

![](https://github.com/gustav-evensson/color-tinter-public/blob/main/readmeAssets/Saturation.png)

This is very similar to the ligntess and darkness spectrum where the main color is the first one in this spectrum and then we gradually decrese the level of saturation until we reach 0%. This spectrum only goes one way due to the input rate of already desaturated colors being very low.

5. The opacity/alpha spectrum

![](https://github.com/gustav-evensson/color-tinter-public/blob/main/readmeAssets/Opacity.png)

This returns 10 colors where the first color has an opacity or alpha value of 1 and the last one has 0.1, the steps gradually then decreses with 0.1 for every color in bewtween. 

### Combination

Combinations play more on the hue of the color and it returns colors of other hues that fit well with the main color.

Here we also return 5 different spectrums:

1. Complementary color

This returns the main color and the color with 180deg of hue rotation, the color on the oposite side of the color wheel. (Meaning if you where to input a blue color you would get yellow as the complementary color).

2. Split-complementary

This return three colors; the main color, one color with a hue rotation of +150deg and one of -150deg. This is to get two colors that complement the main one well. 

3. Trio

This one is very similar to the Split-complementary but has a hue rotation of +/-120deg. This devides the color evenly around the color wheel. (360/3 = 120)

4. Square

This one does the exact same as th trio but instead devides the wheel into 4 parts giving us steps of 90deg. 

5. Monocromatic

This returns 3 colors wich really is the main color and 2 color where th lightness has been incresed or decresed by 10. This gives 3 very similar colors that fit well together.

### Contrast

This is the last part of the website where you can play around with different colors to se how they do with each other when it comes to contrast. You will get back the contrast value along with a recomendation to wich use they fit. 

## The API

Color Tinter also has an API with similar but limited functions. You can make a request to the API with your color as the end keyword in the url. You will then get a reponse object back containing the different "tints" spectrums.

You can alos optionally add another keyword of the desired color format. (hex, rgba or hsla)

![](https://github.com/gustav-evensson/color-tinter-public/blob/main/readmeAssets/api%20request%20example.png)

## Tools

- Vue
- Vite
- Typescript
- JavaScript
- SCSS
- Firebase Hosting
- Firebase Storage
- Firebase Cloud Functions
- [color2k](https://color2k.com/)
