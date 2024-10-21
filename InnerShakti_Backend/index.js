const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/innerbhakti', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error(err);
});

// Program Model
const ProgramSchema = new mongoose.Schema({
    name: String,
    image: String,
    tracks: [
        {
            name: String,
            audioUrl: String
        }
    ]
});

const Program = mongoose.model('Program', ProgramSchema);

// API Routes

// Fetch Program List
app.get('/api/programs', async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching programs' });
    }
});

// Fetch Program Details by ID
app.get('/api/programs/:id', async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);
        res.json(program);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching program details' });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
