const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'spyfilip@gmail.com', // Replace with your recipient's email address
  from: 'argentinos1050@gmail.com', // Replace with your verified sender's email address
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
    process.exit(0); // Exit with a zero code to indicate success
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  });

