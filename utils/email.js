const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // Create a transporter
  console.log('sending email');
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  console.log(transporter);

  // Define the email options
  const mailOptions = {
    from: 'Danko Maksym <hello@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    //   html:
  };

  // Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
