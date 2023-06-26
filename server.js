const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

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

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname,'index.html')));

// app.post('/submit', (req, res) => {
//   const { name, age } = req.body;
//   res.send("Submitted Form Data: Name - ${name}, Age - ${age}");
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'index.html'));
// });
