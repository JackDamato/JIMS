const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://mangia3:linked@linked-cluster.afu0s.mongodb.net/linked_database'; // Replace with your connection string

// Create Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    age: String,
    gender: String,
    bio: String,
    major: String,
    year: String,
    clubs: String
});

//MongoDB Compatability Schema
const compatibilitySchema = new mongoose.Schema({
    
})

// Create User model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API route to handle user data submission
app.post('/api/users', async (req, res) => {
    const userData = req.body;

    const user = new User(userData);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/api/auth', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            // Compare passwords here (e.g., using bcrypt)
            // If correct, return user data
            return res.status(200).send(user);
        } else {
            return res.status(404).send(user);
        }
    } catch (error) {
        return res.status(404).json({ message: 'Error fetching user data', error });
    }
});

app.get('/api/items', async (req, res) => {
    try {
        const items = await User.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
