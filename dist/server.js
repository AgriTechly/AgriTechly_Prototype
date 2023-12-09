const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve your HTML file
app.use(express.static('public'));

// Handle file upload and execute Python script based on image type
app.post('/process', upload.single('image'), (req, res) => {
  // Get the uploaded image data
  const imageBuffer = req.file.buffer;

  // Save the image data to a temporary file (optional)
  // You can skip this step if you want to process the image directly from the buffer

  // Determine the type of image (bee or plant) based on some condition
  const isBee = true; // Replace this condition with your logic

  // Execute the corresponding Python script
  const pythonScript = isBee ? '../script/predict_bee.py' : '../script/predict_plant.py';
  exec(`python ${pythonScript} ${path_to_temp_image}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res.status(500).send('Internal Server Error');
    }

    // Process the output from the Python script (stdout)
    const result = stdout.trim();

    // Send the result back to the client
    res.send(`Python script result: ${result}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
