
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://scalable_group_15:scalable_group_15@cluster0.oci0nqv.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const dbName = "scalable_services";
    const collectionName = "Jokes";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);



  try {
    const cursor = await collection.find();
    const jokesArray = []

    await cursor.forEach(item => {
        jokesArray.push(item.joke)
      });

    // add a linebreak
    //console.log(jokesArray);
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    const randomRecord = jokesArray[randomIndex];
    console.log(randomRecord)
    return randomRecord
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
