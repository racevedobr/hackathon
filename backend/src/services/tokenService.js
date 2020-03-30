const twilio = require('twilio');

const { AccessToken } = twilio.jwt;
const { ChatGrant } = AccessToken;

const TWILIO_ACCOUNT_SID = 'AC7f1bcb64745b91d4c524c9cf5b6c0fba';
const TWILIO_CHAT_SERVICE_SID = 'ISb04c6a08a34b4fd7836a92f8e48a668c';
const TWILIO_API_KEY = 'SKc2178c057d64d4aad10fd614556d9e4e';
const TWILIO_API_SECRET = 'H9iylt1BUR2wb4rXfvMs5WbcegkIpzSA';

function TokenGenerator(identity, deviceId) {
  const appName = 'TwilioChat';

  // Create a unique ID for the client on their current device
  const endpointId = `${appName}:${identity}:${deviceId}`;

  // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device
  const chatGrant = new ChatGrant({
    serviceSid: TWILIO_CHAT_SERVICE_SID,
    endpointId,
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET
  );

  token.addGrant(chatGrant);
  token.identity = identity;

  return token;
}

module.exports = { generate: TokenGenerator };
