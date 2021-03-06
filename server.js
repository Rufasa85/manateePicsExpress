const express = require('express');
const app = express();
const path = require('path');
// const db = require('./models')
// const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
 let manatees = [
     {
         name:'steve',
         color:'grey',
         favoriteFood: 'seagrass'
     },
     {
        name:'bob',
        color:'differnt grey',
        favoriteFood: 'other seagrass'
    }

 ]
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/', express.static(__dirname + '/static'));
 
app.get('/',function(req,res){
     res.sendFile(path.join(__dirname, 'views/home.html'));
})

app.get('/manatee',function(req,res){
    res.sendFile(path.join(__dirname, 'views/manatee.html'));
})
//add new manatee to the array
app.post('/manatee',function(req,res){
   newManateeObj = {
       name:req.body.name,
       color:req.body.color,
       favoriteFood:req.body.favoriteFood
   }
   manatees.push(newManateeObj);
   res.json(manatees);
})

app.listen(PORT);