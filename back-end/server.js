const express = require('express')
const {MongoClient, ObjectId} = require('mongodb')
const assert = require('assert')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyparser.json())

const mongo_url = 'mongodb://localhost:27017'
const database = 'REST-API'
MongoClient.connect(mongo_url, { useUnifiedTopology: true }, (err,client)=>{
    assert.equal(err, null, 'database connexion failed')
    const db = client.db(database)

    app.get('/contacts', (req,res)=>{
        db.collection('contactlist').find().toArray((err, data)=>{
            if(err) console.log(err)
            else res.send(data)
        })
    })

    app.get('/contacts/:id', (req, res) => {
        let searchedContact =ObjectId(req.params.id)
        db.collection('contactlist').findOne({ _id: searchedContact}, (err, data) => {
            if (err) console.log(err)
            else res.send(data)
        })
    })

    app.post('/addcontact', (req, res) => {
        var newcontact = req.body
        db.collection('contactlist').insertOne(newcontact, (err, data) => {
            if (err) res.send(err)
            else res.send('contact added')
        })
    })
  app.put('/update/:id', (req,res)=>{
    var id = ObjectId(req.params.id)
    var modifycontact = req.body
    db.collection('contactlist').findOneAndUpdate({_id:id}, {...modifycontact}, (err,data)=>{
        if(err) res.send(err)
        else res.send("contact was modified")
    })

  })  
  app.delete('/deletecontact/:id', (req,res)=>{
      var id = ObjectId(req.params.id)
      db.collection('contactlist').findOneAndDelete({_id:id}, (err,data)=>{
          if(err) res.send(err)
          else res.send("contact deleted")
      })
  })
})
app.listen(3002, (err)=>{
    if(err) console.log("server not running")
    else console.log("sever is running")
})