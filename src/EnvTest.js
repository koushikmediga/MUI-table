import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const secretsManager = new AWS.SecretsManager();

export async function loadSecrets(): Promise<void> {
  try {
    const secretName: string | undefined = process.env.REACT_APP_SECRET_NAME;
    if (!secretName) {
      throw new Error('Secret name is not defined.');
    }

    const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    if ('SecretString' in data) {
      const secrets = JSON.parse(data.SecretString);

      Object.keys(secrets).forEach((key) => {
        process.env[key] = secrets[key];
      });
    }
  } catch (error) {
    console.error('Error retrieving secrets:', error);
  }
}
