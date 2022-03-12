import { NextApiRequest, NextApiResponse } from 'next';
import { SentMessageInfo } from 'nodemailer';
require('dotenv').config();
const nodemailer = require('nodemailer');

const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      type: 'OAuth2',
      user: EMAIL,
      pass: PASSWORD,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
  const mailData = {
    from: EMAIL,
    to: 'theo.leveque@gmail.com',
    subject: `Message from ${req.body.name}`,
    replyTo: req.body.email,
    text: req.body.message,
    html: `
    <p>${req.body.message}</p>
    `,
  };

  try {
    const info: SentMessageInfo = await transporter.sendMail(mailData);
    console.log(info);
    res.status(200).json({ message: 'success' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    }
  }
}
