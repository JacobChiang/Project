const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://james821202004:Zxc8152789@inventorydatabasecluste.t1z3bap.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(4000, () => {
    console.log("Server started on port 4000");
});

