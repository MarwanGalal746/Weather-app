const request = require('request')

const weather = (location , callback) => {
    const API_KEY='35fc3bdcd35a1967964310b8280e50a8';
    const unit = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}`;
    request({url , json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect with weather service ..', undefined)
        } else if(body.message === 'city not found'){
            callback('can\'t find the location', undefined)
        } else {
            callback(undefined, 'The weather in ' +location + ' is ' +body.main.temp + ' and there is ' + body.weather[0].description);
        }
    })
}

module.exports = weather