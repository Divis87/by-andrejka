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
  const { name, password, email, text, selectedItem, size, genderItem, colorItem } = req.body;

  // Načítajte obsah hlavičky a päty zo súborov
  const headerContent = fs.readFileSync('header.html', 'utf8');
  const footerContent = fs.readFileSync('footer.html', 'utf8');

  // Spojte hlavičku, strednú časť a pätu
  const emailContentUser = `
    ${headerContent}
    <div>
      <h1>Nové nahrávanie</h1>
      <p>Vážení ${name} (${email}).</p>
      <p>${text}</p>
      <p>Selected Item: ${selectedItem}</p>
      <p>Farba: ${colorItem}</p>
      <p>Pohlavie: ${genderItem}</p>
      <p>Size: ${size}</p>
      <img src="cid:unique@by-andrejka.sk" alt="Nahraný obrázok" style="max-width: 560px; color: gray; font-size: 10px; line-height: 10px" />
      <p>S pozdravom,</p>
      <p>Váš tím by-andrejka</p>
    </div>
    ${footerContent}
  `;

  // Spojte hlavičku, strednú časť a pätu
  const emailContentAdmin = `
    ${headerContent}
    <div>
      <h1>Nové nahrávanie</h1>
      <p>Vážení ${name} (${email}).</p>
      <p>${text}</p>
      <p>Selected Item: ${selectedItem}</p>
      <p>Farba: ${colorItem}</p>
      <p>Pohlavie: ${genderItem}</p>
      <p>Size: ${size}</p>
      <img src="cid:unique@by-andrejka.sk" alt="Nahraný obrázok" style="max-width: 560px; color: gray; font-size: 10px; line-height: 10px" />
      <p>S pozdravom,</p>
      <p>Váš tím by-andrejka</p>
    </div>
    ${footerContent}
  `;

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
    html: emailContentUser,
    attachments: [
      {
        filename: req.file.originalname,
        path: path.join(req.file.destination, req.file.filename),
        cid: 'unique@by-andrejka.sk' // rovnaká hodnota cid ako v html img src
      }
    ]
  };

  let mailOptionsAdmin = {
    from: 'your-email@gmail.com',
    to: 'divisko@gmail.com',
    subject: 'Potvrdenie nahrávania',
    html: emailContentAdmin,
    attachments: [
      {
        filename: req.file.originalname,
        path: path.join(req.file.destination, req.file.filename),
        cid: 'unique@by-andrejka.sk' // rovnaká hodnota cid ako v html img src
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

  res.status(200).json({ message: 'Skontrolujte si Váš e-mail.' });
});

app.listen(3000, () => console.log('Server beží na porte 3000.'));
