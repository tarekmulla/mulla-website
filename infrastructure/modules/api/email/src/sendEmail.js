const AWS = require('aws-sdk');
const SES = new AWS.SES();

const SENDER_EMAIL = "no-reply@mulla.au";

async function sendEmail(toEmail) {
  const params = {
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Body: {
        Html: { Data: "Hellloooooo" }
      },
      Subject: {
        Data: "Test email"
      },
    },
    Source: SENDER_EMAIL
  };
  await SES.sendEmail(params).promise();
}

module.exports = {
  sendEmail
};
