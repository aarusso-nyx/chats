const axios = require('axios');

const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient();

const updateDB = async (topic, field, increment) => {
  const params = {
    TableName: 'Topic-uy3cshk2f5clhle3gk7dynqgtq-staging',
    Key: { "id": { S: topic } },
    UpdateExpression: `SET ${field} = ${field} + :increment`,
    ExpressionAttributeValues: { ':increment': { N: String(increment) } },
    ReturnValues: 'ALL_NEW',
  };

  const command = new UpdateItemCommand(params);
  return client.send(command);
};

const updateQL = async (topic, field, increment) => {
  let n;


  if (field === 'n_subs') {
    // get topics(topic).n_subs from dynamodb
  } else if (field === 'n_msgs') {
    // get topics(topic).n_msgs from dynamodb
  }
    



  const gqlMutation = `
  mutation UpdateTopic($id: ID!, $n_subs: Int!, $n_msgs: Int!) {
    updateTopic(input: { id: $id, n_subs: $n_subs, n_msgs: $n_msgs }) {
      id
      n_subs
      n_msgs
    }
  }
  `;

  const appSyncApiUrl = 'https://your-appsync-api-endpoint/graphql'; // Replace with your AppSync API endpoint URL

  return axios.post(appSyncApiUrl, {
    query: gqlMutation,
    variables: {
      id: topic,
      [field]: n+increment,
    },
  });




}



exports.handler = event => {
  const ups = event.Records
  .filter ( r => r.eventName === 'INSERT' || r.eventName === 'REMOVE' )
  .map(r => {
      const delta = r.eventName === 'INSERT' ? 1 : -1;
      const image = r.eventName === 'INSERT' ? r.dynamodb.NewImage : r.dynamodb.OldImage;
      const topic = image.topicId.S;
      const field = ( img ) => {
        return {
          'Message':   'n_msgs',
          'Subscribe': 'n_subs'
        }[img.__typename.S];
      };

      return updateDB ( topic, field(image), delta );
    });

  return Promise.all(ups);
}