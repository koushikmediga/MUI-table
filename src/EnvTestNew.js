import AWS from 'aws-sdk';
import fs from 'fs';

const secretsManager = new AWS.SecretsManager();

export async function fetchSecrets(): Promise<void> {
  try {
    const secretName: string | undefined = process.env.REACT_APP_SECRET_NAME;
    if (!secretName) {
      throw new Error('Secret name is not defined.');
    }

    const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    if ('SecretString' in data) {
      const secrets = JSON.parse(data.SecretString);

      const secretsConfig = JSON.stringify(secrets, null, 2);

      fs.writeFileSync('secrets-config.json', secretsConfig, 'utf8');

      console.log('Secrets successfully saved to secrets-config.json');
    }
  } catch (error) {
    console.error('Error retrieving secrets:', error);
  }
}
