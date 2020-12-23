const express = require('express')
const app = express()
const PORT = process.env.PORT || 5006
const { body, validationResult } = require('express-validator');
app.use(express.static('public'))
app.set('view engine' , 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.get('/', (req, res) =>{
    res.render('index')
})



app.post('/add',[
    // username must be an email
    body('email').isEmail(),
    body('phone').isNumeric({no_Symbol: false}),
    body('name').isLength({min:2, max:20}).isLowercase(String),
    body('message').isLength({min:10}),
    body('password')
  ], (req, res) =>{
    const errors = validationResult(req);
    console.log(errors.isEmpty())
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.status(201).redirect('/')
})
function showPassword(){
    var pass = document.getElementById("Password");
       if (pass.type === "password") {
           pass.type = "text";
       }
       else {
           pass.type = "password";
       }
    }



app.listen(PORT, () => console.log(`http://localhost:${PORT}`) )