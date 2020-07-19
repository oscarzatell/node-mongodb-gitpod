const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
    task: {
        type: String,
        require: true
    },
    description: String
});

module.exports = model("Task", TaskSchema);