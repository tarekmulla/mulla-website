const { apiResponse } = require('/opt/nodejs/utility');
const { sendEmail } = require('./sendEmail');

module.exports.handler = async (event) => {
  let res;
  let email;
  let message;
  try {
    if (event.body !== null && event.body !== undefined) {
      let body = JSON.parse(event.body);
      console.info(body);
      if (body.email && body.message) {
        email = body.email;
        message = body.message;
      }
      else {
        throw new Error("Request body missing required parameters");
      }
    }
    else {
      throw new Error("The request body is not valid");
    }
    await sendEmail(email, message);
    res = {
      statusCode: 200,
      payload: {
        message: "Email sent successfully!",
      }
    };
  }
  catch (error) {
    console.error(error);
    res = {
      statusCode: 400,
      payload: {
        message: "Sending email failed!",
      }
    };
  }
  return apiResponse(res);
};
