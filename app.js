const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();
const weather = require('./src/getWeather')
const port = process.env.PORT || 3000

//define paths for config express
const publicFileDirectory = path.join(__filename, '../public/');
const viewsPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials')



//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);
app.use(express.static(publicFileDirectory))


app.get('' , (req, res) => {
    res.render('index', {
        title: 'Weather', 
        name : 'mrmr'
    })
})



app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help', 
        desc: 'THis some helpful text',
        name : 'mrmr'
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: "Help article not found",
        name: "mrmr"
    })
})


app.get('/about' , (req,res) => {
    res.render('about', {
        title: 'About me', 
        name : 'mrmr'
    });
})

app.get('/weather' , (req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    weather(req.query.address, (error, response) => {
        if(error){
            res.send({error})
        } else {
            res.send({response})
        }
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        errorMessage: "page not found",
        name: "mrmr"
    });
})





app.listen(port, () => {
    console.log('server is up in port '+port);
})
