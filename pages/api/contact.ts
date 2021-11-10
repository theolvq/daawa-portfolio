import { NextApiRequest, NextApiResponse } from 'next';
import { SentMessageInfo } from 'nodemailer';
require('dotenv').config();
const nodemailer = require('nodemailer');

const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });
  const mailData = {
    from: EMAIL,
    to: 'theo.leveque@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: `
    <p>${req.body.message}</p>
    <a href='mailto:${req.body.email}'>Click here to reply to ${req.body.email}</a>
    `,
  };
  transporter.sendMail(mailData, (err: Error, info: SentMessageInfo) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      console.log(info);
      res.status(200).send('Message sent!');
    }
  });
}
