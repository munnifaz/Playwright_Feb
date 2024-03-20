//::::::::Enums::::::://

enum Weather {
   sunny= 'sunny',
   rainy= 'rainy',
    windy='windy',
  cloudy=  'cloudy',
   snowy= 'snowy'

}

let weeklyForecast1: Weather[] =
 [Weather.sunny,
 Weather.rainy,
Weather.windy,
Weather.cloudy,
Weather.snowy];

function Displayforecast(a: Weather[]) {

    for (let i = 0; i < a.length; i++) {

        console.log(`day1 ${i + 1}:${[Weather[a[i]]]}`)


    }
}

    Displayforecast(weeklyForecast1)




