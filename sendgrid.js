const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'pradhyumna0204@gmail.com',
  from: 'pradhyumna0204@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);




//---------------------------------------------------------------------------------------------------------------
//require('dotenv').config()
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey("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");
// const msg ={
//     to:"pradhyumna0204@gmail.com",
//     from:"pradhyumna0204@gmail.com",
//     subject:"Sending with sendGrid is fun",
//     text:"and easy to do anywhere , even with node.js",
//     html:"<strong> and easy to do anywhere , even with node.js </strong>",
// }
// const work = async () => {
//     try {
//         const sgResponse = await sgMail.send(msg);
//         console.log("Mail sent!");
//     } catch (error) {
//         console.error(error);
//     }
// }
// work()
//--------------------------------------------------------------------------------------------------