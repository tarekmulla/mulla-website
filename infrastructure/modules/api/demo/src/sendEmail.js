const AWS = require('aws-sdk');
const SES = new AWS.SES();

const SENDER_EMAIL = "no-reply@mulla.au";
const RECEIVER_EMAIL = "tarek@mulla.au";

async function sendEmail(email, message, name) {
  const params = {
    Destination: {
      ToAddresses: [RECEIVER_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Data: "Data received from " + name + ", the data is: " + message
        }
      },
      Subject: {
        Data: "Ethical Hacking demo"
      },
    },
    Source: SENDER_EMAIL
  };
  await SES.sendEmail(params).promise();
}

module.exports = {
  sendEmail
};
