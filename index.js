import express from "express";
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import Discord from 'discord.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// Serve static files from the 'pics' directory
app.use('/pics', express.static('/home/fox/pics'));

app.post('/send-email', (req, res) => {
  // Email sending logic
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Route handlers for main app
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

// Other routes...

app.get("/discord", (req, res) => {
  const message = 'Discord invite link clicked';
  axios.post('http://localhost:3004/receive-message', { message })
    .then(response => {
      console.log('Message sent to bot successfully');
      res.redirect(process.env.DISCORD_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.get("/wishlist", (req, res) => {
  const message = 'Wishlist link clicked';
  axios.post('http://localhost:3004/receive-message', { message })
    .then(response => {
      res.redirect(process.env.WISHLIST_LINK);
    })
  });

  app.get("/htb", (req, res) => {
    const message = 'Hack The Box profile  link clicked';
    axios.post('http://localhost:3004/receive-message', { message })
      .then(response => {
        res.redirect(process.env.HTB_LINK);
      })
    });

    app.get("/github", (req, res) => {
      const message = 'Github profile link clicked';
      axios.post('http://localhost:3004/receive-message', { message })
        .then(response => {
          res.redirect(process.env.GITHUB_LINK);
        })
      });


      app.get("/cashapp", (req, res) => {
        const message = 'Cash App link clicked';
        axios.post('http://localhost:3004/receive-message', { message })
          .then(response => {
            res.redirect(process.env.CASHAPP_LINK);
          })
        });

        app.get("/paypal", (req, res) => {
          const message = 'PayPal link clicked';
          axios.post('http://localhost:3004/receive-message', { message })
            .then(response => {
              res.redirect(process.env.PAYPAL_LINK);
            })
          });


app.listen(port, () => {
  console.log(`Main app is running on port ${port}`);
});
