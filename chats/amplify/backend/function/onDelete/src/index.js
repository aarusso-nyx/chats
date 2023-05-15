/* Amplify Params - DO NOT EDIT
	API_CHATS_GRAPHQLAPIIDOUTPUT
	API_CHATS_MESSAGETABLE_ARN
	API_CHATS_MESSAGETABLE_NAME
	API_CHATS_STATUSTABLE_ARN
	API_CHATS_STATUSTABLE_NAME
	API_CHATS_SUBSCRIBETABLE_ARN
	API_CHATS_SUBSCRIBETABLE_NAME
	API_CHATS_TOPICTABLE_ARN
	API_CHATS_TOPICTABLE_NAME
	ENV
	REGION
	STORAGE_S3CHATSSTORAGE618DC1B5_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// on delete topic, delete all messages and subscriptions
const { DynamoDBClient, BatchWriteItemCommand } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient();

const remove = async (table, topic) => {
	const params = new DeleteBatchCommand({
		RequestItems: { [table]: [ { DeleteRequest: { Key: { "topicId": { S: topic } } } } ] }
	});

	const command = new BatchWriteItemCommand(params);
	return client.send(command);
};

exports.handler = event => {
	const msgTable = process.env.API_CHATS_MESSAGETABLE_NAME;
	const subTable = process.env.API_CHATS_SUBSCRIBETABLE_NAME;
	
	// delete all messages and subscriptions
	const ups = event.Records
		.filter ( r => r.eventName === 'REMOVE' )
		.map(r => {
			const topic = r.dynamodb.OldImage.id.S;
		
			return Promise.all([
				remove(msgTable, topic),
				remove(subTable, topic),
			]);
		});

  	return Promise.all(ups);
}