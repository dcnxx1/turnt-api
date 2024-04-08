import {
  CloudWatchLogsClient,
  DescribeLogGroupsCommand,
  FilterLogEventsCommand,
  GetLogEventsCommand,
} from '@aws-sdk/client-cloudwatch-logs';

const logClient = new CloudWatchLogsClient({
  region: 'eu-central-1',
  apiVersion: '2014-03-28',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

export async function getLogs(turn_id: string) {
  try {
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 5 * 60;
    const command = new DescribeLogGroupsCommand({
      logGroupNamePrefix: '/aws/events/mediaConvertCompleted',
    });
    const response = await logClient.send(command);
    if (response.logGroups && response.logGroups.length > 0) {
      const logGroupName = response.logGroups[0].logGroupName;
      const logCommand = new FilterLogEventsCommand({
        logGroupName: '/aws/events/mediaConvertCompleted',
        startTime: fiveMinutesAgo,
        limit: 10,
      });

      return await logClient.send(logCommand);
    } else {
      throw new Error(
        `Log group ${'/aws/events/mediaConvertCompleted'} not found`,
      );
    }
  } catch (err) {
    throw new Error('ERR GET LOGS CLOUDWATCH:>>' + err);
  }
}
