const { CognitoIdentityProviderClient, ListUsersCommand } = require("@aws-sdk/client-cognito-identity-provider");
const cognito = new CognitoIdentityProviderClient();

exports.handler = async (event) => {
    const input = {
      UserPoolId: 'sa-east-1_k5XPbk74g',
      AttributesToGet: ['email', 'name'], // Customize the attributes as needed
    };

    const command = new ListUsersCommand(input);
    const response = await cognito.send(command);

    return response.Users.map((user) => ({
        username: user.Username,
        email: user.Attributes.find((attr) => attr.Name === 'email').Value,
        name: user.Attributes.find((attr) => attr.Name === 'name').Value
    }));
};