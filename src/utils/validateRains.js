export function checkIfRains(probabilityOfPrecip, relativeHumidity) {
	return probabilityOfPrecip > 60 || relativeHumidity > 50
		? "Se espera lluvia"
		: "No se espera lluvia";
}
