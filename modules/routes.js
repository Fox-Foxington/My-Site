import express from 'express';
import axios from 'axios';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname); // Obtain directory name using import.meta.url

const router = express.Router();

// Define the path to the public directory
const publicDir = path.join(__dirname, '..', 'public');

router.get("/", (req, res) => {
  const message = 'Site Viewed';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      res.redirect('index.ejs');
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
    });
});
// Error handling for /contact route
router.get("/contact", (req, res) => {
  try {
    res.render("contact.ejs");
  } catch (error) {
    console.error('Error rendering contact:', error);
    res.status(500).sendFile(path.join(publicDir, 'images', 'fox.png'));
  }
});

// Error handling for /about route
router.get("/about", (req, res) => {
  try {
    res.render("about.ejs");
  } catch (error) {
    console.error('Error rendering about:', error);
    res.status(500).sendFile(path.join(publicDir, 'images', 'fox.png'));
  }
});

// Error handling for /links route
router.get("/links", (req, res) => {
  try {
    res.render("links.ejs");
  } catch (error) {
    console.error('Error rendering links:', error);
    res.status(500).sendFile(path.join(publicDir, 'images', 'fox.png'));
  }
});

// Error handling for /projects route
router.get("/projects", (req, res) => {
  try {
    res.render("projects.ejs");
  } catch (error) {
    console.error('Error rendering projects:', error);
    res.status(500).sendFile(path.join(publicDir, 'images', 'fox.png'));
  }
});

// Error handling for /projects route
router.get("/projects", (req, res) => {
  try {
    res.render("projects.ejs");
  } catch (error) {
    console.error('Error rendering projects:', error);
    res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
  }
});

router.get("/discord", (req, res) => {
  const message = 'Discord invite link clicked';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      console.log('Message sent to bot successfully');
      res.redirect(process.env.DISCORD_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.join(publicDir, 'images', 'fox.png'));
    });
});

// Error handling for /wishlist route
router.get("/wishlist", (req, res) => {
  const message = 'Wishlist link clicked';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      res.redirect(process.env.WISHLIST_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
    });
});

// Error handling for /htb route
router.get("/htb", (req, res) => {
  const message = 'Hack The Box profile link clicked';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      res.redirect(process.env.HTB_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
    });
});

// Error handling for /github route
router.get("/github", (req, res) => {
  const message = 'Github profile link clicked';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      res.redirect(process.env.GITHUB_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
    });
});

// Error handling for /cashapp route
router.get("/cashapp", (req, res) => {
  const message = 'Cash App link clicked';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      res.redirect(process.env.CASHAPP_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
    });
});

// Error handling for /paypal route
router.get("/paypal", (req, res) => {
  const message = 'PayPal link clicked';
  axios.post(process.env.LOCALHOST_LINK, { message })
    .then(response => {
      res.redirect(process.env.PAYPAL_LINK);
    })
    .catch(error => {
      console.error('Error sending message to bot:', error);
      res.status(500).sendFile(path.resolve(__dirname, '..', 'public', 'images', 'fox.png'));
    });
});

export default router;
