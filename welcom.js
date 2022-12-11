const http = require('http')
const fs = require('fs')
//from =>require
const path = "welcome.txt"
//hethiya el fichier eli bech nsn3o 
const data = "Hello Node"
//data eli bech yetkteb fi west path 


const welcome = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/html;charset=utf8"})
    fs.writeFile(path,data,'utf8',(err)=>{
        //bch yasn3like fichie ou yektblike fi westo 
        if(err) throw err
         console.log("Hello Node")
         res.write('Hello Node')
         res.end()
    })
})
console.log('connected')
welcome.listen(3000)