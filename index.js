import express from "express";
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

const client = new Discord.Client({ intents: [""] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

async function sendToDiscord(message) {
  try {
    const channel = await client.channels.fetch(process.env.CHANNELID);
    if (channel) {
      await channel.send(message);
      console.log('Message sent to Discord');
    } else {
      console.error('Unable to find Discord channel');
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
  // Email sending logic
});

app.post('/click', (req, res) => {
  const { link } = req.body;
  if (link) {
    sendToDiscord(`Link clicked: ${link}`);
    res.sendStatus(200);
  } else {
    res.status(400).send('Bad request');
  }
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Other routes...

app.get("/discord", (req, res) => {
  sendToDiscord('Discord invite link clicked');
  res.redirect(process.env.DISCORD_LINK);
});

app.get("/htb", (req, res) => {
  sendToDiscord('Hack The Box profile link clicked');
  res.redirect(process.env.HTB_LINK);
});

app.get("/github", (req, res) => {
  sendToDiscord('GitHub profile link clicked');
  res.redirect(process.env.GITHUB_LINK);
});

app.get("/cashapp", (req, res) => {
  sendToDiscord('Cash App profile link clicked');
  res.redirect(process.env.CASHAPP_LINK);
});

app.listen(port, () => {
  console.log(`Main app is running on port ${port}`);
});

client.login(process.env.DISCORDTOKEN)
  .catch(error => console.error('Error logging in to Discord:', error));
