var express=require("express");
var app=express();

const port = process.env.PORT || 8090;
app.get("/",function(req,res){
    return  res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color:bisque;

        }
        h2{
            color: red;
        }
        h4{
            color:blue;
        }
    </style>
</head>
<body>
    <h2>Welcome to Node App</h2>
    <h4>Hi Hello</h4>
</body>
</html>
        
        `)
})

app.get("/health",function(req,res){
    return res.send("Success");
})

app.listen(port,function(){
    console.log("Connected....")
})