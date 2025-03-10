const express = require('express');
const fileUpload = require('express-fileupload');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(fileUpload());

app.post('/upload', (req, res) => {
  console.log('/upload endpoint hit');
  if (!req.files || Object.keys(req.files).length === 0) {
    console.log('No files were uploaded.');
    return res.status(400).send('No files were uploaded.');
  }

  const audioFile = req.files.audio;
  const uploadPath = path.join(__dirname, 'uploads', audioFile.name);

  // Ensure the uploads directory exists
  if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
    fs.mkdirSync(path.join(__dirname, 'uploads'));
  }

  // Ensure the midi directory exists
  if (!fs.existsSync(path.join(__dirname, 'midi'))) {
    fs.mkdirSync(path.join(__dirname, 'midi'));
  }

  // Save the audio file
  audioFile.mv(uploadPath, (err) => {
    if (err) {
      console.log('Error saving the file:', err);
      return res.status(500).send(err);
    }

    const outputDir = path.join(__dirname, 'midi');
    const command = `python3 midi_extractor.py ${uploadPath} ${outputDir}`;

    // Execute the Python script
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.log('Error executing the Python script:', err);
        return res.status(500).send(err);
      }

      const midiFileName = audioFile.name.replace(path.extname(audioFile.name), '.mid');
      const midiFilePath = path.join(outputDir, midiFileName);
      console.log('MIDI file created:', midiFilePath);
      res.download(midiFilePath);
    });
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
