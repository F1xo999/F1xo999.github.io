const nodemailer = require('nodemailer');

console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // false for unencrypted/TLS connections, true for SSL connections
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
  authMethod: 'PLAIN',
});

const mailOptions = {
  from: 'argentinos1050@gmail.com',
  to: 'spyfilip@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  } else {
    console.log('Email sent:', info.messageId);
    process.exit(0);
  }
});


