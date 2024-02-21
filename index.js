const express = require("express");
const app =  express();





app.get("/",  function(req, res)
{
res.send("ola mundo, meu nome é daniel herculano")



});
 
app.get("/sobre", function (req, res){

    res.send("minha sobre")



});
app.get("/blog", function (req, res){

    res.send("meu blog")



});
app.get("/contato", function (req, res){

    res.send("meu contato")



});
app.get('/ola/:nome/:cargo',function(req,res){
 res.send("<h1>ola"+ " " + req.params.nome + ", seu cargo é de: " + req.params.cargo + "</h1>");
 



});


app.get('/quetal/:nome/:idade', function(req, res){

    res.send("ola, seu nome é: " + " " + req.params.nome +  " " + " e sua idade é de " +  " " + req.params.idade + " anos de idade" + " gostaria de dizer que finalmente posso dizer que eu sou programador jr." )
});


app.listen(8081 , function(req, res){
    console.log("servidor rodando no localhost:8081")





  });

