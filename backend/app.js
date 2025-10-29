const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/dockerapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js + MongoDB + Docker!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
