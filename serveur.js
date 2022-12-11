const http =require("http")
//ena honi 3amlet importation

const serveur = http.createServer((req,res)=>{
       res.write ("<h1>HELLO NODE !!</h1>")
       res.end()
} )

//createserveur hiya bch ta3mli srveur 
serveur.listen (5000,()=>{
    console.log("serveur run")
})
//asm3ni ya serveur //()=>tasn3li fonction met3i 





