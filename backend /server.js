const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(express.json());

// To avoid unnecessary recreation of the array every time a request is made to the /generate endpoint.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'pink', 'brown'];
app.use(cors());
app.post('/generate', (req, res) => {
  const input = req.body.input;

  const minInput = 2;
  const maxInput = 10;

  if (input < minInput || input > maxInput) {
    return res.status(400).json({ error: `Input must be between ${minInput} and ${maxInput}` });
  }

// Generate the response array based on the input
  const responseArray = Array.from({ length: input }, (_, index) => ({
    value: index + 1,
    type: 1,
    color: colors[index],
    angle: 180,
  }));

  res.json(responseArray);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

