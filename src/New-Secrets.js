import React, { useEffect, useState } from 'react';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

const SecretComponent = () => {
  const [secretValue, setSecretValue] = useState('');

  useEffect(() => {
    const getSecret = async () => {
      const client = new SecretsManagerClient({ region: 'YOUR_REGION' });

      try {
        const command = new GetSecretValueCommand({ SecretId: 'YOUR_SECRET_NAME' });
        const response = await client.send(command);

        if (response.SecretString) {
          const secretString = response.SecretString;
          // Do something with the secret string
          setSecretValue(secretString);
        }
      } catch (error) {
        console.error('Error retrieving secret:', error);
      }
    };

    getSecret();
  }, []);

  return (
    <div>
      <h1>Secret Value: {secretValue}</h1>
    </div>
  );
};

export default SecretComponent;
