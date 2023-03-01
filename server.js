const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const app = express();
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://james821202004:Zxc8152789@inventorydatabasecluste.t1z3bap.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function connect() {
    try {
        await mongoose.connect(uri);
        // database and collection code goes here
        const db = client.db("JenHongCheng");
        const coll = db.collection("UserAccounts");

        // insert code goes here
        const docs = [
            { name: "Halley Comet", PhoneNumber: "0928876287", Task: "working", Account: "Jacob16372", Password: "A2bcd@@123", _id: "2" }
        ];

        const result = await coll.insertMany(docs);

        // display the results of your operation
        console.log(result.insertedIds);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        //await mongoose.close();//不確定
    }
}
connect().catch(console.dir);


app.listen(5500, () => {
    console.log("Server started on port 5500");
});

