// Express hereinbringen
const express = require('express')

// Express initialisieren!
const app = express()

console.log(__dirname);


// Sagen express: unter public sind die Statischen Sachen
app.use(express.static('public'));


// sendFile: nutzen wir um HTML zu schicken, Wichtig sind die Optionen! Wir brauchen root!
app.get('/', (request, response) => {
    // res.send('<h1>Hello World!</h1>')
    response.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<h1>about</h1>')
    res.sendFile('./views/about.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname })
})

// Redirect zu bestimmter URL
app.get('/contact-me', (denise, kim) => {
    kim.redirect('/contact')
})







// 404 nach fast ganz unten! Sonst landet man auf der 404, obwohl es die html-Seite gibt.
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})
// Wo soll express hören?
app.listen(3000, () => console.log('Server running ...'))