function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;
    let celsiusResult = document.getElementById("celsiusResult");
    let fahrenheitResult = document.getElementById("fahrenheitResult");
    let kelvinResult = document.getElementById("kelvinResult");

    if (unit === "celsius") {
        celsiusResult.innerHTML = `${inputTemp.toFixed(3)} &deg;C`;
        fahrenheitResult.innerHTML = `${((inputTemp * 9/5) + 32).toFixed(3)} &deg;F`;
        kelvinResult.innerHTML = `${(inputTemp + 273.15).toFixed(3)} K`;
    } else if (unit === "fahrenheit") {
        celsiusResult.innerHTML = `${(((inputTemp - 32) * 5/9).toFixed(3))} &deg;C`;
        fahrenheitResult.innerHTML = `${inputTemp.toFixed(3)} &deg;F`;
        kelvinResult.innerHTML = `${(((inputTemp - 32) * 5/9) + 273.15).toFixed(3)} K`;
    } else if (unit === "kelvin") {
        celsiusResult.innerHTML = `${((inputTemp - 273.15).toFixed(3))} &deg;C`;
        fahrenheitResult.innerHTML = `${(((inputTemp - 273.15) * 9/5) + 32).toFixed(3)} &deg;F`;
        kelvinResult.innerHTML = `${inputTemp.toFixed(3)} K`;
    }
}
