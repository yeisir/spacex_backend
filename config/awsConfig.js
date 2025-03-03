import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

export const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION || 'us-east-2',
});
