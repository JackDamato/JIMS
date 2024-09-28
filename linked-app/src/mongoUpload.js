// import 'core-js/stable';
// import 'regenerator-runtime/runtime'; // If you're using async/await

// url: "mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/"


const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/"; // Replace with your MongoDB connection string

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('linked_database'); // Replace with your database name
    const collection = database.collection('users'); // Replace with your collection name

    const document = {
      username: "bhallin",
      password: "shreklover3000",
      email: "kbhal@gatech.edu",
      name: "Kaustubh Bhal",
      age: "19",
      gender: "Male",
      bio: "i like staring at walls and watching shrek in my head like a weirdo",
      major: "Computer Science",
      year: "2",
      clubs: "HyTech Racing, Synopta"
    };
    const result = await collection.insertOne(document);

    console.log(`Document inserted with ID: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}
main().catch(console.error);