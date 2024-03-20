
enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Windy = 'windy',
    Cloudy = 'cloudy',
    Snowy = 'snowy'
}

let weeklyForecast: Weather[] = [
    Weather.Sunny,
    Weather.Rainy,
    Weather.Windy,
    Weather.Cloudy,
    Weather.Snowy
];

function DisplayForecast(a: Weather[]) {
    for (let i = 0; i < a.length; i++) {
        console.log(`day${i + 1}: ${a[i]}`);
    }
}

DisplayForecast(weeklyForecast);