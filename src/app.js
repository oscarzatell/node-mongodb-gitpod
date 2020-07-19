const express = require("express");
const app = express();

const Task = require("./model/Task");

//Configuraciones
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//mandar json por express (Middlewares)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", async (req, res) =>{
    const task = await Task.find();
    res.render("index",{task});
})


//Crear Tarea
app.post("/create", async (req, res)=> {
    const newTask = new Task({
        task: req.body.task,
        description: req.body.description
    });
    await newTask.save();
    res.redirect("/");
})

//Archivos estaticos
app.use(express.static(__dirname + "/public"));

module.exports = app;