const request = require('request')
const weather = require('./utils/getWeather.js')

const address = process.argv[2];

if(!address){
    console.log('Please provide an address');
} else {
    weather(address, (error, response) => {
        if(error){
            console.log('Error', error);
        } else {
            console.log('The weather in', response)
        }
    })
    
}
// const sum = (x, y, callback) => {
//     setTimeout(() => {
        
//     }, 2000)
// }

// sum(1,6, (data) => {
//     console.log(data);
// })
// console.log('Helooooooooo')