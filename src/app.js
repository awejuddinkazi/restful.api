const express = required("express");
require("./db/conn");
const User = require("./models/user")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//create a new user
app.post("/user",(req,res) => {
  console.log(req.body);
  const user = new User(req.body);

  user.save().then(() => {
    res.staus(201);
    res.send(e);
  }).catch((e) => {
    res.status(400).send(e);
  })

})

app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
})
