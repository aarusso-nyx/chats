const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient();

const update = async (topic, field, increment) => {
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

      return update ( topic, field(image), delta );
    });

  return Promise.all(ups);
}