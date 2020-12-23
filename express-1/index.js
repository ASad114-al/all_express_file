const express = require('express') 
const app = express()

app.get('/', (req, res) => {
    // res.send(' <h1>Hello World!</h1>')
    res.sendFile('./views/index.html',{root:__filename})
  })
  console.log(__dirname);
app.get('/about', (req, res)=>{

    res.send('hallo')
})




app.listen(7000, ()=> console.log('Server running'))
