// npm install winston winston-cloudwatch

const winston = require('winston');
const WinstonCloudWatch = require('winston-cloudwatch');

const logger = winston.createLogger({
    level: 'info', // Set the logging level
    transports: [
        new WinstonCloudWatch({
            logGroupName: 'your-log-group-name', // Name of the CloudWatch log group
            logStreamName: 'your-log-stream-name', // Name of the CloudWatch log stream
            awsRegion: 'your-aws-region', // AWS region where the logs will be stored
            jsonMessage: true, // Set to true to log the messages as JSON objects
            retentionInDays: 7, // Number of days to retain the logs in CloudWatch
            messageFormatter: ({ level, message, meta }) => {
                return `[${level}] ${message} ${JSON.stringify(meta)}`;
            },
        }),
    ],
});

// logger.info('This is an informational log message.', { additionalData: 'Some extra information' });
// logger.error('An error occurred.', { error: 'Some error details' });

