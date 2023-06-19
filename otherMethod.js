const AWS = require('aws-sdk');




const secretsManager = new AWS.SecretsManager();




function getSecret(secretName) {

    return new Promise((resolve, reject) => {

        secretsManager.getSecretValue({ SecretId: secretName }, function(err, data) {

            if (err) {

                reject(err);

            } else {

                if ('SecretString' in data) {

                    resolve(JSON.parse(data.SecretString));

                } else {

                    let binaryData = Buffer.from(data.SecretBinary, 'base64');

                    reject(binaryData.toString('ascii'));

                }

            }

        });

    });

}




async function main() {

    const secrets = await getSecret('yourSecretName');

    const dbPassword = secrets.DB_PASSWORD;

}




main();
