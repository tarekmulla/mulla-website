// A lambda layer for all shared methods between lambda functions

function generateHeaders() {
  const headers = {
    'Access-Control-Allow-Origin': 'https://mulla.au',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'OPTIONS,PUT,POST,GET',
    'Access-Control-Allow-Credentials': true,
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
