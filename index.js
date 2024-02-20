const express = require("express");
const app =  express();





app.get("/",  function(req, res)
{
res.send("hell, world!! My name is daniel")



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
app.get('/ola',function(req,res){
 res.send('ola')



});


app.listen(8081 , function(req, res){
    console.log("servidor rodando no localhost:8081")





  });

