const { apiResponse } = require('/opt/nodejs/utility');
const { sendEmail } = require('./sendEmail');

module.exports.handler = async (event) => {
  let res;
  let to;
  try {
    if (event.body !== null && event.body !== undefined) {
      let body = JSON.parse(event.body);
      console.info(body);
      if (body.to) {
        to = body.to;
      }
      else {
        throw new Error("Request body doesn't contain 'To' value");
      }
    }
    else {
      throw new Error("The request body is missing");
    }
    await sendEmail(to);
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
