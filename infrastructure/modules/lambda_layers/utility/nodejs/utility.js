// A lambda layer for all shared methods between lambda functions

function generateHeaders() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };
  return headers;
}

function apiResponse(res) {
  const headers = generateHeaders();
  return {
    headers,
    statusCode: res.statusCode,
    body: JSON.stringify(res.payload),
  };
}


module.exports = {
  apiResponse,
};
