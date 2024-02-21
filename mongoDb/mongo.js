import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017")
.then(() => {
  console.log("MongoDB connected");
})
.catch(() => {
  console.log("Failed to connect");
})

const v_formSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  domain : {
    type : String,
    required : true
  },
  semester: {
    type : String,
    required : true
  },
  essay : {
    type : String,
    required : true
  },
})

const vform = mongoose.model("vform", v_formSchema);

export default vform