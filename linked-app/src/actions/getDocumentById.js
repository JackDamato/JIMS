const { MongoClient, ObjectId } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/';
const dbName = 'linked_database';

async function getDocumentById(id) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Connected to database');

        const db = client.db(dbName);
        const collection = db.collection('users');

        // Find the document by ID
        const document = await collection.findOne({ _id: ObjectId(id) });

        if (document) {
            return(document);
        } else {
            return('');
        }
    } catch (err) {
        console.error('Error retrieving document:', err);
    } finally {
        await client.close();
    }
}

export default getDocumentById();