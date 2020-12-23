const express = require('express');
const PORT =5002
const app =express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use( (req,res,next)=>{
    console.log(req.url);
    console.log("test", Date.now());
    next()
})
app.use('/contact' , (req,res,next)=>{
    console.log(req.url);
    console.log("Nur in contact", Date.now());
    next()
})

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})
app.listen(PORT,()=> console.log(`Server Running in http://localhost:${PORT}`))