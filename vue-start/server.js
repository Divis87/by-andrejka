require('punycode');

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());

// nastavenie úložiska pre multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const uploadDate = new Date().toISOString().slice(0,10);
    const email = req.body.email;
    const uploadDir = path.join('src', 'upload', uploadDate, email);

    if (!fs.existsSync(uploadDir)){
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  const { name, password, email } = req.body;

  // TODO: spracovanie údajov (meno, heslo)

  // odoslanie potvrdzujúceho e-mailu
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'divisko@gmail.com',
      pass: 'cejj zdcu zdjn xwwv'
    }
  });

  let mailOptionsUser = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Potvrdenie nahrávania',
    html: `<div>
    <h1>Nové nahrávanie</h1>
    <p>Vážení ${name} (${email}).</p>
    <img src="cid:unique@by-andrejka.sk" alt="Nahraný obrázok" style="max-width: 560px;color:gray;font-size: 10px;line-height: 10px" />
    <p>S pozdravom,</p>
    <p>Váš tím by-andrejka</p>
  </div>`,
    attachments: [
      {
        filename: req.file.originalname,
        path: path.join(req.file.destination, req.file.filename),
        cid: 'unique@by-andrejka.sk' //same cid value as in the html img src
      }
    ]
  };

  let mailOptionsAdmin = {
    from: 'your-email@gmail.com',
    to: 'divisko@gmail.com',
    subject: 'Nové nahrávanie',
    text: `Užívateľ ${name} (${email}) nahral nový súbor.`,
    attachments: [
      {
        filename: req.file.originalname,
        path: path.join(req.file.destination, req.file.filename)
      }
    ]
  };

  transporter.sendMail(mailOptionsUser, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent to user: ' + info.response);
    }
  });

  transporter.sendMail(mailOptionsAdmin, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent to admin: ' + info.response);
    }
  });

  res.status(200).json({ message: 'Súbor úspešne nahraný!' });
});

app.listen(3000, () => console.log('Server beží na porte 3000.'));
