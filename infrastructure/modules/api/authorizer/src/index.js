const { getAuthToken } = require('./getAuthToken');

function generatePolicy(principalId, effect, resource) {
  const authResponse = {};

  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
}

module.exports.handler = async (event) => {
  const token = event.authorizationToken;


  const appAuthToken = await getAuthToken(`/${process.env.APP}/${process.env.ENV}/api_auth_token`);

  if (token === appAuthToken) {
    return generatePolicy('user', 'Allow', event.methodArn);
  }
  throw new Error('Unauthorized');
};
