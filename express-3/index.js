const express =require ('express')
const app =express()
const PORT= 3004
app.use(express.static('public'))

app.set('view engine', 'ejs') // view

const myData =[
    {name: "Superman, age: 22"},
    {name: "Batman, age: 62"},
    {name: "Herorman, age: 42"},
    {name: "Sniperrman, age: 32"}
]
app.get('/' ,(req,res) =>{
    // res.render('index')
    res.render('index', { title:"My super Homepage",msg :" Wilkommen in mein Homepage", isLoggedin: true, userName :"Batman", data:myData})
})
app.get('/about' ,(req,res)=>{
  res.render('about', { title: "About us"})
})
app.get('/contact' ,(req,res)=>{
    res.render('contact', { title: "contact us"})
  })
  app.get('/faq' ,(req,res)=>{
    res.render('faq', { title: "our faq"})
  })
  app.get('/users/:id', (req, res)=>{
    //   console.log(req.params.id);
    console.log(req.params)
    //   res.end()
    // res.redirect('/')
    res.render('users', {userID: req.params.id,  title:" userpage"})
  })

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))

