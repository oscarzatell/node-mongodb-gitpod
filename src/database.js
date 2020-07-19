const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://oscarzatell:oscarzatell@cluster0.ugeiu.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Base de datos conectada"))
    .catch(e => console.log(e));