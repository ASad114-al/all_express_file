// Express hereinbringen
const express = require('express')
///Express initaliesern
const app = express()

app.use(express.static('public'));
//sendefile : nutzen wir um HTML zu schicken wichtig sind die option .wir baruchen root
app.get('/', (req,res) =>{
    // res.send ('hallo word')
    res.sendFile('./views/index.html',{root: __dirname })
})
app.get('/about', (req,res)=> {
    // res.send( ('<h1>about </h1>'))
    res.sendFile('./views/about.html', ({root: __dirname }))
})
app.get('/contact', (denise,kim)=> {
    kim.sendFile('./views/contact.html', ({root: __dirname }))
})
// redirect zu bistimmer URL
app.get('/contact-me', (req, res)=>{
    res.redirect('/contact')
})

// app.use((req, res)=>{

// })
// wo soll express hören ?
app.listen(3000, () =>console.log ('Server running....'))


