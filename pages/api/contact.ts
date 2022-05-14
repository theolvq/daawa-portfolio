import { NextApiRequest, NextApiResponse } from 'next';
require('dotenv').config();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: process.env.SENDGRID_API_KEY,
      },
    }),
  );

  const mailData = {
    from: process.env.FROM_EMAIL,
    to: 'theo.leveque@gmail.com',
    subject: `Message from ${name}`,
    replyTo: email,
    text: message,
    html: `
    <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ message: 'Message sent' });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  }
}
