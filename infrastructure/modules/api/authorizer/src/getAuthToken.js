/* eslint-disable no-console */
const AWS = require('aws-sdk');

const ssm = new AWS.SSM();

async function getAuthToken(authToken) {
  const options = {
    Name: authToken,
    WithDecryption: true,
  };

  return ssm
    .getParameter(options)
    .promise()
    .then((data) => data?.Parameter?.Value)
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });
}

module.exports = {
  getAuthToken,
};
