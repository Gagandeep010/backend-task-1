const express = require('express');
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  const response = `
    <html>
      <body>
        <h1>Submitted Data:</h1>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
      </body>
    </html>
  `;

  res.send(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
