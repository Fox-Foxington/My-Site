import express from "express";
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT;


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Form submission route
app.post('/send-email', (req, res) => {
  // Get form data
  const { name, email, subject, message } = req.body;

  // Send email logic
  // Replace this with your actual email sending logic using nodemailer
  // Example:
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: 'recipient@example.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/links", (req, res) => {
    res.render("links.ejs");
});

app.get("/projects", (req, res) => {
    res.render("projects.ejs");
});

app.get("/discord", (req, res) => {
    res.redirect("https://discord.gg/MAeuGeCppy");
});

app.get("/htb", (req, res) => {
    res.redirect("https://app.hackthebox.com/profile/1524555");
});

app.get("/github", (req, res) => {
    res.redirect("https://github.com/Fox-Foxington");
});

app.get("/cashapp", (req, res) => {
    res.redirect("https://cash.app/$yukikogitsune");
});
app.listen(port, () => {
    console.log(`Server ruinning on port ${port}.`);
})