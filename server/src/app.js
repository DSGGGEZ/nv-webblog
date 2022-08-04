let express = require('express')
let bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/status', function (req, res ){
 res.send('Hello nodejs server')
})
app.get('/hello/:person', function (req,res) {
 console.log('hello - ' + req.params.person)
 res.send('sey hello with ' + req.params.person)
})
// get user by id
app.get('/user/:userId', function (req, res) {
 res.send('ดูข้อมูลผู้ใช้งาน')
})
// get all user
app.get('/users', function (req, res) {
 res.send('เรียกข้อมูลผู้ใช้ทั้งหมด')
})
let port = 8081
app.listen(port, function () {
 console.log('server running on ' + port)
})