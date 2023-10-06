const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const telegram_bot_id = "6478474280:AAEtVYpSeZGWvW88zxAl5GcH0j6_Q3sHp7g";
const chat_id = -4064464212;


// Serve static files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/templates', express.static(path.join(__dirname, 'templates')));
app.use('/css/fonts', express.static(path.join(__dirname, 'css/fonts')));



// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies
app.use(express.json());

// POST Endpoint
app.post('/', (req, res) => {
    console.log(req.body);
    // Note: Di sini Anda bisa melakukan apapun dengan data yang diterima.
    // Misalnya, menyimpannya ke database, mengirim email, dll.
    res.send('Data received!');
});

// This will serve your root directory
// app.use('/', express.static(__dirname));
app.use(express.static('public'));

// GET Endpoint for root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send', (req, res) => {
  const data = req.body;
  console.log(data);

  // Siapkan pesan untuk dikirim ke Telegram
  const message = `
Name: ${data.name}
Email: ${data.email}
Mobile Number: ${data.mobilenumber}
Email Subject: ${data.emailsubject}
Message: ${data.message}
  `;

  axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })
  
  axios.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
  })
  
  // Kirim pesan ke Telegram
  axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      chat_id: chat_id,
      text: message
  })
  .then(response => {
      console.log("Message sent: ", response.data);
      res.send("Data Received and sent to Telegram!");
  })
  .catch(error => {
      console.error("There was an error sending the message to Telegram: ", error);
      res.status(500).send("There was an error sending the message to Telegram.");
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});