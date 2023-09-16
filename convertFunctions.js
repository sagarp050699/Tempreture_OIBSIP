function celciusToFahrenheit(degree) {
	displayResult.innerHTML = `${(degree * 1.8 + 32).toFixed(2)} °F`;
}
function FahrenheitToCelcius(degree) {
	displayResult.innerHTML = `${(((degree - 32) * 5) / 9).toFixed(2)} °C`;
}
function kelvinToCelcius(degree) {
	displayResult.innerHTML = `${(degree - 273.15).toFixed(2)} °C`;
}
function KelvinToFahrenheit(degree) {
	displayResult.innerHTML = `${(1.8 * (degree - 273.15) + 32).toFixed(2)} °F`;
}