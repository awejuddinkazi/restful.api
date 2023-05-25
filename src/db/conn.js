const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user-api", {
    useCreateindex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connection is successful");
}).catch.log((e) =>{
    console.log("No connection");
})