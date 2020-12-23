const { throws } = require('assert');
const express =require ('express');
const fs = require('fs');
const app =express()
const PORT=5005
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs');

let mydata= require ('./data.json')
if (fs.existsSync('./data.json')){
    console.log('Data existier');
    fs.readFile('./data.json', 'utf8', (err, data)=>{
        if (err)throw err
        mydata=JSON.parse(data)
        // console.log(mydata); 
    })
}else{
    console.log('Data existier nicht');
    fs.writeFile('./data.json', "[]", 'utf8', err =>{
        if(err) throw err
    })
}
app.get('/', (req,res)=>{
    res.render('index', {titel :"Main", msg: ""})
})
app.post('/add' ,(req, res)=>{
    console.log(req.body);
    mydata.push(req.body)
    fs.writeFile('./data.json', JSON.stringify(mydata), 'utf8', err =>{
        if(err) throw err
    })
    res.status(201).render('index', {titel :"Main",msg:`${req.body.firstName},thank you for our
     Message`})
})
app.get('./use', (req,res)=>{
    res.render('use', {titel: "Use", mydata})
})
app.get('/users', (req, res) => {
    res.render('users', { title: "Users", myData })
})



app.listen(PORT ,()=> console.log(`SERVER RUNNING IN http://localhost:${PORT}`))