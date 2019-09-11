const storage = require('node-persist');
const express = require('express')
const app = express()
app.use(express.json())
 
//you must first call storage.init
storage.init( /* options ... */ );


app.get('/:id', function (req, res) {

        
        storage.getItem(req.params.id).then(data =>{
            return res.send(data);
        },err =>{
            return res.send(err); 
        })
})

app.post('/:id', function (req, res) {
    storage.setItem(req.params.id,req.body).then(data =>{
        return res.send(data);
    },err =>{
        return res.send(err); 
    })
})

app.listen(4300)
