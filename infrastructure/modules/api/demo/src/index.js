const { apiResponse, jsonEscape } = require('/opt/nodejs/utility');
const { sendEmail } = require('./sendEmail');

module.exports.handler = async (event) => {
  let res;
  let data;
  try {
    if (event.body !== null && event.body !== undefined) {
      let bodyContent = jsonEscape(event.body);
      let body = JSON.parse(bodyContent);
      console.info(body);
      if (body.data)
        data = body.data;
      else {
        throw new Error("Request body missing required parameters");
      }
    }
    else {
      throw new Error("The request body is not valid");
    }
    await sendEmail("", data, "Ethical Hacking");
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
