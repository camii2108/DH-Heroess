//entry point 
const express = require ("express"); // requiero el framework 
const app = express();//EJECUTO EXPRESS => me pone a disposion un objeto con cosas dentro 
const path = require("path");

app.use(express.static("public"));


app.get("/", (req, res)=>{
    console.log(req.query.user)
    // let saludo = "Hola Comision 19" + req.query.user
    let saludo = "<h1> Hola mundo  </h1>"
    return res.send(saludo)       //send solo me permite mandar texto plano res.send envia el dato y corta la respuesta+ con rest write envia respuesta
}) //utilizo el metodo "get" para ir a la ruta 1 parametro = ruta la que auiero escuchar o ir 2 parametro un callback: unrequire  cada que quiera ir a la ruta

app.get("/home",(req, res) => {
    return res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get("/babbage",(req, res) => {
    return res.sendFile(path.join(__dirname, "/views/babbage.html"))
})
app.get("/berners-lee", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
})
app.get("/clarke", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/clarke.html"))
})
app.get("/hamilton", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})
app.get("/hopper", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/hopper.html"))
})
app.get("/lovelace", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/lovelace.html"))
})
app.get("/turing", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/turing.html"))
})

app.listen(3030, ()=>console.log("El servidor esta escuchando en el puerto 3030"))// me escucha =>1 parametro el "puerto" 2 parametro=>  le pasamos por consola un 

/*
● / -> Debe direccionar al recurso index.html.
● /babbage -> Debe direccionar al recurso babbage.html
● /berners-lee -> Debe direccionar al recurso berners-lee.html.
● /clarke -> Debe direccionar al recurso clarke.html.
● /hamilton -> Debe direccionar al recurso hamilton.html.
● /hopper -> Debe direccionar al recurso hopper.html.
● /lovelace -> Debe direccionar al recurso lovelace.html.
● /turing-> Debe direccionar al recurso turing.html. */