//::::::::Enums::::::://
var Weather;
(function (Weather) {
    Weather["sunny"] = "sunny";
    Weather["rainy"] = "rainy";
    Weather["windy"] = "windy";
    Weather["cloudy"] = "cloudy";
    Weather["snowy"] = "snowy";
})(Weather || (Weather = {}));
var weeklyForecast1 = [Weather.sunny,
    Weather.rainy,
    Weather.windy,
    Weather.cloudy,
    Weather.snowy];
function Displayforecast(a) {
    for (var i = 0; i < a.length; i++) {
        console.log("day1 ".concat(i + 1, ":").concat([Weather[a[i]]]));
    }
}
Displayforecast(weeklyForecast1);
