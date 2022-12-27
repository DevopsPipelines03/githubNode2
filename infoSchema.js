const mongoose=require("mongoose");
const infoSchema = mongoose.Schema({


    //_id: Number,
    //_id: mongoose.Schema.Types.ObjectId,
    username: String,
    Name: String,
    Age:   Number,
    City: String,
    createdTime:{ type:Date, default:Date.now}
});


module.exports = mongoose.model("info",infoSchema);
