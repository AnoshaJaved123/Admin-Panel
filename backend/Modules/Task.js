const mongoose = require('mongoose');
const { Schema } = mongoose;


const TaskSchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    detail:{
        type:String,
        required:true
    }
    // items:[{
    //     name:{
    //         type:String,
    //         required:true,
    //     }
    // }]
});
const Task = mongoose.model('task', TaskSchema);

module.exports = Task
