import mongoose from "mongoose";

mongoose.connect(process.env.KEY)
    .then(() => console.log("connection completed"))
    .catch(error => console.log(error));
