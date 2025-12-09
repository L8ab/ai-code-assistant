const express = require('express');
const AICodeAssistant = require('./assistant');
require('dotenv').config();

const app = express();
app.use(express.json());

const assistant = new AICodeAssistant(process.env.OPENAI_API_KEY);

app.post('/generate', async (req, res) => {
  try {
    const code = await assistant.generateCode(req.body.prompt, req.body.language);
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/review', async (req, res) => {
  try {
    const review = await assistant.reviewCode(req.body.code, req.body.language);
    res.json({ review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`AI Code Assistant running on port ${PORT}`);
});
