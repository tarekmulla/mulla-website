module.exports.handler = async (event) => {
  let res;
  res = {
    statusCode: 200,
    payload: {
        message: "Success",
      }
  };
  return apiResponse(res);
};

function apiResponse(res) {
  return {
    statusCode: res.statusCode,
    body: JSON.stringify(res.payload),
  };
}
