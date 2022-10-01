const {Schema,model, default: mongoose} = require("mongoose")

// Name, Subject, Marks & Date
const TestSchema = new Schema({
    name:{type:String,required:true},
    subject:{type:String,required:true},
    marks:{type:Number,required:true},
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    date:{type:String},
},
{
    timestamps:true
}
);

const Test = model("test",TestSchema);

module.exports = Test