const mongoose = require('mongoose');
const {Schema} = mongoose;  

const testSchema = new Schema({
    name: {type: String, required:true}, 
    position: {type: String, required: true},
    office: {type:String, reqired: true},
    salary: {type:Number,required: true}
});

module.exports = mongoose.model('testSc', testSchema);