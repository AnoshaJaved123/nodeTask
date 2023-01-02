const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const fileSchema = new Schema({
   
name:{
    type: String,
    required : true

},
content: Object,
date:{
    type: Date,
    default: Date.now
}
});
const File =  mongoose.model("file",fileSchema);
module.exports =  File;


