const functions = require("firebase-functions");
const express = require('express');
const color2k = require('color2k');
const colorTinter = require('./color-tinter');

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
	res.json('You must provide a color, example: /ff0000, /rgba(255,0,0,1), /hsla(0,100%,50%,1)');
});

app.get('/:color', (req, res) => {
	let color;

	try {
		color2k.toRgba(`#${req.params.color}`);
		color = `#${req.params.color}`;
	} catch {
		color = req.params.color;
	}

	try {
		res.json({
			saturation: colorTinter.generateSaturation(color, null),
			opacity: colorTinter.generateOpacity(color, null),
			lightness: colorTinter.generateLightness(color, null),
			diagonal: colorTinter.generateDiagonal(color, null),
		});
	} catch (error) {
        console.error(error)
		res.status(404).json(error.message);
	}
});

app.get('/:color/:format', (req, res) => {
	let color;

	try {
		color2k.toRgba(`#${req.params.color}`);
		color = `#${req.params.color}`;
	} catch {
		color = req.params.color;
	}

	try {
		res.json({
			saturation: colorTinter.generateSaturation(color, req.params.format),
			opacity: colorTinter.generateOpacity(color, req.params.format),
			lightness: colorTinter.generateLightness(color, req.params.format),
			diagonal: colorTinter.generateDiagonal(color, req.params.format),
		});
	} catch (error) {
        console.error(error);
		res.status(404).json(error.message);
	}
});

app.use(function (err, req, res, next) {
	err.message;
	console.log('error');
	next(err);
});

app.listen(5050, () => {
	console.log(`Listening to port: 5050`);
});

exports.app = functions.https.onRequest(app)

